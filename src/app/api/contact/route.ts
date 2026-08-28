import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { Resend } from "resend";

// Generate a human-readable folio
function generateFolio(): string {
  const date = new Date();
  const yy = date.getFullYear().toString().slice(-2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const rand = Math.floor(Math.random() * 9000 + 1000);
  return `G360-${yy}${mm}${dd}-${rand}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const folio = generateFolio();
    const now = new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" });

    // ─── Send email via Resend (optional — requires RESEND_API_KEY) ───
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (resendApiKey && contactEmail) {
      const resend = new Resend(resendApiKey);

      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #333;">
          <div style="background: #090909; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #B7FF00; font-size: 24px; margin: 0;">GYM 360 Equipment</h1>
            <p style="color: #999; font-size: 13px; margin: 6px 0 0;">Nueva solicitud de contacto</p>
          </div>

          <div style="background: #f9f9f9; padding: 28px; border-radius: 0 0 12px 12px;">
            <div style="background: #fff; border-radius: 8px; padding: 20px; border: 1px solid #e5e7eb; margin-bottom: 16px;">
              <p style="font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Folio</p>
              <p style="font-size: 20px; font-weight: 900; color: #090909; margin: 0; font-family: monospace;">${folio}</p>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ["Nombre", data.nombre],
                ["Empresa", data.empresa || "—"],
                ["Teléfono", data.telefono],
                ["Correo", data.correo],
                ["Ciudad", data.ciudad],
                ["Motivo de consulta", data.tipoProyecto],
                ["Equipos de interés", data.equipos || "—"],
                ["Presupuesto estimado", data.presupuesto || "—"],
                ["Fecha de solicitud", now],
              ]
                .map(
                  ([k, v]) => `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; width: 40%;">${k}</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${v}</td>
                </tr>`
                )
                .join("")}
            </table>

            <div style="margin-top: 20px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
              <p style="font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; margin: 0 0 8px;">Mensaje</p>
              <p style="font-size: 14px; color: #111827; margin: 0; line-height: 1.6;">${data.mensaje.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: "GYM 360 Equipment <noreply@gym360equipment.com.mx>",
        to: [contactEmail],
        replyTo: data.correo,
        subject: `[${folio}] Nueva solicitud de ${data.nombre} — ${data.tipoProyecto}`,
        html,
      });
    }

    // Always return success with folio (even without email config)
    return NextResponse.json({ success: true, folio }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
