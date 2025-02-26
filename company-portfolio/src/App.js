import { Profiler } from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ProductRightToLeft from "./components/ProductRightToLeft";
import Home from "./pages/Home/home";
import ProductIntroduction1 from "./components/ProductIntroduction1";
import ProductIntroduction2 from "./components/ProductIntroduction2";
import TopToBot from "./components/TopToBot";
import ProductIntroduction3 from "./components/ProductIntroduction3";
import UsService from "./components/UsService";
import Employees from "./components/Employees";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <AboutUs></AboutUs>
      <ProductIntroduction1 productId={1} imgID ={[2]} ></ProductIntroduction1>
      <ProductRightToLeft productId={1} imgID={[1]}></ProductRightToLeft> 
      <ProductIntroduction2 productId={3} imgID ={[4,5,6,3,7]} ></ProductIntroduction2>
      <TopToBot productId={4}  imgID ={[8,9]} ></TopToBot>
      <ProductIntroduction3></ProductIntroduction3>
      <UsService companyId={1}></UsService>
      <Employees></Employees>
      <ThankYou></ThankYou>

    </div>
  );
}

export default App;
