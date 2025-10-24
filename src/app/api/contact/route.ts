import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
    try {
        const { name, email, company, phone, message } = await req.json();

        if (!email || !message) {
            return NextResponse.json({ error: "Email and message are required" }, { status: 400 });
        }

        // Send the email
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["mathispaturle+sumiclima@gmail.com"], // the recipient
            subject: `Nuevo mensaje de contacto de ${name || "un usuario"}`,
            html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || "-"}</p>
        <p><strong>Teléfono:</strong> ${phone || "-"}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: error.message || "Ocurrió un error al enviar el mensaje" },
            { status: 500 }
        );
    }
}
