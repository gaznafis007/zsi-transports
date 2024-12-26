import DiscoverFleet from "@/components/DiscoverFleet/DiscoverFleet";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import QuickPriceCheck from "@/components/QuickPriceCheck/QuickPriceCheck";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <QuickPriceCheck/>
      <DiscoverFleet/>
    </main>
  );
}
