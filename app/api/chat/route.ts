import { NextRequest, NextResponse } from "next/server";
import { FlockFrameType } from "@/app/types";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL; // Ensure this variable is correctly set in your environment
const postUrl = `${NEXT_PUBLIC_URL}/api/select`;

export async function POST(req: NextRequest) {
  const {
    untrustedData: { inputText, buttonIndex },
    trustedData: { messageBytes },
  } = await req.json();

  const button_text = FlockFrameType[buttonIndex];

  return new NextResponse(
    `<!DOCTYPE html>
        <html>
          <head>
            <title>Let FLock it up</title>
            <meta property="og:title" content="Let FLock it up" />
            <meta property="og:image" content="${NEXT_PUBLIC_URL}/assets/FLockLogo.svg" />
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="${NEXT_PUBLIC_URL}/assets/FLockLogo.svg" />
            <meta property="fc:frame:button:1" content="${button_text}" />
            <meta property="fc:frame:button:2" content="${messageBytes}" />
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
