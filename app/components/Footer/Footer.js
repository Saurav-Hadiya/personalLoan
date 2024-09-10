import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

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
            <div className={footer.rightUpper}></div>
          </div>
          <hr />
          <div className={footer.upperBox}></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
