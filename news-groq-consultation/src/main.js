import readline from "readline";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { model } from './models/llmModel.js';
import { classificationChain } from './chains/classificationChain.js';
import { setupNewsChain } from './chains/newsChain.js';
import { generalPrompt } from './prompts/promptTemplates.js';

async function main() {
    const newsChain = await setupNewsChain();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("News consultation system ready! Ask your questions (type 'exit' to quit)");

    while (true) {
        const question = await new Promise(resolve => {
            rl.question("\nYour question: ", resolve);
        });

        if (question.toLowerCase() === 'exit') {
            break;
        }

        try {
            console.log("\nClassifying question...");
            const questionType = await classificationChain.invoke({
                question: question
            });
            console.log(`Question type: ${questionType}`);

            if (questionType.toLowerCase().includes('news')) {
                console.log("Searching recent news...");
                const response = await newsChain.invoke(question);
                console.log("\nNews Answer:", response);
            } else {
                console.log("Providing general knowledge answer...");
                const response = await RunnableSequence.from([
                    generalPrompt,
                    model,
                    new StringOutputParser()
                ]).invoke({ question });
                console.log("\nGeneral Answer:", response);
            }
        } catch (error) {
            console.error("Error processing question:", error);
        }
    }

    rl.close();
}

main().catch(console.error);
