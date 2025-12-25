import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Categories from "./components/Categories/Categories";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Services from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal/Modal";
import { CartProvider } from "./context/CartContext";
import { ModalProvider } from "./context/ModalContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <ModalProvider>
        <div className="App">
          <Header />
          <main>
            <Hero />
            <Advantages />
            <Categories />
            <Bestsellers />
            <Services />
            <Reviews />
            <Blog />
          </main>
          <Footer />
          <Cart />
          <Modal />
        </div>
      </ModalProvider>
    </CartProvider>
  );
}

export default App;
