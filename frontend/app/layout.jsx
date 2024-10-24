import Link from 'next/link'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Web Jeremy' ,

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <div className="navbar">
        <div className="logo"></div>
        <Link href="/">Inicio</Link>
        <Link href="/login">Iniciar Sesión</Link>
        <Link href="/register">Registrarse</Link>
        <Link href="/formulario" className="inactive">Formulario</Link>
        <div className="search-container">
          <input type="text" placeholder="Buscar aquí..." />
          <button type="submit">Buscar</button>
        </div>
      </div>
      {children}
      </body>
    </html>
  );
}
