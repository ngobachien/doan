import React from 'react';
import './Home.css';
import '../components/Main.css';
import { useScrollAnimation, useLazyImages, useHomeNavigation } from '../components/Main';
import Now from './Home/Now';
import Hero from './Home/Hero';
import TopPicks from './Home/TopPicks';
import Collections from './Home/Collections';
import Super from './Home/Super';
import GENUINE from './Home/GENUINE';
import Blogs from './Home/Blogs';
import LatestNews from './Home/LatestNews';

function Home({ onPageChange }) {
  // Sử dụng các hooks từ Main.js
  useScrollAnimation();
  useLazyImages();
  const { handleNavigation } = useHomeNavigation(onPageChange);

  return (
    <div className="home-page">
      <Hero onPageChange={handleNavigation} />
      <section className="section-wrapper fade-in">
        <TopPicks />
      </section>
      <section className="section-wrapper fade-in">
        <Collections />
      </section>
      <section className="section-wrapper fade-in">
        <Now onPageChange={handleNavigation} />
      </section>
      <section className="section-wrapper fade-in">
        <Super onPageChange={handleNavigation} />
      </section>
      <section className="section-wrapper fade-in">
        <GENUINE onPageChange={handleNavigation} />
      </section>
      <section className="section-wrapper fade-in">
        <Blogs onPageChange={handleNavigation} />
      </section>
      <section className="section-wrapper fade-in">
        <LatestNews onPageChange={handleNavigation} />
      </section>
    </div>
  );
}

export default Home;