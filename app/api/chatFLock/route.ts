import { NextRequest, NextResponse } from "next/server";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL; // Ensure this variable is correctly set in your environment
const postUrl = `${NEXT_PUBLIC_URL}/api/select`;

export async function POST(req: NextRequest) {
  const body: { untrustedData: { buttonIndex: number } } = await req.json();
  let buttonText = "What is Solana?";
  if (body.untrustedData.buttonIndex === 1) {
    buttonText = "What is Ethereum?";
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
            <meta property="fc:frame:button:1" content="what is solana" />
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
