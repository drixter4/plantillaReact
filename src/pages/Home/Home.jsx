import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import './home.css'

import Loader from "../../components/Loader/Loader";

export default function Home() {
  return (
    <>
      <Loader/>
      <Navbar />
  
      <Footer />
    </>
  );
}