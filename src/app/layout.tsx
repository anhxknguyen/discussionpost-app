import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Discussions Board",
  description: "For sharing your discussions and all...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-svh flex flex-col justify-between">
        <header className="bg-blue-200 h-20">
          <Navbar />
        </header>
        <div className="grow px-10">{children}</div>
        <footer className="bg-red-100 h-20 flex justify-center items-center">
          Footer
        </footer>
      </body>
    </html>
  );
}
