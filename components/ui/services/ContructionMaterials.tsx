"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePublicProductsStore } from "@/stores/usePublicProductsStore";
import Skeleton, {
    SkeletonTheme,
} from "react-loading-skeleton"; import "react-loading-skeleton/dist/skeleton.css";
import "@/styles/public/services/constructsionMetrial.css"

export default function ContructionMaterials() {
    const products = usePublicProductsStore((state) => state.products);
    const loading = usePublicProductsStore((state) => state.loading);
    const error = usePublicProductsStore((state) => state.error);
    const fetchPublicProducts = usePublicProductsStore(
        (state) => state.fetchPublicProducts,
    );
    const pagination = usePublicProductsStore((state) => state.pagination);
    const setPage = usePublicProductsStore((state) => state.setPage);

    useEffect(() => {
        fetchPublicProducts();
    }, [fetchPublicProducts]);




    return (
        <div
            style={{
                backgroundImage: "url('/assets/img/all-images/bg/bg1.png')",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "70px 0",
            }}
        >
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-12 text-center">
                        <h2
                            style={{
                                fontSize: "38px",
                                fontWeight: 800,
                                color: "#08171f",
                                marginBottom: "10px",
                            }}
                        >
                            Construction Products
                        </h2>

                        <p
                            style={{
                                color: "#5c727d",
                                fontSize: "16px",
                                maxWidth: "650px",
                                margin: "0 auto",
                            }}
                        >
                            Find verified construction materials, equipment, and services from
                            trusted suppliers.
                        </p>
                    </div>
                </div>

                {loading ? (
                    <SkeletonTheme
                        baseColor="#edf3f2"
                        highlightColor="#f9fbfb"
                    >
                        <div className="row">
                            {[...Array(8)].map((_, index) => (
                                <div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={index}>
                                    <div
                                        style={{
                                            background: "#fff",
                                            borderRadius: "18px",
                                            overflow: "hidden",
                                            border: "1px solid #edf0ef",
                                            boxShadow: "0 12px 30px rgba(8,23,31,0.08)",
                                            height: "100%",
                                        }}
                                    >
                                        {/* Image */}
                                        <Skeleton
                                            height={170}
                                            borderRadius="18px 18px 0 0"
                                            baseColor="#edf3f2"
                                            highlightColor="#ffffff"
                                        />

                                        <div style={{ padding: "14px" }}>
                                            {/* Category Badge */}
                                            <Skeleton
                                                width={90}
                                                height={24}
                                                borderRadius={30}
                                            />

                                            {/* Title */}
                                            <div style={{ marginTop: "12px" }}>
                                                <Skeleton height={22} width="95%" />
                                                <Skeleton height={22} width="70%" />
                                            </div>


                                            {/* Button */}
                                            <div style={{ marginTop: "18px" }}>
                                                <Skeleton
                                                    height={44}
                                                    borderRadius={10}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SkeletonTheme>
                ) : error ? (
                    <div className="text-center py-5 text-danger">{error}</div>
                ) : products.length === 0 ? (
                    <div className="text-center py-5">No products found.</div>
                ) : (
                    <>
                        <div className="row">
                            {products.map((item) => {
                                const productUrl = `/products/${item.category?.slug || "category"}/${item.subCategory?.slug || "general"}/${item.slug}`;

                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={item.id}>
                                        <div
                                            className="product-small-card"
                                            style={{
                                                background: "#fff",
                                                borderRadius: "18px",
                                                overflow: "hidden",
                                                border: "1px solid rgba(0,67,63,0.10)",
                                                boxShadow: "0 14px 34px rgba(8,23,31,0.09)",
                                                height: "100%",
                                                transition: "all 0.35s ease",
                                                position: "relative",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = "translateY(-6px)";
                                                e.currentTarget.style.boxShadow =
                                                    "0 22px 45px rgba(8,23,31,0.14)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow =
                                                    "0 14px 34px rgba(8,23,31,0.09)";
                                            }}
                                        >
                                            <Link href={productUrl}>
                                                <div
                                                    style={{
                                                        height: "180px",
                                                        background: "#f5f8f7",
                                                        overflow: "hidden",
                                                        position: "relative",
                                                    }}
                                                >
                                                    <img
                                                        src={item.imageUrl || "/assets/img/all-images/products/1.jpeg"}
                                                        alt={item.title}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                            transition: "0.45s ease",
                                                        }}
                                                    />

                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            inset: 0,
                                                            background:
                                                                "linear-gradient(180deg, rgba(0,0,0,0.02) 45%, rgba(0,0,0,0.45) 100%)",
                                                        }}
                                                    />

                                                    <span
                                                        style={{
                                                            position: "absolute",
                                                            top: "12px",
                                                            left: "12px",
                                                            fontSize: "11px",
                                                            fontWeight: 800,
                                                            color: "#00433f",
                                                            background: "#ffffff",
                                                            padding: "6px 11px",
                                                            borderRadius: "30px",
                                                            boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
                                                        }}
                                                    >
                                                        {item.category?.name || "Product"}
                                                    </span>
                                                </div>
                                            </Link>

                                            <div style={{ padding: "16px" }}>
                                                <h3
                                                    style={{
                                                        fontSize: "17px",
                                                        fontWeight: 900,
                                                        lineHeight: "23px",
                                                        marginBottom: "10px",
                                                        minHeight: "46px",
                                                    }}
                                                >
                                                    <Link
                                                        href={productUrl}
                                                        style={{
                                                            color: "#08171f",
                                                            textDecoration: "none",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </h3>

                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        gap: "10px",
                                                        marginTop: "16px",
                                                    }}
                                                >
                                                    <Link
                                                        href={productUrl}
                                                        style={{
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "8px",
                                                            background: "#00433f",
                                                            color: "#fff",
                                                            padding: "8px 8px 8px 14px",
                                                            borderRadius: "50px",
                                                            textDecoration: "none",
                                                            fontSize: "11px",
                                                            fontWeight: 700,
                                                            boxShadow: "0 8px 20px rgba(0,67,63,0.15)",
                                                        }}
                                                    >
                                                        View Product

                                                        <span
                                                            style={{
                                                                width: "26px",
                                                                height: "26px",
                                                                borderRadius: "50%",
                                                                background: "#d4d529",
                                                                color: "#08171f",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontWeight: 900,
                                                                fontSize: "13px",
                                                            }}
                                                        >
                                                            →
                                                        </span>
                                                    </Link>

                                                    <div
                                                        style={{
                                                            background: "#fffdf0",
                                                            borderRadius: "12px",
                                                            padding: "8px 12px",
                                                            textAlign: "right",
                                                            minWidth: "90px",
                                                        }}
                                                    >


                                                        <div
                                                            style={{
                                                                fontSize: "11px",
                                                                fontWeight: 900,
                                                                color: "#00433f",
                                                            }}
                                                        >
                                                            ₹{item.price || "--"}
                                                            <span
                                                                style={{
                                                                    fontSize: "11px",
                                                                    color: "#6b7280",
                                                                    fontWeight: 600,
                                                                }}
                                                            >
                                                                /{item.unit || "Bag"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {pagination && pagination.totalPages > 1 && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "8px",
                                    marginTop: "50px",
                                }}
                            >
                                <button
                                    disabled={!pagination.hasPrev}
                                    onClick={() => setPage(pagination.page - 1)}
                                    className="pagination-btn"
                                >
                                    ←
                                </button>

                                {Array.from(
                                    {
                                        length: Math.min(5, pagination.totalPages),
                                    },
                                    (_, index) => {
                                        const pageNumber = index + 1;

                                        return (
                                            <button
                                                key={pageNumber}
                                                onClick={() => setPage(pageNumber)}
                                                className={
                                                    pagination.page === pageNumber
                                                        ? "pagination-number active"
                                                        : "pagination-number"
                                                }
                                            >
                                                {pageNumber}
                                            </button>
                                        );
                                    }
                                )}

                                {pagination.totalPages > 5 && (
                                    <>
                                        <span
                                            style={{
                                                fontWeight: 700,
                                                color: "#6b7280",
                                            }}
                                        >
                                            ...
                                        </span>

                                        <button
                                            onClick={() => setPage(pagination.totalPages)}
                                            className="pagination-number"
                                        >
                                            {pagination.totalPages}
                                        </button>
                                    </>
                                )}

                                <button
                                    disabled={!pagination.hasNext}
                                    onClick={() => setPage(pagination.page + 1)}
                                    className="pagination-btn"
                                >
                                    →
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}