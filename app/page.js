import Header from "@/components/includes/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/includes/Footer";
import SearchEngine from "@/components/SearchEngine";
import CruiseCards from "@/components/CruiseCards";
import Topdestination from "@/components/HomeSection/Topdestinations";
import OceanCruise from "@/components/OceanCruise";


export default function Home() {
  return (
    <>
      <Header />
      <SearchEngine />
      <CruiseCards />

      <OceanCruise />
      <Topdestination />
      <Footer />
    </>
  );
}
