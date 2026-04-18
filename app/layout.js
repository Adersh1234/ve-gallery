import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata = {
  title: 'Ve Gallery – Your clients deserve a gallery as good as your photography',
  description:
    'Ve Gallery gives wedding photographers a branded, intelligent delivery experience — with AI face search, QR code access, and everything your clients need.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
