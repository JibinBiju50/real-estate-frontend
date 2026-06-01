import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import bespokeBackground from "../../assets/images/bespoke_background.jpg";

const BespokeSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const triangleReveal = useTransform(
    scrollYProgress,
    [0, 0.22, 0.58, 1],
    [
      "polygon(50% 112%, 50% 112%, 50% 112%)",
      "polygon(50% 12%, 22% 90%, 78% 90%)",
      "polygon(50% -115%, -115% 190%, 215% 190%)",
      "polygon(50% -115%, -115% 190%, 215% 190%)",
    ]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0.24, 0.46],
    [0, 1]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0.2, 0.64],
    [1.12, 1]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0.62, 0.76],
    [0, 1]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0.62, 0.76],
    ["5vh", "0vh"]
  );

  return (
    <section ref={sectionRef} className="relative h-[360vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <motion.div
          style={{ clipPath: triangleReveal }}
          className="absolute inset-0 z-10 overflow-hidden bg-[#2d2d2d] will-change-transform"
        >
          <motion.img
            src={bespokeBackground}
            alt="Bespoke atelier interior"
            style={{ opacity: imageOpacity, scale: imageScale }}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#111111]/70" />
        </motion.div>

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="
            absolute
            inset-0
            z-30
            flex
            flex-col
            items-center
            justify-center
            px-6
            text-center
            text-white
          "
        >
          <p className="font-heading text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95]">
            Esto
          </p>

          <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Atelier
          </p>

          <p className="mt-8 max-w-3xl font-body text-sm font-semibold leading-7 text-white md:text-base md:leading-8">
            Imagined by you and crafted for you, our Atelier service delivers
            architectural brilliance celebrating your unique individuality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BespokeSection;
