import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

import sidebarBackground from "../../assets/images/Featured_img1.jpg";

const primaryLinks = [
  "Home",
  "Masterpieces",
  "Destination",
  "Our Story",
  "Esto Bespoke",
  "Esto Atelier",
  "Sales Galleries",
];

const secondaryLinks = [
  "News",
  "Investor Relations",
  "Esto Green Sukuk",
  "Media Enquiries",
  "Careers",
  "Contact Us",
];

const masterpieceLinks = ["Residential", "Commercial", "Mixed Use"];
const destinationLinks = ["Marasi Bay"];
const residentialLinks = [
  "View All Properties",
  "The Alba Residences",
  "The Alba Resort Residences",
  "Orla Infinity",
  "Vela",
  "Orla",
  "Ava At Palm Jumeirah",
  "One At Palm Jumeirah",
  "Vela Viento",
];
const commercialLinks = [
  "View All Properties",
  "Lumena By Esto",
  "Enara By Esto",
  "The Opus By Esto",
];
const mixedUsePropertyLinks = [
  "View All Properties",
  "The Lana",
  "The Opus By Esto",
];

const menuPanelVariants = {
  closed: {
    x: "-104%",
    transition: {
      duration: 0.58,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.045,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.16,
      when: "beforeChildren",
    },
  },
};

