import cnt from "./Article.module.css";
import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Lato } from "next/font/google";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});

const latoBody = Lato({
  weight: "400",
  subsets: ["latin"],
});

const url = `${process.env.BASE_URL}/spaces/${process.env.SPACES}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}`;
console.log(url);

const Article = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("data::::::::: ", data);

  return (
    <>
      <div className={cnt.container}>
        <div className={cnt.upperContainer}>
          <h2 className={`${latoHeading.className} ${cnt.heading2}`}>
            Latest Articles
          </h2>
        </div>
        <div className={cnt.lowerContainer}>

          {data.items.map((info, index) => {
            const image = data.includes.Asset.find((asset)=>(asset.sys.id===info.fields.images.sys.id));
            // console.log("image::", image.fields.file.url);
            // image.fields.file.url
            return (
              <section className={cnt.content} key={index}>
                <img
                  src={`http:${image.fields.file.url}`}
                  alt="article-img"
                  className={cnt.image}
                />
                <div className={cnt.description}>
                  <div className={`${latoHeading.className} ${cnt.heading5}`}>
                    {info.fields.title}
                  </div>
                  <div className={`${latoBody.className} ${cnt.body1}`}>
                    {documentToReactComponents(info.fields.body)}
                  </div>
                  <Link href={"#"}>Read More </Link>
                </div>
              </section>
            );
          })}

          {/* First article */}
          {/* <section className={cnt.content}>
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
          </section> */}

          {/* Second article */}
          {/* <section className={cnt.content}>
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
          </section> */}

          {/* Third article */}
          {/* <section className={cnt.content}>
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
          </section> */}
        </div>
        <button className={`${latoHeading.className} ${cnt.btn}`}>
          View all
        </button>
      </div>
    </>
  );
};

export default Article;
