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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 10px;">
          <div style="text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Portfolio Reach Out</h1>
          </div>
          
          <div style=""margin-top: 15px;"">
            <div style="margin-bottom: 15px;">
              <h3 style="color: #374151; margin-bottom: 8px; font-size: 16px; font-weight: 600;">From: <span style="margin: 0; padding-left: 12px;">${email}</span></h3>
            </div>

            <div style="margin-bottom: 15px;">
              <h3 style="color: #374151; margin-bottom: 8px; font-size: 16px; font-weight: 600;">Subject: <span style="margin: 0; padding-left: 12px;">${subject}</span></h3>
            </div>

            <div style="margin-bottom: 15px;">
              <div style="margin: 0; ">
                ${message}
              </div>
            </div>

            <div style="margin-top: 30px; ">
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