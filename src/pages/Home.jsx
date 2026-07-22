import { useEffect, useRef } from "react";
import {
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { useNavbarVisibility } from "../context/NavbarVisibilityContextCore";
import FeaturedSection from "../components/home/FeaturedSection";
import MasterpieceSection from "../components/home/MasterpieceSection";
import PartnersSection from "../components/home/PartnersSection";
import BespokeSection from "../components/home/BespokeSection";
import SectionStats from "../components/home/SectionStats";
import ArticleHighlight from "../components/home/ArticleHighlight";
import EnquireSection from "../components/home/EnquireSection";
import { HeroSection } from "../components/home/HeroSection";

const Home = () => {
  const { setVisible } = useNavbarVisibility();
  const heroRef = useRef(null);
  const navbarVisibleRef = useRef(false);

  useEffect(() => {
    setVisible(false);

    return () => setVisible(true);
  }, [setVisible]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const shouldShowNavbar = latest > 0.5;

    if (navbarVisibleRef.current !== shouldShowNavbar) {
      navbarVisibleRef.current = shouldShowNavbar;
      setVisible(shouldShowNavbar);
    }
  });

  return (
    <>
    <HeroSection scrollYProgress={scrollYProgress} heroRef={heroRef}/>
    <FeaturedSection />
    <MasterpieceSection />
    <PartnersSection />
    <BespokeSection />
    <SectionStats />
    <ArticleHighlight />
    <EnquireSection />
    </>
  );
};

export default Home;
