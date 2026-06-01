import { motion } from "framer-motion";

import articleHighlightImg from "../../assets/images/article_highlight_img.jpg";

const ArticleHighlight = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <motion.article
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-7xl overflow-hidden bg-[#f3f2f0] md:grid-cols-[0.62fr_1.24fr]"
      >
        <div className="relative min-h-[18rem] overflow-hidden md:min-h-[24rem]">
          <img
            src={articleHighlightImg}
            alt="ORLA show residence interior"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-h-[28rem] flex-col justify-center px-8 py-14 md:min-h-[24rem] md:px-20 lg:px-28">
          <h2 className="max-w-4xl font-heading text-[clamp(1.5rem,4vw,3rem)] uppercase leading-[1.18] text-[#020947]">
            ORLA Show Residence Now Completed On Palm Jumeirah
          </h2>

          <p className="mt-9 font-body text-base text-[#7a7f9f] md:text-lg">
            May 15, 2026
          </p>

          <a
            href="/news/orla-show-residence-now-completed-on-palm-jumeirah"
            className="mt-10 w-fit bg-[#8f8f8d] px-8 py-4 font-body text-sm text-white transition hover:bg-[#020947]"
          >
            Read More
          </a>
        </div>
      </motion.article>
    </section>
  );
};

export default ArticleHighlight;
