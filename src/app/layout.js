import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Precision Industry | High-Quality Metal Materials & Fabrication",
  description: "Revolutionize your operations with our cutting-edge technology. We offer CNC Turning, VMC Milling, Wire Cutting, and industrial equipment sales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '80px' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
