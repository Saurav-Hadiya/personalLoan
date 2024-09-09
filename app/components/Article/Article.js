import cnt from "./Article.module.css";
import Link from "next/link";
import { Lato } from "next/font/google";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});

const latoBody = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Article = () => {
  return (
    <>
      <div className={cnt.container}>
        <div className={cnt.upperContainer}>
          <h2 className={`${latoHeading.className} ${cnt.heading2}`}>
            Latest Articles
          </h2>
        </div>
        <div className={cnt.lowerContainer}>
          {/* First article */}
          <section className={cnt.content}>
            <img
              src="./article-1.png"
              alt="article-img"
              className={cnt.image}
            />
            <div className={cnt.description}>
              <p className={`${latoHeading.className} ${cnt.heading5}`}>
                Montes nascetur ridiculus
              </p>
              <p className={`${latoBody.className} ${cnt.body1}`}>
                Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.
                Morbi in orci risus. Donec pretium.
              </p>
              <Link href={"#"}>Read More </Link>
            </div>
          </section>

          {/* Second article */}
          <section className={cnt.content}>
            <img
              src="./article-2.png"
              alt="article-img"
              className={cnt.image}
            />
            <div className={cnt.description}>
              <p className={`${latoHeading.className} ${cnt.heading5}`}>
                Montes nascetur ridiculus
              </p>
              <p className={`${latoBody.className} ${cnt.body1}`}>
                Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.
                Morbi in orci risus. Donec pretium.
              </p>
              <Link href={"#"}>Read More </Link>
            </div>
          </section>
      
          {/* Third article */}
          <section className={cnt.content}>
            <img
              src="./article-3.png"
              alt="article-img"
              className={cnt.image}
            />
            <div className={cnt.description}>
              <p className={`${latoHeading.className} ${cnt.heading5}`}>
                Montes nascetur ridiculus
              </p>
              <p className={`${latoBody.className} ${cnt.body1}`}>
                Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.
                Morbi in orci risus. Donec pretium.
              </p>
              <Link href={"#"}>Read More </Link>
            </div>
          </section>
        </div>
        <button className={`${latoHeading.className} ${cnt.btn}`}>
          View all
        </button>
      </div>
    </>
  );
};

export default Article;
