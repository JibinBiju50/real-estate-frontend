import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const residentialLinks = [
  "The Alba Residences, Dorchester Collection, Dubai",
  "AVA at Palm Jumeirah, Dorchester Collection, Dubai",
  "ORLA Infinity, Dorchester Collection, Dubai",
  "ORLA, Dorchester Collection, Dubai",
  "VELA, Dorchester Collection, Dubai",
  "VELA Viento, Dorchester Collection, Dubai",
];

const mixedUseLinks = [
  "The OPUS by ESTO",
  "The Lana, Dorchester Collection, Dubai",
];

const exploreLinks = ["Our Story", "Contact Us", "News"];

const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    label: "X",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    icon: FaYoutube,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white">
      <div className="flex min-h-[14.25rem] flex-col items-center justify-center border-b border-white/8 px-6 text-center">
        <p className="font-heading text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95]">
          ESTO
        </p>
        <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.28em] text-gold">
          The Art of Elevation
        </p>
      </div>

      <div className="grid gap-12 border-b border-white/8 px-6 py-12 md:grid-cols-2 md:px-12 lg:grid-cols-[1fr_0.85fr_0.75fr_1.75fr] lg:px-[7.5rem] lg:py-[3.25rem]">
        <div>
          <h3 className="mb-3 font-body text-sm font-semibold text-[#8e969b] md:text-base">
            Residential
          </h3>
          <ul className="space-y-3">
            {residentialLinks.map((item) => (
              <li key={item}>
                <a
                  href="/"
                  className="block max-w-[18rem] font-body text-sm font-semibold leading-7 text-white transition hover:text-gold md:text-base md:leading-8"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-body text-sm font-semibold text-[#8e969b] md:text-base">
            Mixed Use
          </h3>
          <ul className="space-y-3">
            {mixedUseLinks.map((item) => (
              <li key={item}>
                <a
                  href="/"
                  className="block max-w-[15rem] font-body text-sm font-semibold leading-7 text-white transition hover:text-gold md:text-base md:leading-8"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-body text-sm font-semibold text-[#8e969b] md:text-base">
            Explore
          </h3>
          <ul className="space-y-3">
            {exploreLinks.map((item) => (
              <li key={item}>
                <a
                  href="/"
                  className="font-body text-sm font-semibold leading-7 text-white transition hover:text-gold md:text-base md:leading-8"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-7 font-body text-sm font-semibold text-[#8e969b] md:text-base">
            Stay in the know
          </h3>

          <form className="flex items-center border-b border-white/35">
            <label htmlFor="footer-email" className="sr-only">
              Email Address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Email Address"
              className="min-w-0 flex-1 bg-transparent px-4 py-4 font-body text-sm font-semibold text-white placeholder:text-white focus:outline-none md:text-base"
            />
            <button
              type="submit"
              className="px-4 py-4 font-body text-sm font-semibold text-white transition hover:text-gold md:text-base"
            >
              Submit
            </button>
          </form>

          <p className="mt-5 max-w-[36rem] font-body text-sm font-semibold leading-7 text-[#62666c] md:text-base md:leading-8">
            By signing up I want to hear about new updates and masterpieces and
            agree with the{" "}
            <a href="/" className="underline transition hover:text-white">
              data protection policy
            </a>{" "}
            of Esto.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-6 py-9 md:px-12 lg:flex-row lg:items-center lg:px-[7.5rem]">
        <nav className="flex flex-wrap gap-x-10 gap-y-4">
          {["Terms of Use", "Privacy", "Cookie Policy"].map((item) => (
            <a
              key={item}
              href="/"
              className="font-body text-sm font-semibold text-white transition hover:text-gold md:text-base"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 flex-col gap-7 md:flex-row md:items-center md:justify-end">
          <div className="flex gap-5">
            {socialLinks.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="/"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xl text-white/80 transition hover:border-gold hover:text-gold"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>

          <p className="font-body text-sm font-semibold text-white md:text-base">
            ESTO © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
