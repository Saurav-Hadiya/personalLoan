"use client";

import faq from "./Faq.module.css";
import { useState } from "react";
import { Lato } from "next/font/google";
import { useRouter } from "next/navigation";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});

const latoBody = Lato({
  weight: "400",
  subsets: ["latin"],
});

const qna = [
  {
    question: "What is a personal loan?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "How much can I borrow with a personal loan?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "How quickly can I receive the funds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "What are the eligibility criteria for a personal loan?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "How Do I Apply for a Personal Loan?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "What Is the Interest Rate on a Personal Loan?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "How Long Does It Take to Get Approved?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "Are There Any Fees Associated with a Personal Loan?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "Can I Pay Off My Loan Early?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "What Happens If I Miss a Payment?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "How Will a Personal Loan Affect My Credit Score?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "Can I Use a Personal Loan for Debt Consolidation?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
];

const Faq = ({ limit }) => {
  const [display, setDisplay] = useState(Array(qna.length).fill(false));

  const qnaToShow = limit ? qna.slice(0, limit) : qna;

  const router = useRouter();
  const navigateToPage = (arg) => {
    router.push(`/${arg}`);
  };

  const toggleDisplay = (index) => {
    setDisplay((prevDisplay) => {
      const newDisplay = [...prevDisplay];
      newDisplay[index] = !newDisplay[index];
      return newDisplay;
    });
  };

  return (
    <>
      <section className={`${faq.container}`} >
        {limit ? (
          <div className={faq.upperContainer}>
            <h2 className={`${latoHeading.className} ${faq.heading2}`}>
              Frequently Asked Questions
            </h2>
          </div>
        ) : undefined}
        <section className={faq.lowerContainer}>
          {qnaToShow.map((item, index) => {
            return (
              <div key={index}>
                <article
                  className={faq.content}
                  onClick={() => {
                    toggleDisplay(index);
                  }}
                >
                  <div className={faq.description}>
                    <h3 className={`${latoHeading.className} ${faq.subtitle3}`}>
                      {item.question}
                    </h3>
                    <p style={{ position: "absolute", right: "3%" }}>
                      {display[index] ? "-" : "+"}
                    </p>
                  </div>
                </article>
                {
                  <div
                    className={`${faq.subDescription} ${
                      display[index] === true ? faq.visible : faq.hidden
                    }`}
                  >
                    <p className={`${latoBody.className} ${faq.body1}`}>
                      {item.answer}
                    </p>
                  </div>
                }
              </div>
            );
          })}
        </section>
        {limit ? (
          <button
            className={`${latoHeading.className} ${faq.btn}`}
            onClick={() => navigateToPage("faqs")}
          >
            View all
          </button>
        ) : undefined}
      </section>
    </>
  );
};

export default Faq;
