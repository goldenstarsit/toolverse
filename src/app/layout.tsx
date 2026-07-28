import type { Metadata } from "next";
import "./globals.css";

import { bootstrapTools } from "@/tools/shared/bootstrap";

bootstrapTools();

export const metadata: Metadata = {
  title: "Toolverse",
  description: "Toolverse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
