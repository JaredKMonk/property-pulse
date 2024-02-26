import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
