import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, mobile, email, budget, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Crea Web Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Enquiry from ${name}${mobile ? ` — ${mobile}` : ""}`,
      text: [
        `Name: ${name}`,
        `Mobile: ${mobile || "Not provided"}`,
        `Email: ${email}`,
        `Budget: ${budget || "Not specified"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1C1C1C;">
          <h2 style="color:#12372A;margin-bottom:24px;">New Enquiry from ${name}</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:8px 16px 8px 0;color:#7C746A;font-size:13px;width:110px;vertical-align:top;">Name</td>
              <td style="padding:8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 16px 8px 0;color:#7C746A;font-size:13px;vertical-align:top;">Mobile</td>
              <td style="padding:8px 0;">${mobile || "—"}</td>
            </tr>
            <tr>
              <td style="padding:8px 16px 8px 0;color:#7C746A;font-size:13px;vertical-align:top;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#12372A;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 16px 8px 0;color:#7C746A;font-size:13px;vertical-align:top;">Budget</td>
              <td style="padding:8px 0;">${budget || "—"}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:0 0 24px;" />
          <h3 style="color:#12372A;margin-bottom:12px;">Message</h3>
          <p style="line-height:1.75;white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
