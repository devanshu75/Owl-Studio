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

    const { name, email, phone, service, message } = validationResult.data;

    // Forward to FormSubmit (Owl Studio form endpoint)
    const formSubmitEndpoint = "https://formsubmit.co/ajax/e56396ac2ab75a1416d07965e3274593";

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Owl Studio Lead: ${name} (${service})`,
          name,
          email,
          phone,
          service,
          message,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error("FormSubmit response not ok:", await response.text());
      }
    } catch (forwardError) {
      console.error("Error forwarding lead to FormSubmit:", forwardError);
      // Even if external forward fails, we still return success to the client if validated
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your project brief has been received. We will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request. Please try again.",
      },
      { status: 500 }
    );
  }
}
