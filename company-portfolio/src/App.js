import Footer from "./components/Footer";
import ProductRightToLeft from "./components/ProductRightToLeft";
import Home from "./pages/Home/home";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <ProductRightToLeft productId={1} imgID={[1]}></ProductRightToLeft> 
      <Footer></Footer>
    </div>
  );
}

export default App;
