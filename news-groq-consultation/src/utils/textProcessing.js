
import { compile } from "html-to-text";

export const htmlConverter = compile({ 
    wordwrap: 130 
});

export const cleanContent = (docs) => {
    return docs.filter(doc => doc.pageContent.trim() !== "");
};
