import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.js";
import Forum from "./components/Forum.js";
import MarketStories from "./components/MarketStories.js";
import Navbar from "./components/Navbar.js";

const inter = Inter({ subsets: ["latin"] });

const Index = () =>  {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility
  const [activeOption, setActiveOption] = useState('forum'); // State for the active option

  useEffect(() => {
    const handleResize = () => {
      setShowNavbar(window.innerWidth < 700);
      setShowSidebar(window.innerWidth >= 700);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); // Toggle the sidebar visibility
  };

  const handleOptionSelect = (option) => {
    setActiveOption(option); // Update the active option
  };

  return (
    <main className={"bg-white flex flex-col"}>
      {showNavbar && <Navbar onSelect={handleOptionSelect} />}
      <div className="flex">
        <Sidebar toggleSidebar={toggleSidebar} />
        <div className={showSidebar ? "ml-64 flex-grow flex" : "flex-grow"}>
          {activeOption === 'forum' ? (
            <Forum className={showSidebar ? "flex-grow" : ""} />
          ) : (
            <MarketStories className={showSidebar ? "flex-grow" : ""} />
          )}
          {showSidebar && activeOption === 'forum' && <MarketStories className="flex-grow" />}
        </div>
      </div>
    </main>
  );
}

export default Index