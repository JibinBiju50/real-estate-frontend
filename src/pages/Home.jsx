import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiPlay } from "react-icons/fi";

import bgVideo from "../assets/videos/Videos.mp4";
import { useNavbarVisibility } from "../context/useNavbarVisibility";
import FeaturedSection from "../components/home/FeaturedSection";
import MasterpieceSection from "../components/home/MasterpieceSection";
import PartnersSection from "../components/home/PartnersSection";
import BespokeSection from "../components/home/BespokeSection";
import SectionStats from "../components/home/SectionStats";
import ArticleHighlight from "../components/home/ArticleHighlight";
import EnquireSection from "../components/home/EnquireSection";

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

  const symbolY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.18],
    ["105vh", "8vh", "0vh"]
  );

  const symbolScale = useTransform(
    scrollYProgress,
    [0.08, 0.26, 0.44],
    [0.7, 1.15, 20]
  );

  const symbolOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.14],
    [0, 1, 0]
  );

  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.10, 0.14, 0.18],
    [1, 1, 0, 0]
  );

  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.44, 0.58],
    [1, 1, 0.5]
  );

  const detailOpacity = useTransform(
    scrollYProgress,
    [0.14, 0.24],
    [0, 1]
  );

  const detailY = useTransform(
    scrollYProgress,
    [0.28, 0.32],
    ["5vh", "0vh"]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const shouldShowNavbar = latest > 0.5;

    if (navbarVisibleRef.current !== shouldShowNavbar) {
      navbarVisibleRef.current = shouldShowNavbar;
      setVisible(shouldShowNavbar);
    }
  });

  return (
    <>
    <section
      ref={heroRef}
      className="relative h-[585vh] bg-primary text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black">

        {/* VIDEO */}
        <motion.video
          style={{ opacity: videoOpacity }}
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 z-0 bg-black/35" />

        {/* SYMBOL */}
        <motion.div
          style={{
            y: symbolY,
            scale: symbolScale,
            opacity: symbolOpacity,
          }}
          className="
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
            pointer-events-none
            will-change-transform
            origin-center
          "
        >
          <svg
            viewBox="0 0 200 200"
            className="h-[68vw] w-[68vw]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M100 10 L20 180 L180 180 Z"
              fill="white"
            />
          </svg>
        </motion.div>

        {/* INTRO HERO TITLE */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="
            absolute
            inset-0
            z-30
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <h1
            className="
              px-6
              text-center
              font-heading
              text-[clamp(1.55rem,5vw,4.75rem)]
              uppercase
              tracking-[0.22em]
              text-white
            "
          >
            THE ART OF ELEVATION
          </h1>

          <div className="absolute bottom-8">
            <span className="block h-10 w-px animate-pulse bg-white/80">
              <span className="sr-only">Scroll</span>
            </span>
          </div>
        </motion.div>

        {/* TRANSFORMED HERO */}
        <motion.div
          style={{
            opacity: detailOpacity,
            y: detailY,
          }}
          className="
            absolute
            inset-0
            z-40
            flex
            items-center
            px-6
            pt-20
            md:px-12
            lg:px-20
          "
        >
          <div className="max-w-4xl">
            <p
              className="
                mb-5
                font-body
                text-sm
                uppercase
                tracking-[0.28em]
                text-gold
              "
            >
              ESTO Residences
            </p>

            <h2
              className="
                font-heading
                text-[clamp(3rem,9vw,8.5rem)]
                leading-[0.88]
                text-white
              "
            >
              The Art of Elevated Living
            </h2>

            <div className="mt-8 max-w-2xl space-y-8 md:ml-24">
              <p
                className="
                  font-body
                  text-base
                  leading-8
                  text-white/78
                  md:text-xl
                "
              >
                A vision beyond address and skyline, crafted for residences
                where architecture, service, and calm waterfront detail meet.
              </p>

              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  gap-4
                  border
                  border-white/70
                  px-6
                  py-4
                  font-body
                  text-sm
                  uppercase
                  tracking-[0.22em]
                  text-white
                  transition
                  hover:border-gold
                  hover:text-gold
                "
              >
                <span
                  className="
                    grid
                    h-9
                    w-9
                    place-items-center
                    rounded-full
                    border
                    border-current
                  "
                >
                  <FiPlay aria-hidden="true" />
                </span>

                Watch Video
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

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
