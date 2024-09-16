import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import terms from "./page.module.css";
import BoxShuffle from "../components/BoxShuffle/BoxShuffle";

import { Lato } from "next/font/google";
import title from "../articles/[slug]/page";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});
const latoSubHeading = Lato({
  weight: "400",
  subsets: ["latin"],
});

const WorkingProcess = [
  {
    title: "Step 1 : Apply Online1",
    body: "Start by completing our quick and easy online application form. You’ll need to provide some basic information, such as your name, contact details, income, and the amount you wish to borrow. Our user-friendly form is designed to be completed in just a few minutes, making it simple for you to get started from the comfort of your home.",
    url:"./working-1.png"
  },
  {
    title:"Step 2 : Get Approved Instantly",
    body:"Once you submit your application, our advanced system will review your information in real-time. Thanks to our state-of-the-art technology, you can receive an instant decision within minutes. No more waiting days for a response – we let you know right away whether your loan has been approved.",
    url:"./working-2.png"

  },
  {
    title:"Step 3 : Receive Your Funds",
    body:"Once your loan is approved, we’ll process your funds right away. The money will be deposited directly into your bank account, usually within one business day. This means you’ll have access to the funds you need quickly, so you can take care of any pressing expenses or opportunities without delay.",
    url:"./working-3.png"

  }
];

export default function Working() {
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
              How it works
            </div>
            <div
              className={`${terms.upperBox2} ${latoSubHeading.className} ${terms.subtitle4}`}
            >
              Learn how to apply for a personal loan in just three simple steps
              and get your money fast
            </div>
          </div>
          <button className={`${latoHeading.className} ${terms.btn}`}>
            Request Funds now
          </button>
        </div>
      </div>

      <section>
        {WorkingProcess.map((item,index)=>{
          return(
            <BoxShuffle title={item.title} body={item.body} url={item.url}/>
          )
        })}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
