import Donation from "../shared/Donation";
import AboutUs from "./components/page/home/AboutUsSection";
import Banner from "./components/page/home/Banner";

export default function page() {
  return (
    <div>
      <Donation></Donation>
      <Banner></Banner>
      <AboutUs></AboutUs>
    </div>
  );
}
