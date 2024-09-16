import { Lato } from "next/font/google";
import shuffle from "./BoxShuffle.module.css";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});

const latoSubHeading = Lato({
  weight: "400",
  subsets: ["latin"],
});

const BoxShuffle = ({ title, body, url }) => {
  return (
    <>
      <div className={`${shuffle.box} ${shuffle.boxDirection}`}>
        <div className={shuffle.leftBox}>
          <h3 className={`${latoHeading.className} ${shuffle.heading5}`}>
            {title}
          </h3>
          <p className={`${latoSubHeading.className} ${shuffle.body1}`}>
            {body}
          </p>
        </div>

        <div className={shuffle.rightBox}>
          <img src={url} className={shuffle.image} alt="Working-image" />
        </div>
      </div>
    </>
  );
};

export default BoxShuffle;
