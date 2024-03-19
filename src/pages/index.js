import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar.js"; // Corrected import

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main
      className={"bg-white h-screen w-100 flex flex-col"}>

      {/* <h2>Hello</h2> */}
      <Sidebar /> {/* Corrected component name */}
    </main>
  );
}
