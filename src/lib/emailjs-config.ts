// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  serviceId: "service_your_service_id", // Replace with your EmailJS service ID
  templateId: "template_your_template_id", // Replace with your EmailJS template ID
  publicKey: "your_public_key", // Replace with your EmailJS public key
  toEmail: "tahasabir2023@gmail.com", // Your email address where messages will be sent
};

// Email template variables that should be available in your EmailJS template:
// - {{from_name}} - Sender's name
// - {{from_email}} - Sender's email
// - {{subject}} - Email subject
// - {{message}} - Email message
// - {{to_email}} - Your email address
