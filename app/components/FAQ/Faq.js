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

const Faq = () => {
  const [display, setDisplay] = useState([false, false, false, false]);

  const toggleDisplay = (index) => {
    setDisplay((prevDisplay) => {
      const newDisplay = [...prevDisplay];
      newDisplay[index] = !newDisplay[index];
      return newDisplay;
    });
  };
  return (
    <>
      <section className={faq.container}>
        <div className={faq.upperContainer}>
          <h2 className={`${latoHeading.className} ${faq.heading2}`}>
            Frequently Asked Questions
          </h2>
        </div>
        <section className={faq.lowerContainer}>
          <article className={faq.content}>
            <div
              className={faq.description}
              onClick={() => {
                toggleDisplay(0);
              }}
            >
              <h3 className={`${latoHeading.className} ${faq.subtitle3}`}>
                What is personal Loan?
              </h3>
              <p style={{position:"absolute", right:"3%"}}>{display[0] ? "-" : "+"}</p>
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
          )}

          <article className={faq.content}>
            <div
              className={faq.description}
              onClick={() => {
                toggleDisplay(1);
              }}
            >
              <h3 className={`${latoHeading.className} ${faq.subtitle3}`}>
                How much can I borrow with a personal loan?
              </h3>
              <p style={{position:"absolute", right:"3%"}}>{display[1] ? "-" : "+"}</p>
            </div>
          </article>
          {display[1] && (
            <div className={faq.subDescription}>
              <p className={`${latoBody.className} ${faq.body1}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                facilisis faucibus odio arcu duis dui, adipiscing facilisis.
                Urna, donec turpis egestas volutpat. Quisque nec non amet quis.
                Varius tellus justo odio parturient mauris curabitur lorem in.
              </p>
            </div>
          )}

          <article className={faq.content}>
            <div
              className={faq.description}
              onClick={() => {
                toggleDisplay(2);
              }}
            >
              <h3 className={`${latoHeading.className} ${faq.subtitle3}`}>
                How quickly can I receive the funds?
              </h3>
              <p style={{position:"absolute", right:"3%"}}>{display[2] ? "-" : "+"}</p>
            </div>
          </article>
          {display[2] && (
            <div className={faq.subDescription}>
              <p className={`${latoBody.className} ${faq.body1}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                facilisis faucibus odio arcu duis dui, adipiscing facilisis.
                Urna, donec turpis egestas volutpat. Quisque nec non amet quis.
                Varius tellus justo odio parturient mauris curabitur lorem in.
              </p>
            </div>
          )}

          <article className={faq.content}>
            <div className={faq.description} onClick={()=>{toggleDisplay(3)}}>
              <h3 className={`${latoHeading.className} ${faq.subtitle3}`} >
                What are the eligibility criteria for a personal loan?
              </h3>
              <p style={{position:"absolute", right:"3%"}}>{display[3] ? "-" : "+"}</p>
            </div>
          </article>
          {display[3] && (
            <div className={faq.subDescription}>
              <p className={`${latoBody.className} ${faq.body1}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                facilisis faucibus odio arcu duis dui, adipiscing facilisis.
                Urna, donec turpis egestas volutpat. Quisque nec non amet quis.
                Varius tellus justo odio parturient mauris curabitur lorem in.
              </p>
            </div>
          )}

        </section>

        <button className={`${latoHeading.className} ${faq.btn}`}>
          View all
        </button>
      </section>
    </>
  );
};

export default Faq;
