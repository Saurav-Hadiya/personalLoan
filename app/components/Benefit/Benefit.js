import key from "./Benefit.module.css";
import { Lato } from "next/font/google";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});

const latoBody = Lato({
    weight:"400",
    subsets:['latin']
})

const Benefit = () => {
  return (
    <>
      <div className={key.Box}>
        <div className={key.upperBox}>
          <h2 className={`${latoHeading.className} ${key.heading2}`}>
            Key Benefits
          </h2>
        </div>
        <div className={key.downBox}>
          <div className={key.subBox}>
            <img src="./benefitImg-1.png" alt="Benefit"/>
            <div className={key.contentBox}>
              <div className={key.cntHead}>
                <h2 className={`${latoHeading.className} ${key.heading5}`}>Loan for Everyone</h2>
              </div>
              <div className={key.cntbody}>
                <p className={`${latoBody.className} ${key.body1}`}>
                  Personal loans tailored to fit any financial need. Accessible
                  options for all, from debt consolidation to major purchases.
                </p>
              </div>
            </div>
          </div>
          <div className={key.subBox}>
            <img src="./benefitImg-2.png" alt="Benefit"/>
            <div className={key.contentBox}>
              <div className={key.cntHead}>
                <h2 className={`${latoHeading.className} ${key.heading5}`}>Quick process</h2>
              </div>
              <div className={key.cntbody}>
                <p className={`${latoBody.className} ${key.body1}`}>
                Apply in minutes and get fast approvals. Streamlined steps ensure you get your funds quickly and effortlessly.
                </p>
              </div>
            </div>
          </div>
          <div className={key.subBox}>
            <img src="./benefitImg-3.png" alt="Benefit"/>
            <div className={key.contentBox}>
              <div className={key.cntHead}>
                <h2 className={`${latoHeading.className} ${key.heading5}`}>Direct Deposit</h2>
              </div>
              <div className={key.cntbody}>
                <p className={`${latoBody.className} ${key.body1}`}>
                Receive your loan funds via secure direct deposit. Quick and convenient access to your money, right when you need it.   
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
