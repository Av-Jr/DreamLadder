// dreamladder-capital-cms/schemaTypes/index.ts
import category from './category'
import post from './post'
import author from './author'
import media from './media' // 1. Import your new media schema file

// 2. Add media to the export array
export const schemaTypes = [post, author, category, media]