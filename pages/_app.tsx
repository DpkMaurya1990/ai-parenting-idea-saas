import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
<ClerkProvider
  {...pageProps}
  publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
  afterSignOutUrl="/"
  domain="huggingface.co"
>
  <Component {...pageProps} />
</ClerkProvider>
  );
}