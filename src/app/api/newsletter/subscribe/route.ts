import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(req: NextRequest) {

    const resend = new Resend(process.env.RESEND_API_KEY!);

    try {
        const { name, email } = await req.json();

        console.log(name)
        console.log(email)

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const audiences = await resend.audiences.list()

        // Add subscriber to Resend broadcast audience
        // Resend has "contacts" for newsletters

        console.log(audiences)


        await resend.contacts.create({
            email: email,
            audienceId: audiences.data?.data[0]?.id ?? "",
            firstName: name,
            lastName: "",
            unsubscribed: false
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Resend subscribe error:", error);
        return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
    }
}
