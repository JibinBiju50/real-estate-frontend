import { motion } from "framer-motion";

const stats = [
  {
    value: "03",
    label: "Destinations",
  },
  {
    value: "18",
    label: "Masterpieces",
  },
  {
    value: "$10bn",
    label: "Portfolio",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const SectionStats = () => {
  return (
    <section className="bg-white px-6 py-24 text-[#17194a] md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <p className="mb-5 font-body text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Our Story
          </p>

          <h2 className="font-heading text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95]">
            Orchestrating Place and Purpose
          </h2>

          <p className="mt-8 max-w-3xl font-body text-sm font-semibold leading-7 text-[#25295f] md:text-base md:leading-8">
            Driven by passion, we continuously push the boundaries of
            architecture by constructing residential, commercial, hospitality,
            and retail spaces that frame Dubai's skyline.
          </p>
        </motion.div>

        <div className="mt-20 grid border-y border-[#17194a]/20 md:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
              className="
                flex min-h-56 flex-col items-center justify-center
                border-b border-[#17194a]/20 px-6 py-12 text-center
                last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0
              "
            >
              <p className="font-heading text-[clamp(2rem,6vw,3.5rem)] leading-none">
                {item.value}
              </p>
              <p className="mt-4 font-body text-sm uppercase tracking-[0.26em] text-[#25295f]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="/our-story"
            className="border border-[#17194a]/35 px-8 py-4 font-body text-xs uppercase tracking-[0.22em] text-[#17194a] transition hover:border-gold hover:text-gold"
          >
            Discover Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionStats;
