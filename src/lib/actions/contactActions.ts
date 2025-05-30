// Use server directive is required for server actions
"use server";

import { z } from "zod";

// Made contactFormSchema a local constant (removed 'export')
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  // Simulate sending an email or saving to a database
  console.log("Contact form submission received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real app, you would handle potential errors from your email service or database here.
  // For this example, we'll assume success.
  return {
    message: "Thank you for your message! We'll get back to you soon.",
    status: "success",
  };
}
