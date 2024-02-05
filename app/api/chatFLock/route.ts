import { NextRequest, NextResponse } from "next/server";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL; // Ensure this variable is correctly set in your environment
const postUrl = `${NEXT_PUBLIC_URL}/api/answer`;

export async function POST(req: NextRequest) {
  return new NextResponse(
    `<!DOCTYPE html>
        <html>
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>ChatFlock Frame</title>
              <meta property="og:title" content="ChatFlock Conversation" />
              <meta property="og:description" content="Engage in dynamic conversations with ChatFlock." />
              <meta property="og:image" content="YOUR_PUBLIC_URL/assets/ChatFlockLogo.svg" />
              <!-- Farcaster specific tags, adjust as per actual implementation requirements -->
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="YOUR_PUBLIC_URL/assets/ChatFlockLogo.svg" />
              <meta property="fc:frame:post_url" content="YOUR_PUBLIC_URL/api/answer" />
              <meta property="fc:frame:input:text" content="Type your question" />
          </head>
          <body/>
        </html>`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}

export const GET = POST;
