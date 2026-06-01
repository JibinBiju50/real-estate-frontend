import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";
import PartnerZAHA from "../../assets/images/partner_img_1.jpg"
import PartnerFoster from "../../assets/images/partner_img_2.jpg"
import PartnerGilles from "../../assets/images/partner_img_3.jpg"
import PartnerYodeezen from "../../assets/images/partner_img_4.jpg"
import PartnerVladimir from "../../assets/images/partner_img_5.jpg"
import PartnerDorchester from "../../assets/images/partner_image_6.jpg"
const partners = [
    {
        name: "Zaha Hadid",
        image: PartnerZAHA
    },
    {
        name: "Foster + Partners",
        image: PartnerFoster
    },
    {
        name: "Gilles & Boissier",
        image: PartnerGilles
    },
    {
        name: "YODEZEEN",
        image: PartnerYodeezen
    },
    {
        name: "Vladimir Djurovic",
        image: PartnerVladimir
    },
    {
        name: "Dorchester Collection",
        image: PartnerDorchester
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const PartnersSection = () => {
    const sliderRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const updateProgress = () => {
        const slider = sliderRef.current;

        if (!slider) return;

        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const nextProgress = maxScroll > 0 ? slider.scrollLeft / maxScroll : 0;
        setProgress(nextProgress);
    };

    const slideBy = (direction) => {
        const slider = sliderRef.current;

        if (!slider) return;

        slider.scrollBy({
            left: direction * slider.clientWidth * 0.85,
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-white px-6 py-24 text-primary md:px-12 md:py-32 lg:px-20">
            <div className="mx-auto flex max-w-7xl flex-col gap-16">
                <motion.div
                    {...fadeUp}
                    className="mx-auto flex min-h-[34rem] max-w-4xl flex-col items-center justify-center text-center"
                >
                    <p className="mb-5 font-body text-xs font-bold uppercase tracking-[0.28em] text-gold">
                        Partners
                    </p>

                    <h2 className="max-w-4xl font-heading text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95] text-[#17194a]">
                        Curating with Visionaries
                    </h2>

                    <p className="mt-7 max-w-xl font-body text-sm font-semibold leading-7 text-[#25295f] md:text-base">
                        Boundless creativity converges with industry leaders, weaving new
                        narratives in design and service.
                    </p>

                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-9 inline-flex items-center gap-4 border border-[#17194a]/35 px-6 py-4 font-body text-xs uppercase tracking-[0.22em] text-[#17194a] transition hover:border-gold hover:text-gold"
                    >
                        <span className="grid h-9 w-9 place-items-center rounded-full border border-current">
                            <FiPlay aria-hidden="true" />
                        </span>
                        Watch The Video
                    </a>
                </motion.div>

                <motion.div
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.1 }}
                    className="w-full min-w-0"
                >
                    <div
                        ref={sliderRef}
                        onScroll={updateProgress}
                        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {partners.map((partner) => (
                            <article
                                key={partner.name}
                                className="group relative h-[28rem] min-w-[82%] snap-start overflow-hidden bg-black text-white sm:min-w-[46%] lg:min-w-[31%]"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/15" />

                                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                                    <div className="mb-5 h-px w-full bg-white/35" />
                                    <h3 className="font-heading text-[clamp(1.5rem,3vw,2.35rem)] leading-tight text-white">
                                        {partner.name}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 flex items-center gap-5">
                        <button
                            type="button"
                            aria-label="Previous partner"
                            onClick={() => slideBy(-1)}
                            className="grid h-11 w-11 shrink-0 place-items-center border border-[#17194a]/30 bg-transparent text-2xl text-[#17194a] transition hover:border-gold hover:text-gold"
                        >
                            <FiChevronLeft aria-hidden="true" />
                        </button>

                        <div className="h-px flex-1 bg-[#17194a]/20">
                            <div
                                className="h-px bg-gold transition-[width] duration-300"
                                style={{ width: `${Math.max(progress * 100, 12)}%` }}
                            />
                        </div>

                        <button
                            type="button"
                            aria-label="Next partner"
                            onClick={() => slideBy(1)}
                            className="grid h-11 w-11 shrink-0 place-items-center border border-[#17194a]/30 bg-transparent text-2xl text-[#17194a] transition hover:border-gold hover:text-gold"
                        >
                            <FiChevronRight aria-hidden="true" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersSection;
