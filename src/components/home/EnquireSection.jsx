import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";

import waterCausticsVideo from "../../assets/videos/Blue_water_caustics.mp4";

const EnquireSection = () => {
  return (
    <section className="bg-[#1f1f1f] px-6 py-16 md:px-12 md:py-20 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto min-h-[34rem] max-w-[90rem] overflow-hidden bg-black text-white md:min-h-[36rem] md:max-h-[38rem]"
      >
        <video
          src={waterCausticsVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#001724]/35" />

        <div className="relative z-10 flex min-h-[34rem] flex-col items-center justify-center px-6 text-center md:min-h-[40rem]">
          <h2 className="font-heading text-[clamp(2rem,6vw,3.5rem)] uppercase leading-none text-white">
            Discover The Impossible
          </h2>

          <p className="mt-10 font-body text-sm font-semibold text-white md:text-base">
            Enquire for more details.
          </p>

          <a
            href="tel:+0000000000"
            className="
              mt-20 inline-flex min-w-[18rem] items-center justify-center gap-4
              bg-black/55 px-8 py-4 font-body text-base text-white
              transition hover:bg-black/75 md:min-w-[27rem] md:text-lg
            "
          >
            <FiPhone aria-hidden="true" />
            Request a Callback
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default EnquireSection;
