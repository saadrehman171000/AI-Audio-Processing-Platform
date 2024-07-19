import { Toaster } from "@/components/ui/sonner";
import Provider from "@/components/Provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#00171f]`}>
        <Provider>
          <Navbar />
          {children}
          <Toaster richColors />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
