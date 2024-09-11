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
          {/* Left side- logo */}
          {/* <div className={nav.imgBox}>
            <Image
              src={"/logo.png"}
              // layout="fill"
              layout="responsive"
              width={100}
              height={100}
              alt="Logo"
              fill
            />
          </div> */}

          {/* <div>
            <Image
              src={"/logo.png"}
              alt="Description"
              layout="responsive"
              width={218.73}
              height={60}
            />
          </div> */}
          <div className={nav.imgBox}>
            <a href="/">
              <img src="./logo.png" alt="Logo" />
            </a>
          </div>

          {/* Right side- navigation */}
          <div className={nav.rightNavBox}>
            <ul className={`${lato.className} ${nav.navigation}`}>
              <li>
                <Link href={"#"} className={nav.body1}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href={"/articles"} className={nav.body1}>
                  Articles
                </Link>
              </li>
              <li>
                <Link href={"#"} className={nav.body1}>
                  How it works
                </Link>
              </li>
              <li>
                <Link href={"#"} className={nav.body1}>
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
