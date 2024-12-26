import DiscoverFleet from "@/components/DiscoverFleet/DiscoverFleet";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QuickPriceCheck from "@/components/QuickPriceCheck/QuickPriceCheck";
import SatisfiedClient from "@/components/SatisfiedClient/SatisfiedClient";


export default function Home() {
  return (
    <main>
      <Header/>
      <QuickPriceCheck/>
      <DiscoverFleet/>
      <SatisfiedClient/>
      <Footer/>
    </main>
  );
}
