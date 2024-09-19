import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import articles from "./page.module.css";
import Article from "../components/Article/Article";

import { Lato } from "next/font/google";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});
const latoSubHeading = Lato({
  weight: "400",
  subsets: ["latin"],
});

const url = `${process.env.BASE_URL}/spaces/${process.env.SPACES}/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=componentDuplex`;

export default async function Articles() {
  const response = await fetch(url);
  const data = await response.json();
  return (
    <main>
      {/* Navigation bar */}
      <Navbar />

      {/*  */}
      <div className={articles.finance}>
        <div className={articles.financeContent}>
          <div className={articles.upperFinanceBox}>
            <div
              className={`${articles.upperBox1} ${latoHeading.className} ${articles.heading2}`}
            >
              Articles
            </div>
            <div
              className={`${articles.upperBox2} ${latoSubHeading.className} ${articles.subtitle4}`}
            >
              Learn the key steps to take before applying for a loan to ensure a
              smooth approval process
            </div>
          </div>
          <button className={`${latoHeading.className} ${articles.btn}`}>
            Request Funds now
          </button>
        </div>
      </div>

      {/* Article lists */}
      <Article headline="Article Lists" data={data}/>

      {/* Footer */}
      <Footer />
    </main>
  );
}


export const metadata = () => {
  return {
    title: "Articles- Rapid personal loans",
    description:
      "Read the lattest articles about finance and loans.",
  };
};
    