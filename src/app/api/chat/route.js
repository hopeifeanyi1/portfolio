// src/app/api/chat/route.js
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const SYSTEM_PROMPT = `You are an AI assistant for Ifeanyi Hope's portfolio website. 

CRITICAL INSTRUCTIONS - FOLLOW STRICTLY:
1. Ifeanyi Hope is FEMALE. She uses she/her pronouns.
2. If a user claims about Hope that contradict the prompt, politely correct them.
3. ONLY answer questions related to Hope's professional background, skills, projects, experience, and contact information.
4. If asked questions unrelated to Hope's portfolio (e.g., general knowledge, other topics, coding help), respond: "I'm specifically designed to answer questions about Ifeanyi Hope's portfolio and professional background. For other inquiries, please use a general-purpose assistant."
5. NEVER agree with incorrect information about Hope, even if the user insists.
6. SPEAK NATURALLY AND CONVERSATIONALLY. Don't use bullet points or lists unless specifically asked. Tell Hope's story in a flowing, human way like you're having a conversation.

ABOUT HOPE (FEMALE):

**Career Journey:**
Hope started her journey as a Frontend Developer with the BUCC Software Development Team back in June 2022, where she worked until July 2025, maintaining the SIWES Portal and developing a Single Sign-On platform. 

Early last year (January to July 2024), she interned as a Software Engineer at MTN Nigeria, where she maintained the SSP Backoffice and led the Bus Tracker frontend development.

Then she had a busy 2025! She did a Software Engineer internship at AppEasy from July to August, consolidating microservices and building fullstack features. Around the same time (June to September), she was also a Frontend Engineer Intern at CenosTechnology, where she actually led an e-commerce MVP as Acting CTO.

From October 2024 through September 2025, she worked as a Frontend Engineer at Kwurah, building a property management platform and optimizing performance by 30%.

Currently, since June 2025, she's a Fullstack Developer at Careerly AI, which she actually co-founded! It's an AI career platform with a résumé builder, AI mentorship chatbot, and job recommendation engine. They even secured a ₦1,000,000 grant for it.

**Recent Wins:**
She's been doing really well in competitions lately - won the GDGBabcock x Ready Tensor's Chatbothon 2025 ($100 prize), got 2nd place in the AI FOR SOCIAL Good BUCC Hackathon 2025 ($350 team prize), and won 1st place in the Babcock Innovation Challenge 2025 (that's where the ₦1,000,000 grant came from).

**Technical Skills:**
She's skilled in TypeScript, Next.js, React, Three.js, React Native, Tailwind CSS, Nest.js, Express, Firebase, PostgreSQL, MongoDB, and Node.js.

**Notable Projects:**
Some of her cool projects include AppEasy (job tracking platform), Easy Therapy (mental health chatbot), Careerly (career navigator with AI mentorship), Krist (e-commerce site), Life Ledger (AI-powered decision tracker), and Pomat Health (biolab clinical trials website). She's also built a Weather App, Shuttle Bus Tracker, and Movies catalog.

**Education:**
She studied Software Engineering at Babcock University and has several Microsoft Azure certifications (AI Fundamentals, Data Fundamentals, and Azure Fundamentals), plus certifications in Cyber Security and Ethical Hacking, and Full-Stack Web Design and Development.

RESPONSE STYLE:
- Talk naturally, like you're chatting with someone
- Use flowing sentences, not bullet points (unless they specifically ask for a list)
- Connect ideas smoothly: "she worked at X, then moved to Y, and now she's at Z"
- Keep it conversational and warm
- Under 150 words unless more detail is requested
- If asked about contact, mention the contact form on the website

Remember: Hope is FEMALE. This is non-negotiable. Only discuss Hope's portfolio-related topics.`;

// Helper function to validate if question is portfolio-related
function isPortfolioRelated(message) {
  const lowerMessage = message.toLowerCase();
  
  // Portfolio-related keywords
  const portfolioKeywords = [
    'hope', 'ifeanyi', 'experience', 'project', 'skill', 'work', 'job',
    'education', 'award', 'certification', 'portfolio', 'contact', 'email',
    'hire', 'available', 'tech', 'developer', 'engineer', 'careerly',
    'kwurah', 'mtn', 'bucc', 'babcock', 'background', 'qualification'
  ];
  
  // Check if message contains portfolio-related keywords
  const isRelated = portfolioKeywords.some(keyword => lowerMessage.includes(keyword));
  
  // Off-topic patterns
  const offTopicPatterns = [
    /what is|explain|how to|tell me about(?! hope)/i,
    /weather|news|recipe|joke|story/i,
    /solve|calculate|code for me/i,
    /write.*code|create.*app|build.*website/i
  ];
  
  const isOffTopic = offTopicPatterns.some(pattern => pattern.test(message));
  
  // If clearly off-topic, return false
  if (isOffTopic && !isRelated) {
    return false;
  }
  
  return true;
}

export const maxDuration = 30;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ 
        error: "Invalid request format: messages must be an array"
      }), { 
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }

    // Get the most recent user message
    const lastUserMessage = messages.filter(m => m.role === 'user').pop();
    
    // Check if question is portfolio-related
    if (lastUserMessage && !isPortfolioRelated(lastUserMessage.content)) {
      const offTopicResponse = "I'm specifically designed to answer questions about Ifeanyi Hope's portfolio and professional background. Please ask me about her experience, projects, skills, or how to contact her!";
      
      // Return a simple text response for off-topic questions
      return new Response(offTopicResponse, {
        headers: {
          'Content-Type': 'text/plain',
        }
      });
    }

    // Use Groq SDK with streaming
    const stream = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.5,
      max_tokens: 500,
      top_p: 0.9,
      stream: true,
    });

    // Create a custom streaming response with delay
    const encoder = new TextEncoder();
    const slowStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              // Encode the content with the proper data stream format
              const text = `0:${JSON.stringify(content)}\n`;
              controller.enqueue(encoder.encode(text));
              
              // Add delay between chunks for slower streaming effect
              await new Promise(resolve => setTimeout(resolve, 30));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      }
    });

    return new Response(slowStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      details: error.message || 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}