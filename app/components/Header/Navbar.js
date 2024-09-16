import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";
import nav from "./Navbar.module.css";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <>
      <div className={nav.navbar}>
        {/* Navbar-Box */}
        <div className={nav.navBox}>
          <div className={nav.imgBox}>
            <a href="/">
              <img src="/logo.png" alt="Logo" />
            </a>
          </div>

          {/* Right side- navigation */}
          <div className={nav.rightNavBox}>
            <ul className={`${lato.className} ${nav.navigation}`}>
              <li>
                <Link href={"/faqs"} className={nav.body1}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href={"/articles"} className={nav.body1}>
                  Articles
                </Link>
              </li>
              <li>
                <Link href={"/working"} className={nav.body1}>
                  How it works
                </Link>
              </li>
              <li>
                <Link href={"/aboutus"} className={nav.body1}>
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
