import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Inter } from "next/font/google";

// Load Inter font with subsets
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" {...mantineHtmlProps} className={inter.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            fontFamily: "Inter, sans-serif",
            colors:{
              purple: [
                "#EDE7FF",
                "#D7C6FF",
                "#B9A3FF",
                "#9A80FF",
                "#7C5DFF",
                "#6E51E0",
                "#5D43C2",
                "#4C35A4",
                "#3B2786",
                "#2A1968",
              ],
            }
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
