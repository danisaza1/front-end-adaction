import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  Header  from "./components/header";
import  Footer  from "./components/footer";
import  Container  from "./components/container";
import NavBar from "./components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adaction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header />
          <NavBar />!
        {children}
        <Container />
        <Footer />
      </body>
    </html>
  );
}
