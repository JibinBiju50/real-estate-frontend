import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import featuredBanner1 from "../../assets/images/Featured_img1.jpg";
import featuredBanner2 from "../../assets/images/Featured_img2.jpg";

const featuredItems = [
  {
    image: featuredBanner1,
    label: "Latest",
    title: "ESTO UNVEILS AVA AT PALM JUMEIRAH FIRST IN PLACE RESIDENCE",
  },
  {
    image: featuredBanner2,
    label: "Latest",
    title: "ESTO UNVEILS ITS SALES GALLERY AT ONE AT PALM JUMEIRAH",
  },
];

const FeaturedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarouselFull, setIsCarouselFull] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const frameTop = useTransform(scrollYProgress, [0, 0.48], ["12vh", "0vh"]);
  const frameRight = useTransform(scrollYProgress, [0, 0.48], ["8vw", "0vw"]);
  const frameBottom = useTransform(scrollYProgress, [0, 0.48], ["12vh", "0vh"]);
  const frameLeft = useTransform(scrollYProgress, [0, 0.48], ["8vw", "0vw"]);
  const frameRadius = useTransform(scrollYProgress, [0, 0.48], ["8px", "0px"]);

  const firstImageScale = useTransform(
    scrollYProgress,
    [0, 0.48],
    [1, 1.16]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsCarouselFull(latest >= 0.4);
  });

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? featuredItems.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === featuredItems.length - 1 ? 0 : current + 1
    );
  };

  const progressWidth = `${((activeIndex + 1) / featuredItems.length) * 100}%`;

  return (
    <section ref={sectionRef} className="relative h-[210vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <motion.div
          style={{
            top: frameTop,
            right: frameRight,
            bottom: frameBottom,
            left: frameLeft,
            borderRadius: frameRadius,
          }}
          className="absolute overflow-hidden bg-black shadow-2xl"
        >
          <motion.div
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full w-full"
          >
            {featuredItems.map((item, index) => (
              <article
                key={item.title}
                className="relative h-full min-w-full overflow-hidden"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  style={index === 0 ? { scale: firstImageScale } : undefined}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <motion.div
                  animate={{ opacity: isCarouselFull ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pb-20 text-center text-white"
                >
                  <p className="mb-5 font-body text-sm uppercase tracking-[0.28em] text-gold">
                    {item.label}
                  </p>

                  <h2 className="max-w-5xl font-heading text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[0.95]">
                    {item.title}
                  </h2>

                  {index === 0 ? (
                    <Link
                      to="/news/ava-at-palm-jumeirah"
                      className="mt-8 border border-white/70 px-7 py-4 font-body text-sm uppercase tracking-[0.22em] transition hover:border-gold hover:text-gold"
                    >
                      Discover
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="mt-8 border border-white/70 px-7 py-4 font-body text-sm uppercase tracking-[0.22em] transition hover:border-gold hover:text-gold"
                    >
                      Discover
                    </button>
                  )}
                </motion.div>
              </article>
            ))}
          </motion.div>

          <div className="absolute inset-x-6 bottom-7 z-20 flex items-center gap-5 md:inset-x-12 lg:inset-x-20">
            <button
              type="button"
              aria-label="Previous featured item"
              onClick={goToPrevious}
              className="grid h-11 w-11 shrink-0 place-items-center border border-white/45 bg-white/5 text-2xl text-white backdrop-blur-sm transition hover:border-gold hover:text-gold"
            >
              <FiChevronLeft aria-hidden="true" />
            </button>

            <div className="h-px flex-1 bg-white/35">
              <div
                className="h-px bg-gold transition-[width] duration-700"
                style={{ width: progressWidth }}
              />
            </div>

            <button
              type="button"
              aria-label="Next featured item"
              onClick={goToNext}
              className="grid h-11 w-11 shrink-0 place-items-center border border-white/45 bg-white/5 text-2xl text-white backdrop-blur-sm transition hover:border-gold hover:text-gold"
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
