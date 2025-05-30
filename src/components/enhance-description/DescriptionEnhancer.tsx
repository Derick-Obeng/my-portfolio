"use client";

import { useActionState, useFormStatus } from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { enhanceDescriptionAction, type EnhanceDescriptionState } from "@/lib/actions/enhanceActions";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Loader2, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const initialState: EnhanceDescriptionState = {
  message: "",
  status: "idle",
};

function EnhanceButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      Enhance Description
    </Button>
  );
}

export function DescriptionEnhancer() {
  const [state, formAction] = useActionState(enhanceDescriptionAction, initialState);
  const { toast } = useToast();
  const [originalDescription, setOriginalDescription] = useState("");

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Enhancement Complete!",
        description: state.message,
      });
    } else if (state.status === "error" && state.message) {
      toast({
        title: "Enhancement Failed",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    setOriginalDescription(formData.get("description") as string || "");
    // formAction will be called by React automatically
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl text-primary flex items-center">
          <Sparkles className="mr-2 h-7 w-7" /> AI Description Enhancer
        </CardTitle>
        <CardDescription>
          Improve your project descriptions with AI-powered suggestions for clarity and impact.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleFormSubmit} action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="description" className="text-lg font-medium">Your Project Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter your project description here..."
              rows={8}
              required
              className="text-base"
            />
            {state.errors?.description && (
              <p className="text-sm text-destructive">{state.errors.description.join(", ")}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <EnhanceButton />
        </CardFooter>
      </form>

      {state.status === "success" && state.enhancedDescription && (
        <>
          <Separator className="my-6" />
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Original Description</h3>
              <div className="p-4 bg-muted rounded-md text-muted-foreground whitespace-pre-wrap text-sm">
                {originalDescription}
              </div>
            </div>
            <div className="flex justify-center my-4">
                <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">✨ Enhanced Description ✨</h3>
              <div className="p-4 bg-primary/10 border border-primary/30 rounded-md text-foreground whitespace-pre-wrap text-sm leading-relaxed">
                {state.enhancedDescription}
              </div>
            </div>
          </CardContent>
        </>
      )}
      {state.status === "error" && originalDescription && !state.enhancedDescription && (
         <>
          <Separator className="my-6" />
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Your Original Description</h3>
              <div className="p-4 bg-muted rounded-md text-muted-foreground whitespace-pre-wrap text-sm">
                {originalDescription}
              </div>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
}
