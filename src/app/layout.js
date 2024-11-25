import "./globals.css";
import { Inter } from 'next/font/google';

export const metadata = {
  title: "Wish I May, Wish I Might",
  description: "Unopinionated family wish lists",
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased m-4`}
      >
        {children}
      </body>
    </html>
  );
}
