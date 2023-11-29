import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "ThoughtHub",
  description: " A hub where thoughts, ideas, and discussions converge.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)} // We are apending two different classes here
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <NavBar />
        <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>

        <Toaster />
      </body>
    </html>
  );
}
