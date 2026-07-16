// studio-hello-world/lib/sanityClient.js
import { createClient } from '@sanity/client';

export const homepageClient = createClient({
    // Use your actual Project ID from sanity.config.ts
    projectId: import.meta.env.VITE_prjID || 'your-actual-project-id',
    dataset: 'production',
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2026-07-14', // Use today's date or the latest version
});

export const mainPageClient = createClient({
    // Use your actual Project ID from sanity.config.ts
    projectId: import.meta.env.VITE_prjID || 'your-actual-project-id',
    dataset: 'homepage_blogs',
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2026-07-14', // Use today's date or the latest version
});