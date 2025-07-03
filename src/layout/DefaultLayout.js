import React from "react";
import { Header } from "./partials/HeaderComp";
import { Footer } from "./partials/FooterComp";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="header mb-2">
        <Header />
      </header>
      <main className="main" style={{ paddingTop: "70px" }}>
        {children}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
