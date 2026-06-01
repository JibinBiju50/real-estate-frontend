import { useEffect } from "react";

import featuredBanner1 from "../assets/images/Featured_img1.jpg";
import { useNavbarVisibility } from "../context/useNavbarVisibility";
import AVAImage1 from "../assets/images/AVA_img1.jpg";
import AVAImage2 from "../assets/images/AVA_img2.jpg";
import AVAImage3 from "../assets/images/AVA_img3.jpg";

const AvaNewsPage = () => {
  const { setVisible } = useNavbarVisibility();

  useEffect(() => {
    setVisible(true);
  }, [setVisible]);

  return (
    <article className="min-h-screen bg-white text-[#020947]">
      <section className="px-6 pb-[8.5rem] pt-[9.5rem] md:px-[3.75rem] md:pb-[10rem] md:pt-[10.5rem]">
        <div className="mb-[4.75rem] flex items-start justify-between gap-8">
          <span className="bg-[#f4f3f1] px-4 py-2.5 font-body text-sm font-semibold text-[#020947]">
            News
          </span>

          <time
            dateTime="2026-04-09"
            className="pt-2 font-body text-base font-semibold text-[#a18763]"
          >
            April 9, 2026
          </time>
        </div>

        <h1 className="mx-auto max-w-[67rem] text-center font-heading text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[1.16] text-[#020947]">
          Esto Unveils AVA at Palm Jumeirah First in Place Residence
        </h1>
      </section>

      <img
        src={featuredBanner1}
        alt="AVA at Palm Jumeirah residence"
        className="h-screen w-full object-cover"
      />

      <div className="mx-auto max-w-xl md:max-w-6xl  flex flex-col gap-8 py-16 text-left mt-8 ">
        <p className="font-body text-sm font-semibold leading-7 text-[#25295f] md:text-base md:leading-8">VA at Palm Jumeirah, Dorchester Collection, Dubai, an architectural masterpiece by ESTO, approaches a defining moment as it steadily moves towards completion.</p>

        <p className="font-body text-sm font-semibold leading-7 text-[#25295f] md:text-base md:leading-8">With the structure now topped out and final stages of construction advancing with precision, the development reflects ESTO’s unwavering commitment to quality, craftsmanship, and timely delivery.</p>

        <p className="font-body text-sm font-semibold leading-7 text-[#25295f] md:text-base md:leading-8">The unveiling of the first in place residence marks a significant milestone, offering a rare opportunity to experience the finished vision firsthand. From bespoke interiors to seamless spatial flow, every element reflects a new benchmark in elevated living.</p>

        <p className="font-body text-sm font-semibold leading-7 text-[#25295f] md:text-base md:leading-8">As AVA at Palm Jumeirah approaches handover, it stands as a testament to ESTO’s enduring commitment to delivering with certainty and distinction.</p>

        <p className="font-body text-sm font-semibold leading-7 text-[#25295f] md:text-base md:leading-8">Visit AVA at Palm Jumeirah first in place residence today.</p>
      </div>

      <div className="grid gap-6 px-6 pb-24 md:grid-cols-[2fr_1fr] md:grid-rows-2 md:px-[3.75rem]">
        <img
          src={AVAImage1}
          alt="AVA residence living room"
          className="h-[26rem] w-full object-cover md:row-span-2 md:h-full"
        />
        <img
          src={AVAImage2}
          alt="AVA residence dining room"
          className="h-[26rem] w-full object-cover md:h-full"
        />
        <img
          src={AVAImage3}
          alt="AVA residence lounge"
          className="h-[26rem] w-full object-cover md:h-full"
        />
      </div>


    </article>
  );
};

export default AvaNewsPage;
