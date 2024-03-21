import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar.js"; // Corrected import
import Forum from "./components/Forum.js"; // Corrected import
import MarketStories from "./components/MarketStories.js"; // Corrected import

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main
      className={"bg-white  flex flex-col"}>
      <div className="flex">
      <Sidebar /> 
        <Forum />
        <MarketStories />
      </div>
    </main>
  );
}
