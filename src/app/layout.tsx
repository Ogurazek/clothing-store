import OfertaHeader from "@/components/ofertaHeader";
import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OfertaHeader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
