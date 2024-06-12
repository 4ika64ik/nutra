// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './styles/Article';
import './App.css';
import FullArticle from './styles/FullArticle';
import NotificationButton from './components/NotificationButton';
import SendNotification from './components/SendNotification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KeitaroScript from './components/KeitaroScript';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article" element={<Article />} />
          <Route path="/articles" element={<FullArticle />} />
        </Routes>
      </div>
      
      <Footer />
      
    </Router>
  );
}

export default App;
