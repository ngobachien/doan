import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/responsive.css';
import './styles/performance.css';
import { initPerformanceOptimizations } from './utils/performance';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Trademark from './pages/Trademark';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Promotion from './pages/Promotion';
import News from './pages/News';
import Article from './pages/Article';
import LoginForm from './pages/LoginForm'; // Corrected from LoginForm to Login

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    initPerformanceOptimizations();
  }, []);

  return (
    <div className="app hw-accelerated">
      {currentPage !== 'login' && <Header onPageChange={handlePageChange} currentPage={currentPage} />}
      <main className="main-content hw-accelerated">
        {currentPage === 'home' && <Home onPageChange={handlePageChange} />}
        {currentPage.startsWith('product') && <Product category={currentPage} />}
        {currentPage.startsWith('brand') && <Trademark category={currentPage} />}
        {currentPage.startsWith('promo') && <Promotion promo={currentPage} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'register' && <Register />}
        {currentPage === 'news' && <News />}
        {(currentPage === 'article' || currentPage === 'posts') && <Article />}
        {currentPage === 'login' && <LoginForm onPageChange={handlePageChange} />}
      </main>
      {currentPage !== 'login' && <Footer />}
    </div>
  );
}

export default App;