const submenuVariants = {
  closed: {
    x: "104%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.045,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.075,
      delayChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const primaryLinkVariants = {
  closed: { opacity: 0, x: -34 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const secondaryLinkVariants = {
  closed: { opacity: 0, x: -22 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [menuView, setMenuView] = useState("main");

  useEffect(() => {
    document.body.style.overflow = clicked ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [clicked]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-black/10 px-5 py-5 text-white backdrop-blur-sm md:px-10"
      >
        <div className="flex min-w-24 items-center">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => {
              setMenuView("main");
              setClicked(true);
            }}
            className="grid h-10 w-10 place-items-center text-2xl text-white transition hover:text-gold"
          >
            <FiMenu aria-hidden="true" />
          </button>
        </div>

        <h1 className="font-heading text-3xl tracking-[0.2em] text-gold">
          ESTO
        </h1>
        
        <a href="/test">Test</a>

        <div className="flex min-w-24 justify-end">
          <button
            type="button"
            className="border border-white/60 px-4 py-3 font-body text-xs uppercase tracking-[0.18em] text-white transition hover:border-gold hover:text-gold md:px-5"
          >
            Contact
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.48, duration: 0.26 } }}
            className="fixed inset-0 z-[70] overflow-hidden bg-black/45 backdrop-blur-md"
          >
            <motion.img
              src={sidebarBackground}
              alt=""
              initial={{ scale: 1.04, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.02, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#223246]/45 backdrop-blur-[6px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/18 to-transparent" />

            <motion.aside
              variants={menuPanelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative z-10 flex h-full w-full max-w-[38rem] flex-col overflow-y-auto px-8 py-8 text-white [-ms-overflow-style:none] [scrollbar-width:none] md:px-20 [&::-webkit-scrollbar]:hidden"
            >
              <motion.button
                variants={primaryLinkVariants}
                type="button"
                aria-label="Close menu"
                onClick={() => setClicked(false)}
                className="mb-9 grid h-8 w-8 shrink-0 place-items-center text-3xl text-white transition hover:text-gold"
              >
                <FiX aria-hidden="true" />
              </motion.button>

              <nav aria-label="Sidebar navigation">
                <AnimatePresence mode="wait">
                  {menuView === "main" ? (
                    <motion.div
                      key="main-menu"
                      variants={menuPanelVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <ul className="space-y-5">
                        {primaryLinks.map((item) => (
                          <motion.li key={item} variants={primaryLinkVariants}>
                            {item === "Masterpieces" ||
                            item === "Destination" ? (
                              <button
                                type="button"
                                onClick={() =>
                                  setMenuView(
                                    item === "Masterpieces"
                                      ? "masterpieces"
                                      : "destinations"
                                  )
                                }
                                className="font-heading text-[clamp(1.45rem,2.35vw,2.35rem)] uppercase leading-none text-white/78 transition hover:text-gold"
                              >
                                {item}
                              </button>
                            ) : (
                              <a
                                href="/"
                                className="font-heading text-[clamp(1.45rem,2.35vw,2.35rem)] uppercase leading-none text-white/78 transition hover:text-gold"
                              >
                                {item}
                              </a>
                            )}
                          </motion.li>
                        ))}
                      </ul>

                      <ul className="mt-8 space-y-3 pb-8">
                        {secondaryLinks.map((item) => (
                          <motion.li
                            key={item}
                            variants={secondaryLinkVariants}
                          >
                            <a
                              href="/"
                              className="font-heading text-[clamp(0.95rem,1.25vw,1.15rem)] uppercase leading-none text-white/72 transition hover:text-gold"
                            >
                              {item}
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${menuView}-menu`}
                      variants={submenuVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="pt-24"
                    >
                      <motion.p
                        variants={secondaryLinkVariants}
                        className="mb-12 font-heading text-[clamp(1rem,1.35vw,1.25rem)] uppercase text-white/78"
                      >
                        {menuView === "masterpieces" && "Masterpieces"}
                        {menuView === "destinations" && "Destinations"}
                        {(menuView === "residential" ||
                          menuView === "commercial" ||
                          menuView === "mixed-use") &&
                          "Masterpieces"}
                      </motion.p>

                      {menuView === "residential" ||
                      menuView === "commercial" ||
                      menuView === "mixed-use" ? (
                        <>
                          <motion.h2
                            variants={primaryLinkVariants}
                            className="mb-10 font-heading text-[clamp(1.75rem,3vw,2.65rem)] uppercase leading-none text-white/82"
                          >
                            {menuView === "residential" && "Residential"}
                            {menuView === "commercial" && "Commercial"}
                            {menuView === "mixed-use" && "Mixed Use"}
                          </motion.h2>

                          <div className="max-w-[44rem]">
                            <motion.a
                              href="/"
                              variants={secondaryLinkVariants}
                              className="mb-5 block font-heading text-[clamp(0.95rem,1.45vw,1.25rem)] uppercase leading-tight text-white/72 transition hover:text-gold"
                            >
                              View All Properties
                            </motion.a>

                            <div className="grid gap-x-20 gap-y-5 md:grid-cols-2">
                              {(menuView === "residential"
                                ? residentialLinks
                                : menuView === "commercial"
                                  ? commercialLinks
                                  : mixedUsePropertyLinks
                              )
                                .slice(1)
                                .map((item) => (
                                <motion.a
                                  key={item}
                                  href="/"
                                  variants={secondaryLinkVariants}
                                  className="font-heading text-[clamp(0.95rem,1.45vw,1.25rem)] uppercase leading-tight text-white/72 transition hover:text-gold"
                                >
                                  {item}
                                </motion.a>
                                ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <ul className="space-y-8">
                          {(menuView === "masterpieces"
                            ? masterpieceLinks
                            : destinationLinks
                          ).map((item) => (
                            <motion.li
                              key={item}
                              variants={primaryLinkVariants}
                            >
                              {item === "Residential" ||
                              item === "Commercial" ||
                              item === "Mixed Use" ? (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setMenuView(
                                      item === "Residential"
                                        ? "residential"
                                        : item === "Commercial"
                                          ? "commercial"
                                          : "mixed-use"
                                    )
                                  }
                                  className="font-heading text-[clamp(1.75rem,3vw,2.65rem)] uppercase leading-none text-white/78 transition hover:text-gold"
                                >
                                  {item}
                                </button>
                              ) : (
                                <a
                                  href="/"
                                  className="font-heading text-[clamp(1.75rem,3vw,2.65rem)] uppercase leading-none text-white/78 transition hover:text-gold"
                                >
                                  {item}
                                </a>
                              )}
                            </motion.li>
                          ))}
                        </ul>
                      )}

                      <motion.button
                        variants={secondaryLinkVariants}
                        type="button"
                        onClick={() =>
                          setMenuView(
                            menuView === "residential" ||
                              menuView === "commercial" ||
                              menuView === "mixed-use"
                              ? "masterpieces"
                              : "main"
                          )
                        }
                        className="mt-12 bg-black/45 px-8 py-4 font-body text-base font-semibold text-white transition hover:text-gold"
                      >
                        Back
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
