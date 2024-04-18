import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from "next/font/google";
import "./globals.css";
//import Whatsapp from "./ui/whatsapp"
import BootstrapClient from '@/components/bootstrapClient';
import NavBar from './ui/Navbar';
import Footer from "./ui/Footer";
// import Provider from '@/components/provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tienda Online",
  description: "Tienda de segunda mano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
      backgroundImage: 'url("/images/bgflowersblue.jpg")',
      backgroundSize: "contain"
    }}>{/* <Provider> */}
      <NavBar />
      {children}
      <Footer />
 {/*      <Whatsapp /> */}
      <BootstrapClient />
      {/* </Provider> */}
      </body>
    </html>
  );
}