import { NextRequest, NextResponse } from "next/server";
import { getSSLHubRpcClient, Message } from "@farcaster/hub-nodejs";
import { FlockFrameType } from "../../types";

const HUB_URL = process.env["HUB_URL"] || "nemes.farcaster.xyz:2283";
const hubClient = getSSLHubRpcClient(HUB_URL);

export async function POST(req: NextRequest): Promise<Response> {
  const imageUrl = `${process.env["NEXT_PUBLIC_URL"]}/assets/FLockLogo.svg`;
  const postUrl = `${process.env["NEXT_PUBLIC_URL"]}/api/select`;
  const {
    untrustedData: { buttonIndex, inputText },
    trustedData: { messageBytes },
  } = await req.json();

  //   const frameMessage = Message.decode(Buffer.from(messageBytes, "hex"));
  //   const validateResult = await hubClient.validateMessage(frameMessage);
  const ecosystem = FlockFrameType[buttonIndex];

  return new NextResponse(
    `<!DOCTYPE html>
      <html>
        <head>
          <title>Echo Says:</title>
          <meta name="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="${imageUrl}" />
            <meta name="fc:frame:post_url" content="${postUrl}" />
            <meta name="fc:frame:input:text" content="${ecosystem} ${inputText}" />
            <meta name="fc:frame:button:1" content="Ask" />
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
