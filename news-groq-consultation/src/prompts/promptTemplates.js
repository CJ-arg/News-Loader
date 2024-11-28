import { ChatPromptTemplate } from "@langchain/core/prompts";

export const classificationPrompt = ChatPromptTemplate.fromTemplate(
    `You are a binary classifier. Respond ONLY with one word: 'news' or 'general'.
    If the question asks about current events, recent developments, or ongoing situations, respond with 'news'.
    If the question is about historical facts, concepts, or timeless knowledge, respond with 'general'.
    Question: {question}
    Response:`
);

export const newsPrompt = ChatPromptTemplate.fromTemplate(
    `You are a news reporter. Using ONLY the following recent news context, provide a current and factual answer.
    If the context doesn't contain relevant current information, state that current information is not available.
    
    Context: {context}
    Question: {question}
    
    Current news response:`
);

export const generalPrompt = ChatPromptTemplate.fromTemplate(
    `You are a knowledgeable assistant. Provide a general knowledge answer to this question:
    Question: {question}
    Response:`
);
