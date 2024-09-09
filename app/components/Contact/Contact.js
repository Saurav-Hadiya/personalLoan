import connect from "./Contact.module.css";
import { Lato } from "next/font/google";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});

const latoBody = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <>
      <div className={connect.box}>
        <div className={connect.upperBox}>
          <h4 className={`${latoHeading.className} ${connect.heading2}`}>
            Get in touch
          </h4>
        </div>
        <div className={connect.downBox}>
          <img src="./map.png" className={connect.img1}/>
          <img src="./contact.png" className={connect.img2}/>
        </div>
      </div>
    </>
  );
};

export default Contact;
