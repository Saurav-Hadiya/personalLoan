import nav from "./Navbar.module.css";
import Link from "next/link";
import { Lato } from "next/font/google";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";


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
          <input type="checkbox" id='menuCheckbox' className={nav.menuCheckbox} />
          <div className={nav.rightNavBox}>
            <label htmlFor="menuCheckbox" >
              <IoIosClose className={nav.closeIcon} />
            </label>

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

          <label htmlFor="menuCheckbox" >
            <IoMdMenu className={nav.menuIcon} />
          </label>

        </div>

      </div>
    </>
  );
};

export default Navbar;