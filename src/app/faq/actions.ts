"use server";

import { generateFaq, GenerateFaqInput } from "@/ai/flows/dynamic-faq-generator";

export async function getFaqs(input: GenerateFaqInput) {
  try {
    const result = await generateFaq(input);
    return { success: true, faqs: result.faqs };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to generate FAQs." };
  }
}
