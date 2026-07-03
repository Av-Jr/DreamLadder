import React, {useEffect, useMemo, useState} from 'react';
import "./Blogs.scss";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";

const SANITY_PROJECT_ID = "d9jtrq56";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2025-02-19";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    image,
    body
}`;

const getSanityQueryUrl = (query) => {
    const encodedQuery = encodeURIComponent(query);
    return `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
};

const getImageUrl = (image) => {
    const ref = image?.asset?._ref;

    if (!ref) return "";

    const [, assetId, dimensions, extension] = ref.split("-");
    if (!assetId || !dimensions || !extension) return "";

    return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${assetId}-${dimensions}.${extension}?auto=format`;
};

const formatDate = (date) => {
    if (!date) return "";

    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(new Date(date));
};

const getPlainText = (blocks = []) => {
    return blocks
        .filter((block) => block?._type === "block")
        .flatMap((block) => block.children ?? [])
        .map((child) => child.text ?? "")
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
};

const getBlockText = (block) => {
    return (block?.children ?? [])
        .map((child) => child.text ?? "")
        .join("")
        .trim();
};

const isBlankBlock = (block) => {
    return block?._type === "block" && getBlockText(block) === "";
};

const isValueLikeCell = (value) => {
    return /^((rs\.?\s*)?[\d,.]+|[\d,.]+\s*(%|cr|crore|lakhs?)|~?[\d,.]+\s*times)$/i.test(value.trim());
};

const isPercentCell = (value) => {
    return /^[\d,.]+\s*%$/i.test(value.trim());
};

const isShortTableCell = (value) => {
    return value.length > 0 && value.length <= 90;
};

const isTableHeadingText = (value) => {
    const text = value.trim();

    return text.length <= 90 && (
        /^table([\s-]*[ivxlcdm\d]+)?\s*:?\s*$/i.test(text) ||
        /\btable\b/i.test(text)
    );
};

const hasTableLikeCellsAfter = (blocks, index) => {
    const preview = [];
    let cursor = index + 1;

    while (cursor < blocks.length && preview.length < 8) {
        const text = getBlockText(blocks[cursor]);

        if (text) preview.push(text);
        cursor += 1;
    }

    return preview.length >= 6 && preview.every(isShortTableCell);
};

const isImportedTableStart = (blocks, index) => {
    const text = getBlockText(blocks[index]);
    const previousText = getBlockText(blocks[index - 1]);

    if (!text || blocks[index]?._type !== "block") return false;
    if (isTableHeadingText(text) && hasTableLikeCellsAfter(blocks, index)) return true;

    return text.length <= 80 && hasTableLikeCellsAfter(blocks, index) && (!previousText || previousText.length > 120);
};

const makeImportedTable = (key, title, rows) => ({
    _key: key,
    _type: "tableBlock",
    title,
    rows: rows.map((cells, index) => ({
        _key: `${key}-${index}`,
        cells,
    })),
});

const collectImportedTableCells = (blocks, startIndex) => {
    const cells = [];
    let cursor = startIndex + 1;

    while (cursor < blocks.length) {
        const text = getBlockText(blocks[cursor]);

        if (isBlankBlock(blocks[cursor])) {
            let nextCursor = cursor + 1;

            while (isBlankBlock(blocks[nextCursor])) nextCursor += 1;

            const nextText = getBlockText(blocks[nextCursor]);

            if (!nextText || isImportedTableStart(blocks, nextCursor) || nextText.length > 120) break;

            cursor = nextCursor;
            continue;
        }

        if (cells.length > 0 && isImportedTableStart(blocks, cursor)) break;
        if (cells.length > 0 && text.length > 120) break;
        if (!isShortTableCell(text)) break;

        cells.push(text);
        cursor += 1;
    }

    return {cells, nextIndex: cursor};
};

const buildRateProjectionRows = (cells) => {
    const firstPercentIndex = cells.findIndex(isPercentCell);
    if (firstPercentIndex < 1) return null;

    let percentCount = 0;
    while (isPercentCell(cells[firstPercentIndex + percentCount] ?? "")) {
        percentCount += 1;
    }

    if (percentCount < 2) return null;

    const rowSize = percentCount + 1;
    const rows = [[cells[firstPercentIndex - 1], ...cells.slice(firstPercentIndex, firstPercentIndex + percentCount)]];
    const values = cells.slice(firstPercentIndex + percentCount);

    for (let index = 0; index < values.length; index += rowSize) {
        const row = values.slice(index, index + rowSize);
        if (row.length === rowSize) rows.push(row);
    }

    return rows.length > 1 ? rows : null;
};

const buildMetricRows = (cells) => {
    const yearsIndex = cells.findIndex((cell) => /no\.?\s*of\s*years/i.test(cell));
    if (yearsIndex === -1) return null;

    let valueCount = 0;
    while (isValueLikeCell(cells[yearsIndex + 1 + valueCount] ?? "")) {
        valueCount += 1;
    }

    if (valueCount < 2) return null;

    const metrics = [];
    let cursor = 0;

    while (cursor < cells.length) {
        const label = cells[cursor];
        const values = cells.slice(cursor + 1, cursor + 1 + valueCount);

        if (!label || values.length !== valueCount) return null;

        metrics.push([label, ...values]);
        cursor += valueCount + 1;
    }

    const columns = metrics.find((row) => /no\.?\s*of\s*years/i.test(row[0]))?.slice(1);
    if (!columns) return null;

    return [["", ...columns], ...metrics.filter((row) => !/no\.?\s*of\s*years/i.test(row[0]))];
};

const buildFixedColumnRows = (cells) => {
    let bestRows = null;
    let bestScore = -1;

    for (let columnCount = 2; columnCount <= 6; columnCount += 1) {
        if (cells.length <= columnCount || (cells.length - columnCount) % columnCount !== 0) continue;

        const headers = cells.slice(0, columnCount);
        const rowCount = (cells.length - columnCount) / columnCount;
        const headerScore = headers.filter((cell) => !isValueLikeCell(cell)).length;
        const score = rowCount + headerScore + (columnCount === 4 ? 1 : 0);

        if (score > bestScore) {
            const rows = [headers];

            for (let index = columnCount; index < cells.length; index += columnCount) {
                rows.push(cells.slice(index, index + columnCount));
            }

            bestRows = rows;
            bestScore = score;
        }
    }

    return bestRows;
};

const getImportedTable = (blocks, index) => {
    if (!isImportedTableStart(blocks, index)) return null;

    const heading = getBlockText(blocks[index]).replace(/:$/, "");
    const {cells, nextIndex} = collectImportedTableCells(blocks, index);
    let title = heading;
    let tableCells = cells;

    if (/^duration\s*:/i.test(cells[0] ?? "")) {
        title = `${heading} - ${cells[0]}`;
        tableCells = cells.slice(1);
    }

    const rows = buildRateProjectionRows(tableCells) ?? buildMetricRows(tableCells) ?? buildFixedColumnRows(tableCells);

    if (!rows || rows.length < 2) return null;

    return {
        block: makeImportedTable(blocks[index]._key, title, rows),
        nextIndex,
    };
};

const renderMarks = (child, markDefs = []) => {
    const text = child.text ?? "";

    return (child.marks ?? []).reduce((content, mark) => {
        const link = markDefs.find((definition) => definition._key === mark && definition._type === "link");

        if (mark === "strong") return <strong>{content}</strong>;
        if (mark === "em") return <em>{content}</em>;
        if (mark === "code") return <code>{content}</code>;
        if (mark === "underline") return <u>{content}</u>;
        if (mark === "strike-through") return <s>{content}</s>;

        if (link?.href) {
            const isExternal = !link.href.startsWith("/");
            return (
                <a href={link.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer noopener" : undefined}>
                    {content}
                </a>
            );
        }

        return content;
    }, text);
};

const RenderTable = ({block}) => {
    const rows = block.rows ?? [];

    if (!rows.length) return null;

    return (
        <figure className="blogTableWrap">
            {block.title && <figcaption><h2 className="Syn small">{block.title}</h2></figcaption>}
            <table>
                <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={row._key ?? rowIndex}>
                        {(row.cells ?? []).map((cell, cellIndex) => {
                            const Cell = rowIndex === 0 ? "th" : "td";
                            return <Cell key={`${row._key ?? rowIndex}-${cellIndex}`}><span className="Gen small light">{cell}</span></Cell>;
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </figure>
    );
};

const RenderBlock = ({block}) => {
    if (block._type === "tableBlock") return <RenderTable block={block}/>;
    if (block._type !== "block") return null;

    const children = (block.children ?? []).map((child) => (
        <React.Fragment key={child._key}>{renderMarks(child, block.markDefs)}</React.Fragment>
    ));

    switch (block.style) {
        case "h1":
            return <h1 className="Syn small">{children}</h1>;
        case "h2":
            return <h2 className="Syn small">{children}</h2>;
        case "h3":
            return <h2 className="Syn small">{children}</h2>;
        case "h4":
            return <h2 className="Syn small">{children}</h2>;
        case "blockquote":
            return <blockquote><span className="Gen small ju light">{children}</span></blockquote>;
        default:
            return <span className="blogParagraph Gen small ju light">{children}</span>;
    }
};

const RenderBody = ({blocks = []}) => {
    const content = [];

    for (let index = 0; index < blocks.length; index += 1) {
        const block = blocks[index];
        const importedTable = getImportedTable(blocks, index);

        if (importedTable) {
            content.push(<RenderTable key={importedTable.block._key} block={importedTable.block}/>);
            index = importedTable.nextIndex - 1;
            continue;
        }

        if (block?._type === "block" && block.listItem) {
            const listType = block.listItem === "number" ? "ol" : "ul";
            const listItems = [];

            while (blocks[index]?._type === "block" && blocks[index].listItem === block.listItem) {
                const item = blocks[index];
                listItems.push(
                    <li key={item._key}>
                        <span className="Gen small ju light">
                            {(item.children ?? []).map((child) => (
                                <React.Fragment key={child._key}>{renderMarks(child, item.markDefs)}</React.Fragment>
                            ))}
                        </span>
                    </li>
                );
                index += 1;
            }

            index -= 1;

            content.push(React.createElement(listType, {key: block._key}, listItems));
            continue;
        }

        content.push(<RenderBlock key={block._key ?? index} block={block}/>);
    }

    return <>{content}</>;
};

export default function Blogs() {
    const [posts, setPosts] = useState([]);
    const [selectedSlug, setSelectedSlug] = useState("");
    const [status, setStatus] = useState("loading");
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        async function loadPosts() {
            try {
                const response = await fetch(getSanityQueryUrl(POSTS_QUERY));

                if (!response.ok) {
                    throw new Error(`Sanity returned ${response.status}`);
                }

                const data = await response.json();
                const fetchedPosts = data.result ?? [];

                if (!isMounted) return;

                setPosts(fetchedPosts);
                setSelectedSlug("");
                setStatus("ready");
            } catch (fetchError) {
                if (!isMounted) return;

                setError(fetchError.message || "Unable to load blogs.");
                setStatus("error");
            }
        }

        loadPosts();

        return () => {
            isMounted = false;
        };
    }, []);

    const selectedPost = useMemo(() => {
        return posts.find((post) => post.slug === selectedSlug) ?? null;
    }, [posts, selectedSlug]);

    return (
        <div id={"BlogsMC"}>
            <div className="titleHeadZ">
                <NavBar></NavBar>
                <span className="titleZ">Blogs</span>
            </div>
            <main className="blogsContent">
                {status === "loading" && <span className="blogStatus Gen small light">Loading blogs...</span>}

                {status === "error" && (
                    <span className="blogStatus blogStatusError Gen small">
                        Unable to load blogs from Sanity. {error}
                    </span>
                )}

                {status === "ready" && posts.length === 0 && (
                    <span className="blogStatus Gen small light">No blogs have been published yet.</span>
                )}

                {status === "ready" && posts.length > 0 && (
                    <section className={`blogsLayout ${selectedPost ? "detailView" : "indexView"}`} aria-label="Blog posts">
                        <aside className="blogsList" aria-label="All blog posts">
                            {posts.map((post) => {
                                const excerpt = getPlainText(post.body).slice(0, 150);
                                const imageUrl = getImageUrl(post.image);
                                const isActive = selectedSlug === post.slug;

                                return (
                                    <button
                                        className={`blogCard ${isActive ? "active" : ""}`}
                                        key={post._id}
                                        type="button"
                                        onClick={() => setSelectedSlug(post.slug)}
                                    >
                                        {imageUrl && <img src={imageUrl} alt={post.title}/>}
                                        <span className="blogCardDate Gen small light">{formatDate(post.publishedAt)}</span>
                                        <h2 className="Syn small">{post.title}</h2>
                                        {excerpt && <span className="blogExcerpt Gen small ju light">{excerpt}{excerpt.length === 150 ? "..." : ""}</span>}
                                    </button>
                                );
                            })}
                        </aside>

                        {selectedPost && (
                            <article className="blogArticle">
                                <button className="blogBackButton" type="button" aria-label="Back to all blogs" onClick={() => setSelectedSlug("")}>
                                    <span className="Gen small">x</span>
                                </button>
                                {getImageUrl(selectedPost.image) && (
                                    <img className="blogHeroImage" src={getImageUrl(selectedPost.image)} alt={selectedPost.title}/>
                                )}
                                <span className="blogDate Gen small light">{formatDate(selectedPost.publishedAt)}</span>
                                <h1 className="Syn small">{selectedPost.title}</h1>
                                <div className="blogBody">
                                    <RenderBody blocks={selectedPost.body}/>
                                </div>
                            </article>
                        )}
                    </section>
                )}
            </main>
            <Ql/>
        </div>
    )
}
