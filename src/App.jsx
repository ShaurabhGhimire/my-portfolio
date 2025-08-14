import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import MainLayout from './components/MainLayout';

export default function App() {
  const [showHero, setShowHero] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3500);
    const removeHeroTimer = setTimeout(() => setShowHero(false), 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeHeroTimer);
    };
  }, []);

  return (
    <>
      {showHero ? <Hero fadeOut={fadeOut} /> : <MainLayout />}
    </>
  );
}
