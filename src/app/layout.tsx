import type { Metadata } from 'next';
import localFont from 'next/font/local';
import SmoothScroll from '@/components/ui/SmoothScroll/SmoothScroll';
import './globals.scss';

const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMontreal/PPNeueMontreal-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal/PPNeueMontreal-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal/PPNeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PPNeueMontreal/PPNeueMontreal-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/PPNeueMontreal/PPNeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal/PPNeueMontreal-SemiBolditalic.otf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-pp-neue-montreal',
  display: 'swap',
});

const zagmaMono = localFont({
  src: [
    {
      path: '../../public/fonts/ZagmaMono/F37ZagmaMonoTrial-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ZagmaMono/F37ZagmaMonoTrial-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ZagmaMono/F37ZagmaMonoTrial-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ZagmaMono/F37ZagmaMonoTrial-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ZagmaMono/F37ZagmaMonoTrial-Book.otf',
      weight: '450',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ZagmaMono/F37ZagmaMonoTrial-BookItalic.otf',
      weight: '450',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ZagmaMono/F37ZagmaMonoTrial-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ZagmaMono/F37ZagmaMonoTrial-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-zagma-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Qoves — Get Your Personalised Plan',
  description:
    'Understand your facial features and start your glow-up today with a proven action plan. No plastic surgery needed.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${ppNeueMontreal.variable} ${zagmaMono.variable}`}
    >
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
