'use server';

/**
 * @fileOverview A dynamic FAQ generator AI agent.
 *
 * - generateFaq - A function that handles the FAQ generation process.
 * - GenerateFaqInput - The input type for the generateFaq function.
 * - GenerateFaqOutput - The return type for the generateFaq function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFaqInputSchema = z.object({
  topic: z
    .string()
    .describe("The topic or subject for which FAQs need to be generated."),
  audience: z
    .string()
    .describe("The intended audience for the FAQs (e.g., students, college management)."),
  numQuestions: z
    .number()
    .min(1)
    .max(10)
    .describe("The number of FAQs to generate."),
});
export type GenerateFaqInput = z.infer<typeof GenerateFaqInputSchema>;

const GenerateFaqOutputSchema = z.object({
  faqs: z.array(
    z.object({
      question: z.string().describe("The FAQ question."),
      answer: z.string().describe("The answer to the FAQ question."),
    })
  ).describe("An array of FAQs, each containing a question and an answer."),
});
export type GenerateFaqOutput = z.infer<typeof GenerateFaqOutputSchema>;

export async function generateFaq(input: GenerateFaqInput): Promise<GenerateFaqOutput> {
  return generateFaqFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFaqPrompt',
  input: {schema: GenerateFaqInputSchema},
  output: {schema: GenerateFaqOutputSchema},
  prompt: `You are an expert in generating FAQs for educational institutions.

  Generate a list of {{numQuestions}} frequently asked questions and their corresponding answers for the topic: {{topic}}.
  The target audience is: {{audience}}.

  Each question should be relevant and commonly asked by the specified audience. The answers should be concise, informative, and easy to understand.

  Format the output as a JSON array of objects, where each object has a 'question' and an 'answer' field.
  `,
});

const generateFaqFlow = ai.defineFlow(
  {
    name: 'generateFaqFlow',
    inputSchema: GenerateFaqInputSchema,
    outputSchema: GenerateFaqOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
