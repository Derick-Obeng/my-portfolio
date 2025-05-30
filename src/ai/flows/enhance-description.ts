// Use server directive is required for Genkit flows.
'use server';

/**
 * @fileOverview Enhances project descriptions using AI.
 *
 * - enhanceDescription - A function that enhances project descriptions.
 * - EnhanceDescriptionInput - The input type for the enhanceDescription function.
 * - EnhanceDescriptionOutput - The return type for the enhanceDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceDescriptionInputSchema = z.object({
  description: z.string().describe('The project description to enhance.'),
});
export type EnhanceDescriptionInput = z.infer<typeof EnhanceDescriptionInputSchema>;

const EnhanceDescriptionOutputSchema = z.object({
  enhancedDescription: z.string().describe('The enhanced project description.'),
});
export type EnhanceDescriptionOutput = z.infer<typeof EnhanceDescriptionOutputSchema>;

export async function enhanceDescription(input: EnhanceDescriptionInput): Promise<EnhanceDescriptionOutput> {
  return enhanceDescriptionFlow(input);
}

const enhanceDescriptionPrompt = ai.definePrompt({
  name: 'enhanceDescriptionPrompt',
  input: {schema: EnhanceDescriptionInputSchema},
  output: {schema: EnhanceDescriptionOutputSchema},
  prompt: `You are an AI assistant that helps enhance project descriptions to clearly and effectively communicate the value and impact of the work.

  Please enhance the following project description:
  {{description}}
  `,
});

const enhanceDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceDescriptionFlow',
    inputSchema: EnhanceDescriptionInputSchema,
    outputSchema: EnhanceDescriptionOutputSchema,
  },
  async input => {
    const {output} = await enhanceDescriptionPrompt(input);
    return output!;
  }
);
