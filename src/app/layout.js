import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsApp_Icons from "@/components/WhatsApp_Icons";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NoLimitBikers - Motorrijschool",
  description: "NoLimitBikers offers a comprehensive platform for biking enthusiasts to enhance their skills and knowledge. Through engaging lessons, expert tips, and community support, riders of all levels can learn essential techniques, safety practices, and maintenance skills, fostering a deeper appreciation for biking while promoting a safe and enjoyable riding experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <WhatsApp_Icons/>
        <Footer/>
      </body>
    </html>
  );
}
