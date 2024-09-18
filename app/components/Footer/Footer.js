import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

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
                  <Link href={"#"} className={`${footer.body1} ${footer.customLink}`}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={`${footer.body1} ${footer.customLink}`}>
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={`${footer.body1} ${footer.customLink}`}>
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={`${footer.body1} ${footer.customLink}`}>
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
              <Link href={"/termsOfUse"} className={footer.customLink} style={{ color: "#002458" }}>Terms of Service</Link>
              <span className={footer.visibility}>|</span>
              <Link href={"/privacyPolicy"} className={footer.customLink} style={{ color: "#002458" }}>Privacy Policy</Link>
            </div>

            <div className={footer.middleLower}>
              <Image src="/logo.png" loading="lazy" width={200.73} height={60} alt="Logo" />
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
