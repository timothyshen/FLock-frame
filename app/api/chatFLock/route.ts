import { NextRequest, NextResponse } from "next/server";
import { FlockFrameType } from "../../types";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL; // Ensure this variable is correctly set in your environment
const postUrl = `${NEXT_PUBLIC_URL}/api/code`;

export async function POST(req: NextRequest): Promise<Response> {
  // const { untrustedData } = await req.json();
  // const { buttonIndex, inputText } = untrustedData;

  // // Log the extracted values for debugging purposes
  // console.log(`Button Index: ${buttonIndex}, Input Text: ${inputText}`);

  // const ecosystem = FlockFrameType[buttonIndex];
  // console.log(ecosystem); // Placeholder - replace with actual logic to determine selected ecosystem

  // // Assuming NEXT_PUBLIC_URL is your environment variable for the base URL
  const imageUrl = `${NEXT_PUBLIC_URL}/assets/FLockLogo.svg`;

  // console.log("Ecosystem: ", ecosystem);
  return new NextResponse(
    `<!DOCTYPE html>
      <html>
        <head>
          <title>Let FLock it up</title>
          <meta property="og:title" content="Let FLock it up" />
          <meta property="og:image" content="${imageUrl}" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${imageUrl}" />
          <meta property="fc:frame:post_url" content="${postUrl}" />
          <meta name="fc:frame:button:1" content="See code" />
          <meta name="fc:frame:button:1:action" content="post_redirect" />
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
