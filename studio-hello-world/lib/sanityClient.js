// src/utils/sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// 1. Client for the primary production dataset
export const client = createClient({
    projectId: import.meta.env.VITE_prjID,
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-05-03',
    token: import.meta.env.VITE_adminToken
});

// 2. Client for the homepage_blogs dataset
export const homepageClient = createClient({
    projectId: import.meta.env.VITE_prjID,
    dataset: 'homepage_blogs',
    useCdn: false,
    apiVersion: '2023-05-03',
    token: import.meta.env.VITE_adminToken
});

// 3. Utility to generate image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);