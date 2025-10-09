import "./globals.css";
import "./fanta.css";
import Head from "./Head";
import Link from "next/link";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Subpenny The sub tracker",
  description: "Scam, Give me muneh ",
};

export default function RootLayout({ children }) {
  const header = (
    <header>
      <div>
        <Link href={"/"}>
          <h1 className="text-gradient">Subpenny</h1>
        </Link>
        <p>Lose all your money</p>
      </div>
      <GoTo />
    </header>
  );
  const footer = (
    <footer>
      <div className="hard-line" />
      <div className="footer-content">
        <div>
          <div>
            <h4>Subpenny</h4>
            <p></p>
            <button disabled>Install app(doesnt'work)</button>
          </div>
          <p className="copyright">
            © Copyright 2024-2025, Luka Jurić.
            <br />
            All rights reserved.
          </p>
        </div>
        <div>
          <p>
            Facing issues? <a>Get help</a>
          </p>
          <p>
            Suggestions for improvement? <a>Share feedback</a>
          </p>
          <div>
            <Link href={"/privacy"}>Privacy Policy</Link> <br></br>
            <Link href={"/tos"}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body>
          {header}
          <div className="full-line" />
          <main>{children}</main>
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
