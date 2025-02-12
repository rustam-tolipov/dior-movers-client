import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GoPlusCircle, GoXCircle } from "react-icons/go";

const questions = [
  {
    question: "faq.question1.question",
    answer: "faq.question1.answer",
  },
  {
    question: "faq.question2.question",
    answer: "faq.question2.answer",
  },
  {
    question: "faq.question3.question",
    answer: "faq.question3.answer",
  },
  {
    question: "faq.question5.question",
    answer: "faq.question5.answer",
  },
  {
    question: "faq.question4.question",
    answer: "faq.question4.answer",
  },
];

const Item = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col gap-2 overflow-hidden md:gap-0">
      <div
        className="z-20 flex w-full items-center justify-between rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm md:h-16 md:px-8 md:text-lg"
        onClick={() => setOpen(!open)}
      >
        {t(question)}
        {open ? (
          <GoXCircle className="stroke-[0.5] text-2xl text-green-500" />
        ) : (
          <GoPlusCircle className="stroke-[0.5] text-2xl text-red-500" />
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="z-10 mt-2 flex w-full items-center justify-center gap-4 px-4 text-sm font-medium text-gray-900 md:h-16 md:px-8 md:text-base">
              <span className="min-h-10 w-1 rounded-full bg-gray-600"></span>
              {t(answer)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-fit w-full justify-center bg-red-50 px-4 md:p-0">
      <div className="container flex h-fit flex-col items-center gap-16 py-20 md:pb-52 md:pt-32">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm font-medium uppercase text-red-600 md:text-lg">
            {t("faq.title")}
          </p>
          <h1 className="text-xl font-bold md:text-4xl">{t("faq.subtitle")}</h1>
        </div>
        <div className="flex w-full flex-col gap-2 lg:w-8/12">
          {questions.map((question, index) => (
            <Item key={index} {...question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
