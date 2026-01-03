import type { Metadata } from "next";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junkanoo | Culture in Motion",
  description: "Created by Aaron Seymour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
