// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Add these values to your .env.local file

export const EMAILJS_CONFIG = {
  serviceId:
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_your_service_id",
  templateId:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_your_template_id",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key",
  toEmail:
    process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || "tahasabir2023@gmail.com",
};

// Email template variables that should be available in your EmailJS template:
// - {{from_name}} - Sender's name
// - {{from_email}} - Sender's email
// - {{subject}} - Email subject
// - {{message}} - Email message
// - {{to_email}} - Your email address
