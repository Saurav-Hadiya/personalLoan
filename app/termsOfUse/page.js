import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import terms from "./page.module.css";
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

export default async function TermsOfUse() {
  let termsOfUseDetail = `${process.env.BASE_URL}/spaces/${process.env.SPACES}/entries?access_token=${process.env.TermsOfUse}&content_type=tou`;
  let response = await fetch(termsOfUseDetail);
  let data = await response.json();
  let dataToShow = await data.items;

  return (
    <main>
      <Navbar />

      {/*  */}
      <div className={terms.finance}>
        <div className={terms.financeContent}>
          <div className={terms.upperFinanceBox}>
            <div
              className={`${terms.upperBox1} ${latoHeading.className} ${terms.heading2}`}
            >
              Terms of use
            </div>
            <div
              className={`${terms.upperBox2} ${latoSubHeading.className} ${terms.subtitle4}`}
            >
              Understand the rules and guidelines for using our website and
              services responsibly and securely.
            </div>
          </div>
          <button className={`${latoHeading.className} ${terms.btn}`}>
            Request Funds now
          </button>
        </div>
      </div>

      {/* Terms of use */}

      <article className={`${terms.article}`}>
        <section className={terms.detail}>
          <div className={terms.content}>
            {dataToShow.map((info, index) => {
              return (
                <div key={index}>
                  <div
                    className={`${latoSubHeading.className} ${terms.body1}  ${terms.page_content}`}
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
    title: "Terms of services- Rapid personal loans",
    description: "Terms and conditions about loans ",
  };
};
