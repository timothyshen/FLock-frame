import type { Metadata } from 'next';
import * as dotenv from 'dotenv';

dotenv.config();

const { NEXT_PUBLIC_URL } = process.env;

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `${NEXT_PUBLIC_URL}/assets/FLockLogo.svg`;
  const postUrl = `${NEXT_PUBLIC_URL}/api/select`;
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
      "fc:frame:input:text": "Do you want to learn about ecosystems?",
      "fc:frame:button:1": "Let's go§",
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col text-center lg:p-16">
      Testtime
    </main>
  );
}