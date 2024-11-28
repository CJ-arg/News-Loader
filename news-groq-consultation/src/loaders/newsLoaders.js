import { RecursiveUrlLoader } from "@langchain/community/document_loaders/web/recursive_url";
import { CONFIG } from '../config/config.js';

const htmlConverter = (html) => {
    // Simple text extraction
    const text = html.replace(/<[^>]*>/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();
    return text;
};

// Simplified loaders with specific paths
export const cnnLoader = new RecursiveUrlLoader("https://cnnespanol.cnn.com/category/mundo/", {
    extractor: htmlConverter,
    maxDepth: 1,
    timeout: 10000
});

export const cbcLoader = new RecursiveUrlLoader("https://www.cbc.ca/news/world", {
    extractor: htmlConverter,
    maxDepth: 1,
    timeout: 10000
});
