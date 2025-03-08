import OfertaHeader from "@/components/ofertaHeader";
import Navbar from "@/components/navbar";
import "./globals.css";

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
      </body>
    </html>
  );
}
