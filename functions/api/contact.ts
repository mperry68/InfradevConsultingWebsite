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

    // TODO: Add your email sending logic here
    // Options:
    // 1. Use SendGrid API
    // 2. Use Mailgun API
    // 3. Use Resend API
    // 4. Use Cloudflare Email Routing (if configured)
    
    // Example with Resend (you'll need to install @resend/node):
    /*
    import { Resend } from '@resend/node';
    const resend = new Resend(env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'contact@infradevconsulting.com',
      to: 'info@infradevconsulting.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    // For now, just log and return success
    console.log('Form submission:', { name, email, company, subject, message });

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

