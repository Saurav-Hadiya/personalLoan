import nav from "./Navbar.module.css";
import Link from "next/link";
import { Lato } from "next/font/google";
import { IoMdMenu, IoIosClose } from "react-icons/io";
import Image from 'next/image';

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className={nav.navbar}>
      {/* Navbar-Box */}
      <div className={nav.navBox}>
        <div className={nav.imgBox}>
          <a href="/">
            <Image src="/logo.png" loading="lazy" width={200.73} height={60} alt="Logo" />
          </a>
        </div>

        {/* Right side- navigation */}
        <input
          type="checkbox"
          id="menuCheckbox"
          className={nav.menuCheckbox}
        />
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
        </div >

        <label htmlFor="menuCheckbox" className={nav.closeIcon}>
          <IoIosClose />
        </label>
        <label htmlFor="menuCheckbox" className={nav.menuIcon}>
          <IoMdMenu />

        </label>
      </div>
    </div >
  );
};

export default Navbar;
