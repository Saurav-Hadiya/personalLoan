import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

import { Lato } from "next/font/google";
import Link from "next/link";
import footer from "./Footer.module.css";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});

const latoBody = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <footer className={footer.box}>
        <div className={footer.content}>
          <div className={footer.upperBox}>
            <div className={footer.leftUpper}>
              <ul className={`${latoBody.className} ${footer.navigation}`}>
                <li>
                  <Link href={"#"} className={footer.body1}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={footer.body1}>
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={footer.body1}>
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={footer.body1}>
                    About us
                  </Link>
                </li>
              </ul>
            </div>
            <div className={footer.rightUpper}>
              <FaSquareXTwitter className={footer.icon} />
              <IoLogoWhatsapp className={footer.icon} />
              <FaFacebook className={footer.icon} />
            </div>
          </div>
          <hr />
          <div className={footer.lowerBox}>
            <div className={`${footer.rightLower} ${latoBody.className} ${footer.body1}`}>
              <span>Terms of Service</span>
              <span className={footer.visibility}>|</span>
              <span>Privacy Policy</span>
            </div>

            <div className={footer.middleLower}>
              <img src="./logo.png" className={footer.imgBox} alt="Logo"/>
            </div>

            <div
              className={`${latoBody.className} ${footer.leftLower} ${footer.body1}`}
            >
              © 2024 Rapid Personal Loan. All&nbsp;rights&nbsp;reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
