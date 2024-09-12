import post from "./page.module.css";
import Navbar from "@/app/components/Header/Navbar";
import Footer from "@/app/components/Footer/Footer";

import Link from "next/link";
import { Lato } from "next/font/google";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});
const latoSubHeading = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default async function title({ params }) {
  const { slug } = params;
  return (
    <main>
      <Navbar />
      <div
        className={`${latoSubHeading.className} ${post.subtitle4} ${post.nav}`}
      >
        Home / Articles List / {slug}
      </div>
      <article className={post.article}>
        <header className={post.title}>
          <h2 className={`${latoHeading.className} ${post.heading3}`}>
            Montes nascetur ridiculus
          </h2>
        </header>

        <section className={post.content}>
          <figure className={post.profile}>
                <div className="post.profileImage"><img src="/profileImage.png" alt="profile image"/></div>
                <div className={post.profileDetail}>
                    <h3>Rachel Green</h3>
                    <time datetime="2024-08-29T05:35:18" className={`${post.body4} ${latoSubHeading.className}`}>Last updated: August 29 2024 05:35:18.</time>
                </div>
          </figure>
        </section>
      </article>

      {/* <Footer /> */}
    </main>
  );
}
