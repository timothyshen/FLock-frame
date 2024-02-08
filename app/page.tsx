import type { Metadata } from 'next';
import * as dotenv from 'dotenv';

dotenv.config();

const { NEXT_PUBLIC_URL } = process.env;

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `${NEXT_PUBLIC_URL}/assets/FLockLogo.svg`;
  const postUrl = `${process.env['NEXT_PUBLIC_URL']}/api/select`;
  return {
    title: "FLock ChatBot Frame",
    description: "This is a chatbot frame for FLock",
    openGraph: {
      title: "Let FLock it up",
      images: [imageUrl],
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": imageUrl,
      "fc:frame:post_url": postUrl,
      "fc:frame:button:1": "Let's go",
    },
  };
}

export default function Home() {
  return (
    <div
      style={{
        display: "flex", // Use flex layout
        flexDirection: "row", // Align items horizontally
        alignItems: "stretch", // Stretch items to fill the container height
        width: "100%",
        height: "100vh", // Full viewport height
        backgroundColor: "white",
      }}
    >
      <h1>Answer</h1>
      <p>Answer to the Ultimate Question of Life, the Universe, and Everything</p>
      <img
        style={{
          height: "100%", // Make image full height
          objectFit: "cover", // Cover the area without losing aspect ratio
          width: "35%", // Image takes up 40% of the container's width
        }}
        src="https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2639523a-690b-47af-16ab-ca07697fd000/original"
      />
    </div>
  );
}