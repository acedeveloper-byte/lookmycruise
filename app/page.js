import Image from "next/image";
import styles from "./page.module.css";
import CruiseHome from "@/components/CruiseHome";
import Header from "@/components/includes/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/includes/Footer";
import SearchEngine from "@/components/SearchEngine";


export default function Home() {
  return (
   <>
   <Header/>

   <SearchEngine/>
  <CruiseHome/>

  <Footer/>
   </>
  );
}
