import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiMessageCircle, FiRefreshCw, FiX } from "react-icons/fi";

const chatFlow = {
  start: {
    messages: [
      "Welcome to ESTO. The Art of Elevation begins here.",
      "Please select an option below to guide us in assisting you:",
    ],
    options: [
      { label: "Book a Viewing", next: "viewing" },
      { label: "Property Details", next: "details" },
      { label: "Other Queries", next: "other" },
      { label: "Connect Live Support", action: "whatsapp" },
    ],
  },

  viewing: {
    messages: ["Our team can help you arrange a private viewing at your preferred time."],
    prompt: "Choose how you would like us to continue:",
    options: [
      { label: "Call Now", action: "phone" },
      { label: "Send Email Request", action: "email" },
      { label: "Back", next: "start" },
    ],
  },

  details: {
    messages: ["ESTO residences combine waterfront calm, curated service, and refined architectural detail."],
    prompt: "Which collection would you like to explore?",
    options: [
      { label: "Apartments", next: "apartments" },
      { label: "Penthouses", next: "penthouses" },
      { label: "Back", next: "start" },
    ],
  },

  apartments: {
    messages: ["Our apartment residences offer crafted interiors, private amenities, and considered city views."],
    prompt: "Choose the next step:",
    options: [
      { label: "Book a Viewing", next: "viewing" },
      { label: "Connect Live Support", action: "whatsapp" },
      { label: "Back", next: "details" },
    ],
  },

  penthouses: {
    messages: ["Our penthouses are designed for elevated private living with expansive spaces and signature finishes."],
    prompt: "Choose the next step:",
    options: [
      { label: "Contact Sales", action: "whatsapp" },
      { label: "Send Email Request", action: "email" },
      { label: "Back", next: "details" },
    ],
  },

  other: {
    messages: ["Kindly select the option that best suits your needs:"],
    options: [
      { label: "Rent / Lease", next: "rent" },
      { label: "Career Opportunities", next: "careers" },
      { label: "Service Provider", next: "service" },
      { label: "Existing Customer", next: "customer" },
      { label: "Connect Live Support", action: "whatsapp" },
    ],
  },

  rent: {
    messages: ["Our team can help you with current rental and lease enquiries."],
    prompt: "Select an option below:",
    options: [
      { label: "Call Now", action: "phone" },
      { label: "Send Email Request", action: "email" },
      { label: "Back", next: "other" },
    ],
  },

  careers: {
    messages: ["Thank you for your interest in ESTO careers."],
    prompt: "Select an option below:",
    options: [
      { label: "Email HR Team", action: "email" },
      { label: "Back", next: "other" },
    ],
  },

  service: {
    messages: ["For service provider enquiries, our concierge team can guide you."],
    prompt: "Select an option below:",
    options: [
      { label: "Send Email Request", action: "email" },
      { label: "Back", next: "other" },
    ],
  },

  customer: {
    messages: ["Existing customers can connect directly with our support team."],
    prompt: "Choose how you would like to proceed:",
    options: [
      { label: "Connect Live Support", action: "whatsapp" },
      { label: "Call Now", action: "phone" },
      { label: "Back", next: "other" },
    ],
  },
};

const createBotMessages = (stepKey) => {
  const step = chatFlow[stepKey];
  const messages = step.messages.map((text) => ({ sender: "bot", text }));

  if (step.prompt) {
    messages.push({ sender: "bot", text: step.prompt });
  }

  return messages;
};

const BotMark = () => (
  <span className="mt-3 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/40 font-heading text-base leading-none text-primary">
    E
  </span>
);

