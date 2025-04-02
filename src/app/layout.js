import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "intern website",
  description: "Powerd by androwebstec",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
