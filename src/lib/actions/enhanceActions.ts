// Use server directive is required for server actions
"use server";

import { z } from "zod";
import { enhanceDescription as enhanceDescriptionFlow, type EnhanceDescriptionInput } from "@/ai/flows/enhance-description";

// Made enhanceDescriptionSchema a local constant
const enhanceDescriptionSchema = z.object({
  description: z.string().min(10, { message: "Description must be at least 10 characters." }).max(2000, { message: "Description must be at most 2000 characters." }),
});

export type EnhanceDescriptionState = {
  message: string;
  status: "success" | "error" | "idle";
  enhancedDescription?: string;
  errors?: {
    description?: string[];
  };
};

export async function enhanceDescriptionAction(
  prevState: EnhanceDescriptionState,
  formData: FormData
): Promise<EnhanceDescriptionState> {
  const description = formData.get("description");
  
  const validatedFields = enhanceDescriptionSchema.safeParse({
    description: description,
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const inputData: EnhanceDescriptionInput = {
    description: validatedFields.data.description,
  };

  try {
    // Simulate network delay for AI processing
    // await new Promise(resolve => setTimeout(resolve, 1500));
    
    const result = await enhanceDescriptionFlow(inputData);

    if (result && result.enhancedDescription) {
      return {
        message: "Description enhanced successfully!",
        status: "success",
        enhancedDescription: result.enhancedDescription,
      };
    } else {
      return {
        message: "AI enhancement failed to produce a result. Please try again.",
        status: "error",
      };
    }
  } catch (error) {
    console.error("Error enhancing description:", error);
    return {
      message: "An unexpected error occurred while enhancing the description. Please try again later.",
      status: "error",
    };
  }
}
