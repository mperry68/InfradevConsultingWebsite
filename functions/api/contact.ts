// Cloudflare Pages Function for handling contact form submissions
// This file is in functions/api/contact.ts and will be available at /api/contact

export async function onRequestPost({ request, env }: { request: Request; env: any }) {
  
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Send email using FormSubmit service (no API key needed)
    const emailBody = `
New Contact Form Submission from InfraDev Consulting Website

Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Subject: ${subject}

Message:
${message}

---
This email was sent from the contact form on infradevconsulting.com
    `.trim();

    const formSubmitResponse = await fetch('https://formsubmit.co/ajax/marc@infradevconsulting.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: `Contact Form: ${subject}`,
        message: emailBody,
        _captcha: false, // Disable captcha for now
        _template: 'box' // Simple template
      })
    });

    if (!formSubmitResponse.ok) {
      throw new Error('Failed to send email');
    }

    console.log('Form submission sent successfully:', { name, email, company, subject });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'There was an error submitting your form. Please try again.' 
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

