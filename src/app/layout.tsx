import { ReactNode } from "react";
import "@/app/common/styles/globals.css";
import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import StoreProvider from "./common/state/StoreProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
          <Header />
          <StoreProvider>
          {children}
        </StoreProvider>
          <Footer/>
      </body>
    </html>
  );
}