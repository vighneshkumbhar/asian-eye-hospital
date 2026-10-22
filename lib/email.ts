import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailPayload) {
  try {
    const from = process.env.EMAIL_FROM || "Asian Eye Hospital <noreply@asianeyehospital.com>";
    const data = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });
    return { success: true, id: data.data?.id };
  } catch (error: any) {
    console.error("Resend Email Error:", error);
    return { success: false, error: error.message };
  }
}

// ─── PREMIUM EMAIL HTML TEMPLATES ─────────────────────────────────────────

export function getAppointmentConfirmationTemplate(name: string, date: string, time: string, treatment: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #FAFCFE; color: #0a1628; border: 1px solid #dde8f4; border-radius: 16px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h2 style="font-family: Georgia, serif; color: #0B1F3A; font-size: 26px; margin: 0 0 10px;">Asian Eye Hospital</h2>
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #0FA3B1;">Centre of Excellence</span>
      </div>
      <div style="background-color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #dde8f4; box-shadow: 0 4px 12px rgba(11,31,58,0.03);">
        <h3 style="font-size: 20px; color: #0B1F3A; margin-top: 0; margin-bottom: 16px;">Appointment Request Received</h3>
        <p style="font-size: 15px; line-height: 1.6; color: #2c3e55;">Dear ${name},</p>
        <p style="font-size: 15px; line-height: 1.6; color: #2c3e55;">Thank you for choosing Asian Eye Hospital. We have received your request for a free consultation. A dedicated patient coordinator will call you within 30 minutes to confirm your slot.</p>
        
        <div style="margin: 24px 0; padding: 20px; background-color: #F0F7FF; border-radius: 8px; border-left: 4px solid #0FA3B1;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #0B1F3A; width: 120px;">Treatment:</td>
              <td style="padding: 6px 0; color: #2c3e55;">${treatment}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #0B1F3A;">Preferred Date:</td>
              <td style="padding: 6px 0; color: #2c3e55;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #0B1F3A;">Preferred Time:</td>
              <td style="padding: 6px 0; color: #2c3e55;">${time}</td>
            </tr>
          </table>
        </div>
        
        <p style="font-size: 14px; line-height: 1.6; color: #637488; margin-bottom: 0;">If you need immediate assistance, please call our 24/7 helpline at <a href="tel:+918888942222" style="color: #0FA3B1; font-weight: bold; text-decoration: none;">+91 8888942222</a>.</p>
      </div>
      <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #637488;">
        <p style="margin: 0;">3rd Floor, Sakar 10, Opp. Jehangir Hospital, Station Road, Pune 411001</p>
        <p style="margin: 5px 0 0;">© 2025 Asian Eye Hospital &amp; Laser Institute. All rights reserved.</p>
      </div>
    </div>
  `;
}

export function getNewLeadNotificationTemplate(name: string, phone: string, email: string, source: string, treatment: string, notes: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #FAFCFE; color: #0a1628; border: 1px solid #dde8f4; border-radius: 16px;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #dde8f4;">
        <h3 style="font-size: 20px; color: #0B1F3A; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #F0F7FF; padding-bottom: 10px;">🔥 New Lead Captured</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0B1F3A; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #2c3e55;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0B1F3A;">Phone:</td>
            <td style="padding: 8px 0; color: #2c3e55;"><a href="tel:${phone}" style="color: #0FA3B1; font-weight: bold; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0B1F3A;">Email:</td>
            <td style="padding: 8px 0; color: #2c3e55;">${email || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0B1F3A;">Source:</td>
            <td style="padding: 8px 0; color: #2c3e55;"><span style="background-color: #F0F7FF; color: #0FA3B1; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">${source}</span></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0B1F3A;">Treatment:</td>
            <td style="padding: 8px 0; color: #2c3e55;">${treatment || "General Inquiry"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0B1F3A; vertical-align: top;">Notes:</td>
            <td style="padding: 8px 0; color: #2c3e55; line-height: 1.5;">${notes || "None"}</td>
          </tr>
        </table>
        <div style="margin-top: 30px; text-align: center;">
          <a href="http://localhost:3000/dashboard" style="display: inline-block; background-color: #0B1F3A; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Open CRM Dashboard</a>
        </div>
      </div>
    </div>
  `;
}

export function getAppointmentStatusUpdateTemplate(name: string, status: string, date: string, time: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #FAFCFE; color: #0a1628; border: 1px solid #dde8f4; border-radius: 16px;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #dde8f4;">
        <h3 style="font-size: 20px; color: #0B1F3A; margin-top: 0; margin-bottom: 16px;">Appointment Status Update</h3>
        <p style="font-size: 15px; line-height: 1.6; color: #2c3e55;">Dear ${name},</p>
        <p style="font-size: 15px; line-height: 1.6; color: #2c3e55;">The status of your appointment at Asian Eye Hospital has been updated to:</p>
        
        <div style="text-align: center; margin: 24px 0;">
          <span style="display: inline-block; background-color: #0FA3B1; color: #ffffff; padding: 10px 24px; border-radius: 100px; font-weight: bold; font-size: 16px; text-transform: uppercase; letter-spacing: 1.5px;">${status}</span>
        </div>
        
        <p style="font-size: 14px; line-height: 1.6; color: #2c3e55;"><strong>Date:</strong> ${date}</p>
        <p style="font-size: 14px; line-height: 1.6; color: #2c3e55;"><strong>Time Slot:</strong> ${time}</p>
        
        <p style="font-size: 14px; line-height: 1.6; color: #637488; margin-top: 24px; margin-bottom: 0;">If you have any questions or need to reschedule, please call us at <a href="tel:+918888942222" style="color: #0FA3B1; font-weight: bold; text-decoration: none;">+91 8888942222</a>.</p>
      </div>
    </div>
  `;
}
