import nav from "./Navbar.module.css";
import Link from "next/link";
import { Lato } from "next/font/google";
<<<<<<< HEAD
import { IoMdMenu, IoIosClose} from "react-icons/io";
import Image from 'next/image';

=======
import { IoMdMenu, IoIosClose } from "react-icons/io";
import Image from "next/image";
>>>>>>> f4ecf75f5eda00ed36a9686e31c4700ee29f78db

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
<<<<<<< HEAD
              {/* <img src="/logo.png" alt="Logo" /> */}
              <Image src="/logo.png" alt="Logo" width={200.73} height={60} />

=======
            <Image src="/logo.png" loading="lazy" width={200.73} height={60} alt="Logo"/>
>>>>>>> f4ecf75f5eda00ed36a9686e31c4700ee29f78db
            </a>
          </div>

          {/* Right side- navigation */}
          <input
            type="checkbox"
            id="menuCheckbox"
            className={nav.menuCheckbox}
          />
          <div className={nav.rightNavBox}>
<<<<<<< HEAD
=======


>>>>>>> f4ecf75f5eda00ed36a9686e31c4700ee29f78db
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
<<<<<<< HEAD

          <label htmlFor="menuCheckbox" className={nav.closeIcon}>
            <IoIosClose  />
          </label>
          <label htmlFor="menuCheckbox" className={nav.menuIcon}>
            <IoMdMenu  />
=======
          <label htmlFor="menuCheckbox" className={nav.closeIcon} >
            <IoIosClose />
          </label>
          <label htmlFor="menuCheckbox" className={nav.menuIcon}>
            <IoMdMenu />
>>>>>>> f4ecf75f5eda00ed36a9686e31c4700ee29f78db
          </label>
        </div>
      </div>
  );
};

export default Navbar;
