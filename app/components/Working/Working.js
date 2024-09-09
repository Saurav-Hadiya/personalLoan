import process from "./Working.module.css";
import { Lato } from "next/font/google";
const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});

const Working = () => {
  return (
    <>
      <div className={process.container}>
        <div className={process.upperContainer}>
          <h2 className={`${latoHeading.className} ${process.heading2}`}>
            How It Works
          </h2>
        </div>
        <div className={process.lowerContainer}>
          <div className={process.leftLower}>
            {/* Lower Index part */}
            <div className={process.lower1}>
              <div
                style={{
                  width: "133.33px",
                  height: "133.33px",
                  gap: "10px",
                  position: "relative",
                }}
              >
                <div className={process.index}>
                  <p
                    className={`${latoHeading.className} ${process.number}`}
                    style={{ fontWeight: "600" }}
                  >
                    1
                  </p>
                </div>
              </div>
              {/* <div className={process.verticalLine}></div> */}
              <div
                style={{
                  width: "133.33px",
                  height: "133.33px",
                  gap: "10px",
                  position: "relative",
                }}
              >
                <div className={process.index}>
                  <p
                    className={`${latoHeading.className} ${process.number}`}
                    style={{ fontWeight: "600" }}
                  >
                    2
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "133.33px",
                  height: "133.33px",
                  gap: "10px",
                  position: "relative",
                  display:"flex",
                  justifyContent:"center"
                }}
              >
                <div className={process.index}>
                  <p
                    className={`${latoHeading.className} ${process.number}`}
                    style={{ fontWeight: "600" }}
                  >
                    3
                  </p>
                </div>
              </div>
            </div>

            {/* Lower content part */}
            <div className={process.lower2}>
              {/* First content */}
              <div className={process.content}>
                <h2 className={process.heading5}>Apply Online</h2>
                <div
                  style={{
                    width: "100%",
                    height: "54px",
                    opacity: "80%",
                    border: "0px solid gray",
                  }}
                >
                  <p className={process.body2}>
                    Complete our quick and easy online form to provide your
                    basic details. It only takes a few minutes to get started.
                  </p>
                </div>
              </div>

              {/* second content */}
              <div className={process.content}>
                <h2 className={process.heading5}>Get Approved Instantly</h2>
                <div
                  style={{
                    width: "100%",
                    maxHeight: "54px",
                    opacity: "80%",
                    border: "0px solid gray",
                  }}
                >
                  <p className={process.body2}>
                    Our advanced system reviews your application in real-time.
                    Receive an instant decision so you know if you’re approved
                    within minutes.
                  </p>
                </div>
              </div>

              {/* third content */}
              <div className={process.content}>
                <h2 className={process.heading5}>Receive Your Funds</h2>
                <div
                  style={{
                    width: "100%",
                    height: "54px",
                    opacity: "80%",
                    border: "0px solid gray",
                  }}
                >
                  <p className={process.body2}>
                    Once approved, your funds will be deposited directly into
                    your bank account, usually within one business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={process.rightLower}></div> */}
          <img src="./working.png" className={process.rightLower} />
        </div>
      </div>
    </>
  );
};

export default Working;
