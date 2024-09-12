"use client";
import cnt from "./Article.module.css";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Lato } from "next/font/google";
import slugify from "slugify";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
});

const latoBody = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Article = ({ headline, limit, data }) => {
  const totalData = limit ? data?.items.slice(0, limit) : data.items;

  const itemsPerPage = 9;
  const totalPages =
    totalData.length % itemsPerPage === 0
      ? totalData.length / itemsPerPage
      : Math.ceil(totalData.length / itemsPerPage);
  const [pageNumber, setPageNumber] = useState(1);
  const startIndex = itemsPerPage * pageNumber - itemsPerPage;
  const endIndex = itemsPerPage * pageNumber;
  const router = useRouter();
  const navigateToPage = (arg) => {
    router.push(`/${arg}`);
  };

  const dataToShow = totalData.slice(startIndex, endIndex);
  console.log("dataToShow:: ", dataToShow);

  const pages = [...Array(totalPages).keys()];

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
            const slug = slugify(info.fields.title,{lower:true});
            return (
              <section className={cnt.content} key={index} >
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
                  <Link href={`articles/${slug}`}>Read More</Link>
                </div>
              </section>
            );
          })}
        </div>

        {limit ? (
          <button
            className={`${latoHeading.className} ${cnt.btn}`}
            onClick={()=>navigateToPage("articles")}
          >
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
              {pageNumber === 1 ? undefined : (
                <div
                  className={`${latoBody.className} ${cnt.body1} ${
                    totalPages === 1 ? cnt.visibility : undefined
                  }`}
                  style={{ color: "#252628", cursor: "pointer" }}
                  onClick={() => setPageNumber(pageNumber - 1)}
                >
                  Prev
                </div>
              )}
              {/* {pages.map((num, index) => {
                return (
                  <span
                    key={index}
                    className={cnt.page}
                    style={
                      pageNumber === num + 1
                        ? { backgroundColor: "#0056D2", color: "#FFFFFF" }
                        : undefined
                    }
                    onClick={() => setPageNumber(num + 1)}
                  >
                    {totalPages > 5
                      ? index >= 3
                        ? index === 3
                          ? "..."
                          : totalPages
                        : num + 1
                      : num + 1}
                  </span>
                );
              })} */}
              {pages.map((num, index) => {
                return (
                  <span
                    key={index}
                    className={cnt.page}
                    style={
                      pageNumber === num + 1
                        ? { backgroundColor: "#0056D2", color: "#FFFFFF" }
                        : undefined
                    }
                    onClick={() => setPageNumber(num + 1)}
                  >
                    {num + 1}
                  </span>
                );
              })}

              {pageNumber === totalPages ? undefined : (
                <div
                  className={`${latoBody.className} ${cnt.body1} ${
                    totalPages === 1 ? cnt.visibility : undefined
                  }`}
                  style={{ color: "#252628", cursor: "pointer" }}
                  onClick={() => setPageNumber(pageNumber + 1)}
                >
                  Next
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Article;
