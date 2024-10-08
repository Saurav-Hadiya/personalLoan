import { Lato } from "next/font/google";
import styles from "./page.module.css";
import Navbar from "./components/Header/Navbar";
import Benefit from "./components/Benefit/Benefit";
import Working from "./components/Working/Working";
import Faq from "./components/FAQ/Faq";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Article from "./components/Article/Article";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});
const latoSubHeading = Lato({
  weight: "400",
  subsets: ["latin"],
});

const url = `${process.env.BASE_URL}/spaces/${process.env.SPACES}/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=componentDuplex`;

export default async function Home() {

  const response = await fetch(url);
  const data = await response.json();

  return (
    <main>
      {/* Navigation bar */}
      <Navbar />

      {/* Request fund box */}
      <div className={styles.fundBox}>
        <div className={styles.upperBox}>
          <div className={styles.box1}>
            <h1 className={`${latoHeading.className} ${styles.heading1}`}>
              Easy Loans, Fast Approvals, Big Possibilities
            </h1>
          </div>
          <div className={styles.box2}>
            <p className={`${latoSubHeading.className} ${styles.subtitle2}`}>
              Let's get you connected to a direct lender who can deliver quickly
              and&nbsp;securely!
            </p>
          </div>
        </div>
        <button className={`${latoHeading.className} ${styles.btn}`}>
          Request Funds now
        </button>
      </div>

      {/* Pictures */}
      <div className={styles.pictures}>
        <img src="./image-1.png" className={styles.image1} alt="loanPart-1" />
        <img src="./image-2.png" className={styles.image2} alt="loanPart-2" />
      </div>

      {/* Learn more section */}
      <div className={styles.learnMore}>
        <div className={styles.learnBox}>
          <div>
            <p className={styles.subtitle2} style={{ fontWeight: "500" }}>
              Unlock the financial flexibility you need with our personalized
              personal loans. Experience fast approvals, transparent terms, and
              a simple online application. Whether it's consolidating debt or
              funding a major purchase, we've got you covered.
            </p>
          </div>
          <button
            className={`${latoHeading.className} ${styles.btn}`}
            style={{ width: "209px", height: "60px" }}
          >
            Learn More
          </button>
        </div>
      </div>

      <Benefit />

      <Working />

      {/* Financial freedom section */}
      <div className={styles.finance}>
        <div className={styles.financeContent}>
          <div className={styles.upperFinanceBox}>
            <div className={`${styles.upperBox1} ${styles.heading2}`}>
              Unlock Your Financial Freedom Today
            </div>
            <div className={`${styles.upperBox2} ${styles.subtitle4}`}>
              Apply online in minutes and receive up to $50,000 directly in your
              account. Fast, secure, and with no hidden fees—your financial
              solution is just a click away.
            </div>
          </div>
          <button className={`${latoHeading.className} ${styles.btn}`}>
            Request Funds now
          </button>
        </div>
      </div>

      {/* Articles section */}
      <Article headline="Latest Articles" limit="3" data={data}/>

      {/* FAQ section */}
      <Faq limit='4' />

      {/* ContactUs section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
