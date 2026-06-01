import masterpiece_img_1 from "../../assets/images/masterpiece_1.jpg";
import masterpiece_img_2 from "../../assets/images/masterpiece_2.jpg";
import masterpiece_img_3 from "../../assets/images/masterpiece_3.jpg";
import masterpiece_img_4 from "../../assets/images/masterpiece_4.jpg";
import useInView from "../../hooks/useInView.js";

const MasterpieceSection = () => {
  const [ref1, inView1] = useInView({ threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 0.4 });
  const [ref3, inView3] = useInView({ threshold: 0.4 });
  const [ref4, inView4] = useInView({ threshold: 0.4 });

  return (
    <section className="relative bg-white flex flex-col justify-start items-center w-full">
      <div className="flex flex-col gap-4 items-center justify-center px-6 py-8 md:py-24 text-center min-h-96">
        <p className="font-body text-sm uppercase tracking-[0.28em] text-gold">
          MASTERPIECES
        </p>
        <h3 className="max-w-5xl font-heading text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[1.08] md:leading-[1.02]">
          CREATING LIVING WORKS OF ART
        </h3>
        <p className="max-w-4xl font-body text-xs md:text-sm uppercase text-primary">
          Art is more than a symbol of luxury; it's an expression of rarity, creativity, and quality. Our unique masterpieces and destinations are legacies for the future.
        </p>
      </div>

      <div className="w-full">
        <div ref={ref1} className="relative w-full aspect-[3/4] md:aspect-[16/9]">
  <img src={masterpiece_img_1} alt="masterpiece_image_1" className="object-cover w-full h-full"/>
  <h3
    className={`
      absolute left-4 top-1/2 -translate-y-1/2 px-2
      max-w-xs sm:max-w-sm md:max-w-xl font-heading
      text-base sm:text-lg md:text-[clamp(0.8rem,6vw,2.5rem)] uppercase leading-[1.18] md:leading-[1.08]
      ${inView1 ? "fade-in" : "fade-init"}
      text-white drop-shadow-xl text-center break-words
    `}
    style={{ pointerEvents: "none" }}
  >
    REIMAGINING HORIZONS
  </h3>
</div>

        <div ref={ref2} className="relative w-full aspect-[3/4] md:aspect-[16/9]">
  <img src={masterpiece_img_2} alt="masterpiece_image_2" className="object-cover w-full h-full"/>
  <h3
    className={`
      absolute top-10 left-1/2 -translate-x-1/2
      max-w-xs sm:max-w-sm md:max-w-xl font-heading
      text-base sm:text-lg md:text-[clamp(0.8rem,6vw,2.5rem)] uppercase leading-[1.18] md:leading-[1.08]
      ${inView2 ? "fade-in" : "fade-init"}
      text-white drop-shadow-lg text-center break-words
    `}
    style={{ pointerEvents: "none" }}
  >
    INSPRIRING LIFE WITHIN MASTERFUL CREATIONS
  </h3>
</div>

        <div ref={ref3} className="relative w-full aspect-[3/4] md:aspect-[16/9]">
  <img src={masterpiece_img_3} alt="masterpiece_image_3" className="object-cover w-full h-full"/>
  <h3
    className={`
      absolute right-4 top-1/2 -translate-y-1/2
      max-w-xs sm:max-w-sm md:max-w-xl font-heading
      text-base sm:text-lg md:text-[clamp(0.8rem,6vw,2.5rem)] uppercase leading-[1.18] md:leading-[1.08]
      ${inView3 ? "fade-in" : "fade-init"}
      text-white drop-shadow-lg text-right
    `}
    style={{ pointerEvents: "none" }}
  >
    REDEFINING ARCHITECTURAL PERSPECTIVES
  </h3>
</div>
        <div ref={ref4} className="relative w-full aspect-[3/4] md:aspect-[16/9]">
  <img src={masterpiece_img_4} alt="masterpiece_image_1" className="object-cover w-full h-full"/>
  <div
    className={`
      absolute inset-0
      flex items-center justify-center
      ${inView4 ? "fade-in" : "fade-init"}
    `}
  >
    <div className="flex w-full max-w-xs flex-col items-center px-4 text-center sm:max-w-sm md:max-w-xl">
    <h3
      className="
        font-heading text-base uppercase leading-[1.18] text-white drop-shadow-lg
        sm:text-lg md:text-[clamp(0.8rem,6vw,2.5rem)] md:leading-[1.08]
      "
      style={{ pointerEvents: "none" }}
    >
      A RETREAT WITHIN THE CITY
    </h3>
    <button
      className="
        mt-5 px-6 py-3 bg-white/80 text-primary font-body uppercase rounded shadow
        hover:bg-gold hover:text-white transition
      "
    >
      DISCOVER MASTERPIECES
    </button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default MasterpieceSection;
