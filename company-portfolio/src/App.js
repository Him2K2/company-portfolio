import { Profiler } from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ProductRightToLeft from "./components/ProductRightToLeft";
import Home from "./pages/Home/home";
import ProductIntroduction1 from "./components/ProductIntroduction1";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <AboutUs></AboutUs>
      <ProductIntroduction1 productId={1} imgID ={[2]} ></ProductIntroduction1>
      <ProductRightToLeft productId={1} imgID={[1]}></ProductRightToLeft> 
    </div>
  );
}

export default App;
