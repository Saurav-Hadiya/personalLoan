"use client";

import faq from "./Faq.module.css";
import { useState } from "react";
import { Lato } from "next/font/google";

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
];

const Faq = () => {
  const [display, setDisplay] = useState(Array(qna.length).fill(false));

  const toggleDisplay = (index) => {
    setDisplay((prevDisplay) => {
      const newDisplay = [...prevDisplay];
      newDisplay[index] = !newDisplay[index];
      return newDisplay;
    });
  };

  // const [activeIndex, setActiveIndex] = useState(null);

  // const toggleDisplay = (index) => {
  //   setActiveIndex(index === activeIndex ? null : index); // Toggle the display for each FAQ
  // };

  return (
    <>
      <section className={faq.container}>
        <div className={faq.upperContainer}>
          <h2 className={`${latoHeading.className} ${faq.heading2}`}>
            Frequently Asked Questions
          </h2>
        </div>
        <section className={faq.lowerContainer}>
          {qna.map((item, index) => {
            return (
              <div key={index}>
                <article className={faq.content}>
                  <div
                    className={faq.description}
                    onClick={() => {
                      toggleDisplay(index);
                    }}
                  >
                    <h3 className={`${latoHeading.className} ${faq.subtitle3}`}>
                      {item.question}
                    </h3>
                    <p style={{ position: "absolute", right: "3%" }}>
                      {display[index] ? "-" : "+"}
                    </p>
                  </div>
                </article>
                {  (
                  <div className={`${faq.subDescription} ${display[index]===true ? faq.visible:faq.hidden}`}>
                    <p className={`${latoBody.className} ${faq.body1}`}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}




          {/* <article className={faq.content}>
            <div
              className={faq.description}
              onClick={() => {
                toggleDisplay(0);
              }}
            >
              <h3 className={`${latoHeading.className} ${faq.subtitle3}`}>
                What is personal Loan?
              </h3>
              <p style={{ position: "absolute", right: "3%" }}>
                {display[0] ? "-" : "+"}
              </p>
            </div>
          </article>
          {display[0] && (
            <div className={faq.subDescription}>
              <p className={`${latoBody.className} ${faq.body1}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                facilisis faucibus odio arcu duis dui, adipiscing facilisis.
                Urna, donec turpis egestas volutpat. Quisque nec non amet quis.
                Varius tellus justo odio parturient mauris curabitur lorem in.
              </p>
            </div>
          )} */}
        </section>

        <button className={`${latoHeading.className} ${faq.btn}`}>
          View all
        </button>
      </section>
    </>
  );
};

export default Faq;






