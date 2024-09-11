import cnt from "./Article.module.css";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

const Article = async ({ headline, limit }) => {
  const response = await fetch(url);
  const data = await response.json();
  const dataToShow = limit ? data.items.slice(0, limit) : data.items;
  const itemsPerPage = 9;
  const pageCount =
    dataToShow.length % itemsPerPage === 0
      ? dataToShow.length / itemsPerPage 
      : Math.ceil(dataToShow.length / itemsPerPage);
  const pages = [...Array(pageCount).keys()];
  console.log("data::::::::: ", pageCount);

  return (
    <>
      <div className={cnt.container}>
        <div className={cnt.upperContainer}>
          <h2 className={`${latoHeading.className} ${cnt.heading2}`}>
            {headline}
          </h2>
        </div>
        <div className={cnt.lowerContainer}>
          {dataToShow.map((info, index) => {
            const image = data.includes.Asset.find(
              (asset) => asset.sys.id === info.fields.images.sys.id
            );
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
        </div>

        {limit ? (
          <button className={`${latoHeading.className} ${cnt.btn}`}>
            View all
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <div className={cnt.pagination}>
              <div className={`${latoBody.className} ${cnt.body1}`}>Prev</div>
              {pages.map((num,index)=>{
                return(
                  <span className={cnt.page}>{num+1}</span>

                )
              })}
              
              {/* <span className={cnt.page}>1</span>
              <span className={cnt.page}>2</span>
              <span className={cnt.page}>3</span> */}
              <div
                className={`${latoBody.className} ${cnt.body1}`}
                style={{ color: "#252628" }}
              >
                Next
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Article;