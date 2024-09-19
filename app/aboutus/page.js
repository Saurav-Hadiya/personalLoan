import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import about from "./page.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Lato } from "next/font/google";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});
const latoSubHeading = Lato({
  weight: "400",
  subsets: ["latin"],
});


export const revalidate = 86400; // 1 day in seconds 

export default async function Aboutus() {
  let aboutDetail = `${process.env.BASE_URL}/spaces/${process.env.SPACES}/entries?access_token=${process.env.Aboutus_Token}&content_type=pages`;
  let response = await fetch(aboutDetail);
  let data = await response.json();
  let dataToShow = await data.items;

  return (
    <main>
      <Navbar />

      <div className={about.finance}>
        <div className={about.financeContent}>
          <div className={about.upperFinanceBox}>
            <div
              className={`${about.upperBox1} ${latoHeading.className} ${about.heading2}`}
            >
              About us
            </div>
            <div
              className={`${about.upperBox2} ${latoSubHeading.className} ${about.subtitle4}`}
            >
              Learn more about our mission, values, and commitment to helping
              you achieve financial freedom.
            </div>
          </div>
          <button className={`${latoHeading.className} ${about.btn}`}>
            Request Funds now
          </button>
        </div>
      </div>

      {/* About us */}

      <article className={`${about.article} ${about.page_content}`}>
        <section className={about.detail}>
          <div className={about.content}>
            {dataToShow.map((info, index) => {
              return (
                <div key={index} className={about.contentText}>
                  <div
                    className={`${latoSubHeading.className} ${about.body1}`}
                  >
                    {documentToReactComponents(info.fields.body)}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </article>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

export const metadata = () => {
  return {
    title: "About us- Rapid personal loans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
};
                                             