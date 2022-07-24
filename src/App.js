import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Brands from "./components/brands";
import Products from "./components/products";

function App() {
  return (
    <div className="App px-8 md:px-4 lg:px-20 xl:px-44">
        <Header/>
        <Hero/>
        <Brands/>
        <Products/>
    </div>
  );
}

export default App;
