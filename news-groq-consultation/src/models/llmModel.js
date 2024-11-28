import { ChatGroq } from "@langchain/groq";
import { CONFIG } from '../config/config.js';

const GROQ_API_KEY = "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";

export const model = new ChatGroq({
    temperature: CONFIG.TEMPERATURE,
    modelName: CONFIG.MODEL_NAME,
    streaming: true,
    apiKey: GROQ_API_KEY
});
