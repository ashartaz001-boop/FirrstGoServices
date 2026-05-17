import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MAILBOX = "careers@firstgoservices.in";

interface EnquiryPayload {
  name: string;
  email: string;
  company?: string;
  need: string;
  message: string;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

function validate(p: any): { ok: true; data: EnquiryPayload } | { ok: false; error: string } {
  if (!p || typeof p !== "object") return { ok: false, error: "Invalid payload" };
  const name = String(p.name ?? "").trim();
  const email = String(p.email ?? "").trim();
  const company = String(p.company ?? "").trim();
  const need = String(p.need ?? "").trim();
  const message = String(p.message ?? "").trim();
  if (!name || name.length > 100) return { ok: false, error: "Invalid name" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
    return { ok: false, error: "Invalid email" };
  if (company.length > 150) return { ok: false, error: "Invalid company" };
  if (!need || need.length > 100) return { ok: false, error: "Invalid category" };
  if (!message || message.length > 1000) return { ok: false, error: "Invalid message" };
  return { ok: true, data: { name, email, company, need, message } };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json().catch(() => null);
    const v = validate(body);
    if (!v.ok) {
      return new Response(JSON.stringify({ error: v.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { name, email, company, need, message } = v.data;

    const password = Deno.env.get("HOSTINGER_SMTP_PASSWORD");
    if (!password) {
      console.error("HOSTINGER_SMTP_PASSWORD not configured");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.hostinger.com",
        port: 465,
        tls: true,
        auth: { username: MAILBOX, password },
      },
    });

    const html = `
      <div style="font-family:Arial,sans-serif;color:#111;line-height:1.55">
        <h2 style="margin:0 0 12px">New Enquiry — First Go Services</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
          <tr><td><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><b>Company</b></td><td>${escapeHtml(company || "—")}</td></tr>
          <tr><td><b>Hiring Need</b></td><td>${escapeHtml(need)}</td></tr>
        </table>
        <h3 style="margin:18px 0 6px">Message</h3>
        <p style="white-space:pre-wrap;font-size:14px">${escapeHtml(message)}</p>
      </div>`;

    const text = `New Enquiry — First Go Services
Name: ${name}
Email: ${email}
Company: ${company || "-"}
Hiring Need: ${need}

Message:
${message}`;

    await client.send({
      from: `First Go Website <${MAILBOX}>`,
      to: MAILBOX,
      replyTo: `${name} <${email}>`,
      subject: `New Enquiry: ${need} — ${name}`,
      content: text,
      html,
    });

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-enquiry error:", err);
    const msg = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: "Failed to send enquiry", details: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
