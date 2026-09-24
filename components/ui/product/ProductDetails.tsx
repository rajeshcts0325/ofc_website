"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/styles/product-details.css";
import { usePublicProductsStore } from "@/stores/usePublicProductsStore";
import Skeleton from "react-loading-skeleton";
import "@/styles/public/products/products.public.css"
import "react-loading-skeleton/dist/skeleton.css";

import {
    FileText,
    Tags,
    Layers,
    PackageCheck,
    MapPin,
    BadgeCheck,
    Building2,
    ShieldCheck,
    Tag,
    UserRound,
} from "lucide-react";
import { Button } from "bootstrap";


type Product = {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    unit: string;
    stock: number;
    brand?: string;
    productModel?: string;
    imageUrl?: string;
    status: string;
    category?: {
        name: string;
        slug: string;
    } | null;
    subCategory?: {
        name: string;
        slug: string;
    } | null;
    user?: {
        email: string;
        role: string;
    } | null;
    company?: {
        name: string;
        category: string;
    } | null;
    state?: {
        name: string;
        slug: string;
    } | null;
    city?: {
        name: string;
        slug: string;
    } | null;
};

export default function ProductDetails({ slug }: { slug: string }) {
    const product = usePublicProductsStore((state) => state.productDetails);
    const loading = usePublicProductsStore((state) => state.detailsLoading);
    const error = usePublicProductsStore((state) => state.error);
    const fetchPublicProductDetails = usePublicProductsStore(
        (state) => state.fetchPublicProductDetails
    );

    const fallbackImage = "/assets/img/all-images/products/5.jpeg";

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        fetchPublicProductDetails(slug);
    }, [slug, fetchPublicProductDetails]);

    useEffect(() => {
        if (product?.imageUrl) {
            setSelectedImage(product.imageUrl);
        } else {
            setSelectedImage(fallbackImage);
        }
    }, [product]);

    if (loading) {
        return (
            <Layout headerStyle={1} footerStyle={1}>
                <div
                    style={{
                        background: "#fff",
                        paddingTop: "90px",
                        paddingBottom: "70px",
                    }}
                >
                    <div className="container">
                        <div className="row g-4 align-items-start " style={{ marginTop: "100px" }}>
                            <div className="col-lg-8">
                                <div
                                    style={{
                                        background: "#f4f6f5",
                                        borderRadius: "18px",
                                        padding: "38px",
                                    }}
                                >
                                    <Skeleton height={470} borderRadius={14} />

                                    <div className="d-flex gap-3 mt-4">
                                        <Skeleton width={90} height={70} borderRadius={10} />
                                        <Skeleton width={90} height={70} borderRadius={10} />
                                        <Skeleton width={90} height={70} borderRadius={10} />
                                    </div>
                                </div>

                                <div
                                    style={{
                                        marginTop: "30px",
                                        background: "#fff",
                                        border: "1px solid #edf0ef",
                                        borderRadius: "18px",
                                        padding: "28px",
                                        boxShadow: "0 12px 35px rgba(8,23,31,0.06)",
                                    }}
                                >
                                    <Skeleton height={34} width="70%" />
                                    <Skeleton height={22} width={160} className="mt-3" />

                                    <div className="mt-4">
                                        <Skeleton count={5} height={18} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div
                                    style={{
                                        background: "#f2f3f3",
                                        borderRadius: "18px",
                                        padding: "30px",
                                        position: "sticky",
                                        top: "110px",
                                    }}
                                >
                                    <Skeleton height={34} width="60%" />

                                    <div className="d-flex align-items-center gap-3 mt-4">
                                        <Skeleton circle width={82} height={82} />
                                        <div style={{ flex: 1 }}>
                                            <Skeleton height={24} width="80%" />
                                            <Skeleton height={18} width="95%" className="mt-2" />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <Skeleton height={58} borderRadius={10} />
                                        <Skeleton height={58} borderRadius={10} className="mt-3" />
                                        <Skeleton height={58} borderRadius={10} className="mt-3" />
                                        <Skeleton height={120} borderRadius={10} className="mt-3" />
                                        <Skeleton height={54} borderRadius={12} className="mt-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout headerStyle={1} footerStyle={1}>
                <div className="container py-5 text-danger">{error}</div>
            </Layout>
        );
    }

    if (!product) {
        return (
            <Layout headerStyle={1} footerStyle={1}>
                <div className="container py-5">Product not found.</div>
            </Layout>
        );
    }

    const productImages = [
        product.imageUrl || fallbackImage,
    ];
    const locationText =
        product.city?.name && product.state?.name
            ? `${product.city.name}, ${product.state.name}`
            : "Location not available";

    return (
        <Layout headerStyle={1} footerStyle={1}>
            <div>
                <div className="hero-inner-section-area-sidebar">
                    <img
                        src="/assets/img/all-images/hero/hero-img1.png"
                        alt="housebox"
                        className="hero-img1"
                    />

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hero-header-area text-center">
                                    <Link href="/">
                                        Home → {product.category?.name || "Products"} →{" "}
                                        {product.subCategory?.name || "General"} → Product Details
                                    </Link>

                                    <div className="space24" />
                                    <h1>{product.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="properties-details4-area sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="details-siderbar">
                                            <div className="content-area">
                                                <div className="product-gallery">
                                                    <div className="main-image">
                                                        <img
                                                            src={selectedImage || fallbackImage}
                                                            alt={product.title}
                                                        />
                                                    </div>

                                                    <div className="thumbnail-wrapper">
                                                        {productImages.map((img, index) => (
                                                            <div
                                                                key={index}
                                                                className={`thumbnail-box ${selectedImage === img ? "active-thumb" : ""
                                                                    }`}
                                                                onClick={() => setSelectedImage(img)}
                                                            >
                                                                <img src={img} alt={product.title} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="space24" />
                                                <div className="product-hero-header">
                                                    <div className="product-main-info">
                                                        <h3>{product.title}</h3>
                                                    </div>

                                                    <div className="product-price-box">
                                                        <div className="price">
                                                            ₹{product.price}
                                                        </div>
                                                        <div className="unit">
                                                            / {product.unit}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-area">
                                                    <div className="list">
                                                        <div className="product-info-card">
                                                            <div className="product-info-title">
                                                                <FileText size={20} />
                                                                <h4>Description</h4>
                                                            </div>

                                                            <p className="product-description">
                                                                {product.description || "No description available."}
                                                            </p>
                                                        </div>

                                                        <div className="space24" />

                                                        <div className="product-info-grid">
                                                            <div className="product-info-item">
                                                                <Tags size={20} />
                                                                <div>
                                                                    <span>Category</span>
                                                                    <strong>{product.category?.name || "N/A"}</strong>
                                                                </div>
                                                            </div>

                                                            <div className="product-info-item">
                                                                <Layers size={20} />
                                                                <div>
                                                                    <span>Sub Category</span>
                                                                    <strong>{product.subCategory?.name || "N/A"}</strong>
                                                                </div>
                                                            </div>

                                                            <div className="product-info-item">
                                                                <PackageCheck size={20} />
                                                                <div>
                                                                    <span>Stock</span>
                                                                    <strong>
                                                                        {product.stock || 0} {product.unit || ""}
                                                                    </strong>
                                                                </div>
                                                            </div>

                                                            <div className="product-info-item">
                                                                <MapPin size={20} />
                                                                <div>
                                                                    <span>Location</span>
                                                                    <strong>{locationText}</strong>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space32" />
                                            <div className="bg1 product-meta-section">
                                                <div className="product-meta-header">
                                                    <div>
                                                        <span className="product-meta-subtitle">Verified Details</span>
                                                        <h3>Product Information</h3>
                                                    </div>

                                                    <span className="product-status-badge">
                                                        <BadgeCheck size={16} />
                                                        {product.status === "ACTIVE" ? "Active" : product.status}
                                                    </span>
                                                </div>

                                                <div className="space24" />

                                                <div className="product-meta-grid">
                                                    <div className="product-meta-card">
                                                        <div className="product-meta-icon">
                                                            <Tag size={22} />
                                                        </div>

                                                        <div>
                                                            <span>Brand</span>
                                                            <h4>{product.brand || "Not specified"}</h4>
                                                        </div>
                                                    </div>

                                                    <div className="product-meta-card">
                                                        <div className="product-meta-icon">
                                                            <ShieldCheck size={22} />
                                                        </div>

                                                        <div>
                                                            <span>Availability</span>
                                                            <h4>
                                                                {product.stock && product.stock > 0
                                                                    ? `In Stock - ${product.stock} ${product.unit || ""}`
                                                                    : "Out of Stock"}
                                                            </h4>
                                                        </div>
                                                    </div>

                                                    <div className="product-meta-card">
                                                        <div className="product-meta-icon">
                                                            <Building2 size={22} />
                                                        </div>

                                                        <div>
                                                            <span>Seller Company</span>
                                                            <h4>{product.company?.name || "N/A"}</h4>
                                                        </div>
                                                    </div>

                                                    <div className="product-meta-card">
                                                        <div className="product-meta-icon">
                                                            <UserRound size={22} />
                                                        </div>

                                                        <div>
                                                            <span>Seller Role</span>
                                                            <h4>{product.user?.role || "N/A"}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space60" />
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="all-side-details">
                                            <div className="details-siderbar2">
                                                <h4>Contact Seller</h4>

                                                <div className="space24" />

                                                <div className="personal-info">
                                                    <div className="img1">
                                                        <img
                                                            src="/assets/img/all-images/blog/blog-img17.png"
                                                            alt="seller"
                                                        />
                                                    </div>

                                                    <div className="content">
                                                        <Link href="#">
                                                            {product.company?.name || "Seller"}
                                                        </Link>

                                                        <Link href={`mailto:${product.user?.email || ""}`}>
                                                            {product.user?.email || "Email not available"}
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="space10" />

                                                <div className="input-area">
                                                    <input type="text" placeholder="Full Name" />
                                                </div>

                                                <div className="input-area">
                                                    <input type="number" placeholder="Phone Number" />
                                                </div>

                                                <div className="input-area">
                                                    <input type="email" placeholder="Email Address" />
                                                </div>

                                                <div className="input-area">
                                                    <textarea
                                                        rows={2}
                                                        placeholder={`I am interested in ${product.title}`}
                                                    />
                                                </div>

                                                <div className="input-area">
                                                    <button type="submit" className="theme-btn1">
                                                        Send Enquiry
                                                    </button>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Layout>
    );
}