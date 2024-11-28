import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { model } from '../models/llmModel.js';
import { generalPrompt } from '../prompts/promptTemplates.js';

const parser = new StringOutputParser();

export const generalChain = RunnableSequence.from([
    generalPrompt,
    model,
    parser
]);

