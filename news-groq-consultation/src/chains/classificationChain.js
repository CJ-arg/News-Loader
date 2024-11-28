import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { model } from '../models/llmModel.js';
import { classificationPrompt } from '../prompts/promptTemplates.js';

const parser = new StringOutputParser();

export const classificationChain = RunnableSequence.from([
    classificationPrompt,
    model,
    parser
]);

