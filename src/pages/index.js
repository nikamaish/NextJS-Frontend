import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.js";
import Forum from "./components/Forum.js";
import MarketStories from "./components/MarketStories.js";
import Navbar from "./components/Navbar.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showForumAndMarket, setShowForumAndMarket] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowNavbar(window.innerWidth < 700);
      setShowForumAndMarket(window.innerWidth >= 700);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className={"bg-white flex flex-col"}>
       {showNavbar && <Navbar />}
      <div className="flex">
        <Sidebar /> 
        {showForumAndMarket && (
          <>
            <Forum />
            <MarketStories />
          </>
        )}
      </div>
    </main>
  );
}
