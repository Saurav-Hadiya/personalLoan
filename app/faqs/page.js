import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import qna from "./page.module.css";
import Faq from "../components/FAQ/Faq";

import { Lato } from "next/font/google";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});
const latoSubHeading = Lato({
  weight: "400",
  subsets: ["latin"],
});

const latoBody = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default async function Faqs() {

  return (
    <main>
      {/* Navigation bar */}
      <Navbar />

      {/*  */}
      <div className={qna.finance}>
        <div className={qna.financeContent}>
          <div className={qna.upperFinanceBox}>
            <div
              className={`${qna.upperBox1} ${latoHeading.className} ${qna.heading2}`}
            >
              Frequently Asked Questions
            </div>
            <div
              className={`${qna.upperBox2} ${latoSubHeading.className} ${qna.subtitle4}`}
            >
              Explore our most common questions to help guide you through the personal loan process.
            </div>
          </div>
          <button className={`${latoHeading.className} ${qna.btn}`}>
            Request Funds now
          </button>
        </div>
      </div>

      {/* FAQ section */}
      <Faq  />
        
      {/* Footer */}
      <Footer />
    </main>
  );
}