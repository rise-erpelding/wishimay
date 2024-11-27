import Image from "next/image";
import { Inter } from 'next/font/google';
import "./globals.css";

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
      <footer className="text-center">
        <a className="inline-block" href="https://github.com/rise-erpelding/wishimay">
          <Image
            src="/octocat.svg"
            alt="GitHub logo"
            width={30}
            height={30}
          />
        </a>
      </footer>
      </body>
    </html>
  );
}
