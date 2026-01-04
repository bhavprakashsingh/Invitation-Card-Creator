import { GoogleGenAI } from "@google/genai";
import { InvitationDetails } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHindiMessage = async (details: InvitationDetails): Promise<string> => {
  try {
    const langContext = details.language === 'hi' ? 'Hindi (Sanskritized, formal)' : 'English (Formal, Indian Wedding style)';
    
    const prompt = `
      Create a very short, traditional, and warm 2-line invitation message (Shayari or poetic verse) in ${langContext} for a Hindu wedding card.
      
      Context:
      Groom: ${details.groomName}
      Bride: ${details.brideName}
      
      The tone should be religious, respectful, and welcoming.
      Output ONLY the text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating text:", error);
    if (details.language === 'hi') {
        return "मंगल भवन अमंगल हारी,\nद्रवहु सुदसरथ अजर बिहारी।";
    } else {
        return "Matches are made in heaven,\nbut celebrated on earth.";
    }
  }
};