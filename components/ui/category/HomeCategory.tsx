"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePublicProductsStore } from "@/stores/usePublicProductsStore";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


export default function HomeCategory() {
  const { products, loading, fetchPublicProducts } = usePublicProductsStore();

  useEffect(() => {
    fetchPublicProducts(12);
  }, [fetchPublicProducts]);

  return (
    <div
      className="blog-grid-section-area sp1"
      style={{
        backgroundImage: "url(/assets/img/all-images/bg/bg1.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "-40px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="project-heading heading1 space-margin60 text-center">
              <h5>Categories</h5>
              <div className="space20" />
              <h2 className="text-anime-style-3">Featured Categories</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {loading
            ? Array.from({ length: 12 }).map((_, index) => (
              <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
                <div
                  className="blog-single-boxarea"
                  style={{
                    padding: "10px",
                    borderRadius: "12px",
                    background: "#fff",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  }}
                >
                  <Skeleton
                    height={130}
                    borderRadius={10}
                    baseColor="#eef1f5"
                    highlightColor="#f8fafc"
                  />

                  <div style={{ padding: "12px 4px 4px", textAlign: "center" }}>
                    <Skeleton
                      width="70%"
                      height={16}
                      borderRadius={8}
                      baseColor="#eef1f5"
                      highlightColor="#f8fafc"
                    />
                  </div>
                </div>
              </div>
            ))
            : products.map((product) => {
              const title =
                product.title;

              const productUrl = `/products/${product.category?.slug || "category"
                }/${product.subCategory?.slug || "general"
                }/${product.slug
                }`;

              return (
                <div className="col-6 col-md-6 col-lg-2" key={product.id}>
                  <div className="blog-single-boxarea">
                    <div className="img1 image-anime">
                      <img
                        src={
                          product.imageUrl ||
                          "/assets/img/all-images/products/1.jpeg"
                        }
                        alt={title}
                        style={{
                          width: "100%",
                          height: "140px",
                          objectFit: "cover",
                          borderRadius: "2px",
                        }}
                      />
                    </div>

                    <div
                      className="content-area"
                      style={{
                        padding: "10px 5px",
                        textAlign: "center",
                      }}
                    >
                      <Link
                        href={`${productUrl}`}
                        className="head"
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "20px",
                          display: "block",
                        }}
                      >
                        {title}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}