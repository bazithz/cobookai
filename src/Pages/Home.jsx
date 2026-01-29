import Hero from "../components/Hero";
import DashboardMock from "../components/DashboardMock";
import CoBookFeaturesWithImage from "../components/Features";
import WhoWinsWhat from "../components/Whowinswhat";
import Whatmakesus from "../components/Whatmakesus";
import Business from "../components/Business";
import CFO from "../components/CFO";
import Autonomous from "../components/Autonomous";
import FAQ from "../components/Faq";
import Contact from "../components/Contact";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <DashboardMock />
      <CoBookFeaturesWithImage />
      <WhoWinsWhat />
      <Whatmakesus />
      <Business />
      <CFO />
      <Autonomous />
      <FAQ />
      <Contact />
      <Waitlist />
      <Footer />
    </div>
  );
}
