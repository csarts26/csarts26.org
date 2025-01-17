import { Inter } from 'next/font/google'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import "./globals.css";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: "Class of '26",
  description: "Official site of the CSArts Class of '26 organization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
