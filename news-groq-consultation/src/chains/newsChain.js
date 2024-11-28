import { RunnableSequence, RunnablePassthrough } from "@langchain/core/runnables";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { model } from '../models/llmModel.js';
import { newsPrompt } from '../prompts/promptTemplates.js';
import { cnnLoader, cbcLoader } from '../loaders/newsLoaders.js';
import { CONFIG } from '../config/config.js';

const parser = new StringOutputParser();

const embeddings = {
    embedQuery: async (text) => Array(1536).fill(0),
    embedDocuments: async (documents) => documents.map(() => Array(1536).fill(0))
};

export async function setupNewsChain() {
    console.log("Loading current news articles...");
    
    try {
        const [cnnDocs, cbcDocs] = await Promise.all([
            cnnLoader.load().catch(() => []),
            cbcLoader.load().catch(() => [])
        ]);

        const allDocs = [...cnnDocs, ...cbcDocs];
        console.log(`Loaded ${allDocs.length} articles`);

        const vectorStore = await MemoryVectorStore.fromTexts(
            allDocs.map(doc => doc.pageContent),
            {},
            embeddings
        );

        const retriever = vectorStore.asRetriever({
            k: 3,
            timeout: 5000
        });

        return RunnableSequence.from([
            async (query) => {
                const docs = await retriever.getRelevantDocuments(query);
                return {
                    context: docs.map(d => d.pageContent).join('\n\n'),
                    question: query
                };
            },
            newsPrompt,
            model,
            parser
        ]);
    } catch (error) {
        console.error("Error in news chain setup:", error);
        throw error;
    }
}

