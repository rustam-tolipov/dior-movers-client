/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "How do I book a moving service?",
    answer:
      "You can easily book our moving services online or by giving us a call. We'll schedule a time that works best for you!",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve all major cities and surrounding areas. Please contact us to confirm if we cover your location.",
  },
  {
    question: "Do you offer packing services?",
    answer:
      "Yes, we offer professional packing services to ensure your belongings are safely packed and transported.",
  },
  {
    question: "Are there any items you cannot move?",
    answer:
      "We cannot move hazardous materials, perishable items, or items that are illegal to transport. Please contact us for a full list of restricted items.",
  },
  {
    question: "How do I prepare for my move?",
    answer:
      "We recommend creating an inventory of your items, labeling boxes, and ensuring all items are packed securely. Our team can provide additional tips and assistance.",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <div className="flex h-fit w-full justify-center bg-red-50 px-4 md:p-0">
      <div className="container flex h-fit flex-col items-center gap-16 py-20 md:pb-52 md:pt-32">
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
            Got Questions? We’ve Got Answers!
          </p>
          <h1 className="text-xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h1>
        </div>
        {/* FAQ */}
        <div className="flex w-full flex-col gap-2 lg:w-8/12">
          <AnimatePresence>
            {questions.map((question, index) => (
              <Item
                key={index}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;

const Item = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex w-full flex-col gap-2 overflow-hidden md:gap-0">
      <div className="flex w-full items-center justify-between rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm md:h-16 md:px-8 md:text-lg">
        {question}
        <span
          onClick={handleOpen}
          className="flex h-6 w-6 items-center justify-center md:h-8 md:w-8"
        >
          {open && (
            <motion.svg
              initial={{
                rotateZ: "-30deg",
              }}
              animate={{
                rotateZ: "0deg",
              }}
              fill="none"
              strokeWidth={1.5}
              stroke="#f00"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              height="100%"
              width="100%"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </motion.svg>
          )}
          {!open && (
            <motion.svg
              initial={{
                rotateZ: "30deg",
              }}
              animate={{
                rotateZ: "0deg",
              }}
              fill="none"
              strokeWidth={1.5}
              stroke="#f00"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              height="100%"
              width="100%"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </motion.svg>
          )}
        </span>
      </div>
      {open && (
        <motion.div
          initial={{
            y: -10,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -10,
            opacity: 0,
          }}
          className="flex w-full items-center justify-center gap-4 px-4 text-sm font-medium text-gray-900 md:h-16 md:px-8 md:text-base"
        >
          <span className="min-h-10 w-1 rounded-full bg-gray-600"></span>
          {answer}
        </motion.div>
      )}
    </div>
  );
};
