import { NextRequest, NextResponse } from "next/server";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL; // Ensure this variable is correctly set in your environment
const postUrl = `${NEXT_PUBLIC_URL}/api/answer`;

export async function POST(req: NextRequest) {
  const body: { unstrustedData?: { buttonIndex: number } } = await req.json();

  let buttontext = "";

  if (!body.unstrustedData) {
    return new NextResponse(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  switch (body.unstrustedData.buttonIndex) {
    case 1:
      buttontext = "What is Ethereum?";
      break;
    case 2:
      buttontext = "What is Solana?";
      break;
    case 3:
      buttontext = "What is Scroll?";
      break;
    case 4:
      buttontext = "What is Sui?";
      break;
    default:
      buttontext = "Unknown";
  }
  return new NextResponse(
    `<!DOCTYPE html>
        <html>
          <head>
              <title>Let FLock it up</title>
            <meta property="og:title" content="Let FLock it up" />
            <meta property="og:image" content="${NEXT_PUBLIC_URL}/assets/FLockLogo.svg" />
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="${NEXT_PUBLIC_URL}/assets/FLockLogo.svg" />
            <meta property="fc:frame:button:1" content="${buttontext}" />
            <meta property="fc:frame:post_url" content="${postUrl}" />
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
