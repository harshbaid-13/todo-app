import Navbar from "@/components/Navbar";
import "./globals.css";
import { Preahvihear } from "next/font/google";
import { NextAuthProvider, ReduxProvider } from "./Providers";

const preahvihear = Preahvihear({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Todollo",
  description: "Get things done with ease!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={preahvihear.className}>
        <ReduxProvider>
          <NextAuthProvider>
            <Navbar />
            <div className="mt-32">{children}</div>
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
