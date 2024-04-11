import type { Metadata } from "next";
import "../src/common/style/card.scss";
import "../src/common/style/global.scss";
import { ThemeProvider } from "@/src/common/providers/theme-provider";
import { soraSans } from "@/src/common/style/font";

import Navbar from "@/src/common/components/Navbar/Navbar";
import Footer from "@/src/common/components/footer";
import { Toaster } from "sonner";
import { METADATA } from "@/src/common/constant/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.metadatabase),
  creator: METADATA.creator,
  description: METADATA.description,
  keywords: METADATA.keyword,
  authors: {
    name: METADATA.creator,
  },
  openGraph: {
    type: "website",
    locale: METADATA.openGraph.locale,
    siteName: METADATA.openGraph.siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={soraSans.className}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
