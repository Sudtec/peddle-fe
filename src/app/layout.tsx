import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/styles/index.css";
const inter = Inter({ subsets: ["latin"] });
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default: "Peddle",
    template: "%s - Peddle",
  },
  description: "LET'S TALK GROWTH WITH FORWARD-THINKING PRODUCTS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