export const ChatWidget = () => {
  const [mode, setMode] = useState("button");
  const [currentStep, setCurrentStep] = useState("start");
  const [messages, setMessages] = useState(() => createBotMessages("start"));
  const messagesEndRef = useRef(null);
  const currentChat = chatFlow[currentStep];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, mode]);

  const restartConversation = () => {
    setCurrentStep("start");
    setMessages(createBotMessages("start"));
  };

  const handleChatOption = (option) => {
    const nextMessages = [{ sender: "user", text: option.label }];

    if (option.next) {
      setCurrentStep(option.next);
      nextMessages.push(...createBotMessages(option.next));
    }

    if (option.action === "whatsapp") {
      nextMessages.push({ sender: "bot", text: "Opening WhatsApp so our team can continue the conversation with you." });
      window.open("https://wa.me/971500000000?text=Hello%20ESTO,%20I%20would%20like%20to%20know%20more.", "_blank");
    }

    if (option.action === "phone") {
      nextMessages.push({ sender: "bot", text: "Opening your phone app to call the ESTO team." });
      window.open("tel:+971500000000", "_self");
    }

    if (option.action === "email") {
      nextMessages.push({ sender: "bot", text: "Opening your email app with the enquiry details prepared." });
      window.open(
        "mailto:sales@esto.com?subject=Viewing Request&body=Hello ESTO, I would like to request more details.",
        "_self"
      );
    }

    setMessages((previousMessages) => [...previousMessages, ...nextMessages]);
  };

  if (mode === "closed") {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-5 z-[80] md:bottom-8 md:right-8">
      <AnimatePresence mode="wait">
        {mode === "button" ? (
          <motion.button
            key="chat-button"
            type="button"
            aria-label="Open chat"
            initial={{ opacity: 0, scale: 0.88, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 18 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setMode("window")}
            className="
              inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3
              font-body text-sm font-semibold text-white shadow-2xl ring-1 ring-white/10
              transition hover:text-gold md:px-6 md:py-4 md:text-base
            "
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-primary">
              <FiMessageCircle aria-hidden="true" />
            </span>
            Click to chat
          </motion.button>
        ) : (
          <motion.aside
            key="chat-window"
            initial={{ opacity: 0, scale: 0.86, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 26 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="
              flex h-[32rem] w-[min(calc(100vw-2.5rem),24rem)] flex-col overflow-hidden
              bg-white text-primary shadow-2xl ring-1 ring-primary/10
            "
          >
            <header className="flex items-center justify-end px-4 py-3">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Restart chat"
                  onClick={restartConversation}
                  className="grid h-9 w-9 place-items-center text-lg text-primary/70 transition hover:text-gold"
                >
                  <FiRefreshCw aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Minimize chat"
                  onClick={() => setMode("button")}
                  className="grid h-9 w-9 place-items-center text-xl text-primary/70 transition hover:text-gold"
                >
                  <FiChevronDown aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Close chat"
                  onClick={() => setMode("closed")}
                  className="grid h-9 w-9 place-items-center text-xl text-primary/70 transition hover:text-gold"
                >
                  <FiX aria-hidden="true" />
                </button>
              </div>
            </header>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 pb-6 pt-1 font-body">
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.sender}-${message.text}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className={message.sender === "user" ? "flex justify-end" : "flex items-start gap-3"}
                >
                  {message.sender === "bot" && <BotMark />}
                  <p
                    className={
                      message.sender === "user"
                        ? "max-w-[17rem] rounded-[0.75rem] bg-primary px-4 py-3 text-[0.95rem] leading-6 text-white"
                        : "max-w-[19.5rem] rounded-[0.9rem] bg-[#f1f3f6] px-4 py-3 text-[0.95rem] leading-6 text-black"
                    }
                  >
                    {message.text}
                  </p>
                </motion.div>
              ))}

              <div className="ml-9 flex flex-wrap gap-2 pt-1">
                {currentChat.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleChatOption(option)}
                    className="
                      rounded-[0.55rem] border border-[#cfd4dc] bg-white px-3 py-2
                      text-left text-sm leading-none text-primary transition
                      hover:border-gold hover:bg-[#fbf8f2] hover:text-gold
                    "
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div ref={messagesEndRef} />
            </div>

          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};
