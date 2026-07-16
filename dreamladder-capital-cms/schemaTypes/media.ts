// media.js
export default {
    name: 'media',
    title: 'YouTube Media',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'url', title: 'YouTube Embed URL', type: 'url' },
        { name: 'showOnHomepage', title: 'Show on Homepage', type: 'boolean' }
    ]
}