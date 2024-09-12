import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Category from "./components/main/categories/Category";
import Main from "./components/main/Main";
import Cart from "./pages/Cart/cart";
import Profile from "./pages/Profile/profile";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Header
          restName="Urbo coffee"
          restAddress="улица Жансугурова, 159"
          restOpenPeriod="с 08:00 до 00:00,"
        />

        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/menu" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
