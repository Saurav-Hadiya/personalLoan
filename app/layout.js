import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rapid Personal Loans",
  description: "Rapid personal loan is a platform from applying to receiving funds in just simple clicks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#317EFB" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
