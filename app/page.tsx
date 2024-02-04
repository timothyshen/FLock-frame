import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import * as dotenv from 'dotenv';

dotenv.config();

const { NEXT_PUBLIC_URL } = process.env;

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Tell me the story',
    },
    {
      label: 'Redirect to cute dog pictures',
      action: 'post_redirect',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/park-1.png`,
  input: {
    text: 'Tell me a boat story',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}