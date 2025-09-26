# Contact Form Setup Instructions

Your contact form has been updated to use EmailJS for sending emails. Here's how to set it up:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (starts with `service_`)

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (starts with `template_`)

## 4. Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (starts with letters/numbers)

## 5. Update Configuration

1. Open `src/lib/emailjs-config.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: "service_your_actual_service_id", // Replace with your Service ID
  templateId: "template_your_actual_template_id", // Replace with your Template ID
  publicKey: "your_actual_public_key", // Replace with your Public Key
  toEmail: "tahasabir2023@gmail.com", // Your email address
};
```

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Go to your portfolio website
3. Try sending a test message through the contact form
4. Check your email to see if the message was received

## Features Added

✅ **Real email sending** using EmailJS  
✅ **Error handling** with user-friendly messages  
✅ **Loading states** with spinner animations  
✅ **Success confirmation** with checkmark  
✅ **Form validation** for required fields  
✅ **Responsive design** for all devices

## Troubleshooting

- **"Failed to send message"**: Check your EmailJS configuration
- **No emails received**: Verify your email service setup in EmailJS
- **Template errors**: Make sure your template uses the correct variables

## Alternative: Simple Mailto Fallback

If you prefer not to use EmailJS, the forms will fall back to opening the user's email client with a pre-filled message. This is less reliable but doesn't require any setup.

## Free Tier Limits

EmailJS free tier includes:

- 200 emails per month
- Basic email templates
- Standard support

This should be sufficient for a personal portfolio website.
