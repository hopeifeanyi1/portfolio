//src/app/api/send/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    // Basic validation
    if (!email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['hopeifeanyi2@gmail.com'],
      replyTo: email, 
      subject: `Portfolio Contact: ${subject}`,
      headers: {
        'X-Entity-Ref-ID': new Date().getTime().toString(),
      },
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 8px; font-size: 16px; font-weight: 600;">From:</h3>
              <p style="margin: 0; padding: 12px; background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #667eea;">
                ${email}
              </p>
            </div>

            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 8px; font-size: 16px; font-weight: 600;">Subject:</h3>
              <p style="margin: 0; padding: 12px; background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #667eea;">
                ${subject}
              </p>
            </div>

            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 8px; font-size: 16px; font-weight: 600;">Message:</h3>
              <div style="margin: 0; padding: 12px; background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #667eea;">
                ${message}
              </div>
            </div>

            <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 6px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                📧 This message was sent from your portfolio contact form.<br>
                💡 You can reply directly to this email to respond to the sender.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
You can reply directly to this email to respond to the sender.
      `,
    });
    return NextResponse.json({ 
      message: 'Email sent successfully', 
      id: data.id 
    });
    
  } catch (error) {
    // Handle specific Resend errors
    if (error.message.includes('Invalid `from` address')) {
      return NextResponse.json(
        { message: 'Email configuration error. Please contact the site administrator.' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        message: 'Failed to send email. Please try again later.', 
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}