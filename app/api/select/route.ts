import { NextRequest, NextResponse } from "next/server";

const { NEXT_PUBLIC_URL } = process.env;

const postUrl = `${NEXT_PUBLIC_URL}/api/chatFlock`;

export async function POST(req: NextRequest) {
  return new NextResponse(
    `<!DOCTYPE html>
        <html>
          <head>
            <title>Echo Says:</title>
            <meta property="og:title" content="Which ecosystem!" />
            <meta property="og:image" content="${NEXT_PUBLIC_URL}/assets/FLockLogo.svg" />
            <meta name="fc:frame" content="vNext" />
            <meta name="fc:frame:image" content="${NEXT_PUBLIC_URL}/assets/FLockLogo.svg" />
            <meta name="fc:frame:post_url" content="${postUrl}" />
            <meta name="fc:frame:input:text" content="Your question" />
            <meta name="fc:frame:button:1" content="Ethereum" />
            <meta name="fc:frame:button:2" content="Solana" />
            <meta name="fc:frame:button:3" content="Scroll" />
            <meta name="fc:frame:button:4" content="Sui" />
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
