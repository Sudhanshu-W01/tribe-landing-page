import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Tribe",
  description: "Unite Your Blockchain World",
  icons: {
    icon: [
      {
        url: "/assets/Tribes.png",
        href: "/assets/Tribes.png",
      },
    ],
    shortcut: "/assets/Tribes.png",
    apple: "/assets/Tribes.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/tribe-logo.png" />
        <link rel="apple-touch-icon" href="/assets/tribe-logo.png" />
      </head>
      <body className="bg-primary flex flex-row justify-center w-[100vw] h-fit">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
