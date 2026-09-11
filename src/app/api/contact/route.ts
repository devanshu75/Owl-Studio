import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
          message: "Please correct the errors in the form.",
        },
        { status: 400 }
      );
    }

    const { name, email, company, service, budgetRange, message, honeypot } =
      validationResult.data;

    // Spam Protection Strategy: If honeypot is populated, silently acknowledge without processing
    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json(
        {
          success: true,
          message: "Your inquiry has been received.",
        },
        { status: 200 }
      );
    }

    // Secure Server-Side Forwarding (FormSubmit endpoint never exposed client-side)
    const formSubmitEndpoint =
      "https://formsubmit.co/ajax/e56396ac2ab75a1416d07965e3274593";

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Owl Studio Project Inquiry: ${name} (${service})`,
          name,
          email,
          company: company || "N/A",
          service,
          budgetRange,
          message,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error("FormSubmit upstream response not ok:", await response.text());
      }
    } catch (forwardError) {
      console.error("Error forwarding inquiry upstream:", forwardError);
      // Even if upstream fails, return success to validated client to prevent UX dropoff
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your project inquiry has been received. Our team will review your brief and respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your brief. Please try again.",
      },
      { status: 500 }
    );
  }
}
