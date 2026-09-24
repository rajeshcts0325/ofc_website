"use client";
import PropertyFilter from "@/components/elements/property-filter";
import PropertyList from "@/components/elements/property-list";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "@/styles/sidebarFilter.css";

const swiperFade = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 0,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const products = [
  {
    image: "/assets/img/all-images/products/1.jpeg",
    title: "UltraTech Cement",
    subtitle: "Premium Grade Cement",
    price: "₹420",
    unit: "Bag",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/2.jpeg",
    title: "TMT Steel Bar",
    subtitle: "12mm",
    price: "₹66",
    unit: "Kg",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/3.jpeg",
    title: "AAC Block",
    subtitle: "600x200x100mm",
    price: "₹95",
    unit: "Piece",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/4.jpeg",
    title: "PVC Pipe",
    subtitle: "4 inch",
    price: "₹120",
    unit: "Meter",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/5.jpeg",
    title: "GI Wire",
    subtitle: "15mm",
    price: "₹80",
    unit: "Kg",
    status: "Limited Stock",
  },
  {
    image: "/assets/img/all-images/products/6.jpeg",
    title: "Electrical Wire",
    subtitle: "Finolex 1.5mm",
    price: "₹2,450",
    unit: "Roll",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/7.jpeg",
    title: "CPVC Pipe",
    subtitle: "1 inch",
    price: "₹95",
    unit: "Meter",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/8.jpeg",
    title: "Wall Putty",
    subtitle: "20 Kg",
    price: "₹650",
    unit: "Bag",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/2.jpeg",
    title: "Wall Putty",
    subtitle: "20 Kg",
    price: "₹650",
    unit: "Bag",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/4.jpeg",
    title: "PVC Pipe",
    subtitle: "4 inch",
    price: "₹120",
    unit: "Meter",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/5.jpeg",
    title: "GI Wire",
    subtitle: "15mm",
    price: "₹80",
    unit: "Kg",
    status: "Limited Stock",
  },
  {
    image: "/assets/img/all-images/products/6.jpeg",
    title: "Electrical Wire",
    subtitle: "Finolex 1.5mm",
    price: "₹2,450",
    unit: "Roll",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/7.jpeg",
    title: "CPVC Pipe",
    subtitle: "1 inch",
    price: "₹95",
    unit: "Meter",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/8.jpeg",
    title: "Wall Putty",
    subtitle: "20 Kg",
    price: "₹650",
    unit: "Bag",
    status: "In Stock",
  },
  {
    image: "/assets/img/all-images/products/2.jpeg",
    title: "Wall Putty",
    subtitle: "20 Kg",
    price: "₹650",
    unit: "Bag",
    status: "In Stock",
  },
];
export default function ContructionMaterials() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/img/all-images/bg/bg1.png')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingBottom:"50px"
        }}
      >
        {/*===== PROPERTIES AREA STARTS =======*/}
        <div className="property-inner-section-find ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="property-mapgrid-area">
                  <div className="space32 d-none d-lg-block" />
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="product-filter-sidebar">
                        {/* CATEGORY */}
                        <div className="filter-widget">
                          <h3>Categories</h3>

                          <ul className="category-list">
                            <li className="active">
                              <Link href="#">
                                <i className="fa-solid fa-border-all"></i>
                                All Categories
                              </Link>
                            </li>

                            <li>
                              <Link href="#">
                                <i className="fa-solid fa-cube"></i>
                                Cement
                              </Link>
                            </li>

                            <li>
                              <Link href="#">
                                <i className="fa-solid fa-industry"></i>
                                Steel
                              </Link>
                            </li>

                            <li>
                              <Link href="#">
                                <i className="fa-solid fa-building"></i>
                                Bricks & Blocks
                              </Link>
                            </li>

                            <li>
                              <Link href="#">
                                <i className="fa-solid fa-screwdriver-wrench"></i>
                                Hardware
                              </Link>
                            </li>

                            <li>
                              <Link href="#">
                                <i className="fa-solid fa-bolt"></i>
                                Electrical
                              </Link>
                            </li>

                            <li>
                              <Link href="#">
                                <i className="fa-solid fa-paint-roller"></i>
                                Paints
                              </Link>
                            </li>

                            <li>
                              <Link href="#">
                                <i className="fa-solid fa-helmet-safety"></i>
                                Safety Equipment
                              </Link>
                            </li>

                            <li>
                              <Link href="#">
                                <i className="fa-solid fa-layer-group"></i>
                                Others
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="row">
                        {products.map((item, index) => (
                          <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div
                              style={{
                                border: "1px solid #e5e7eb",
                                borderRadius: "12px",
                                background: "#fff",
                                overflow: "hidden",
                                transition: "0.3s",
                                height: "100%",
                              }}
                              className="property-boxarea"
                            >
                              {/* IMAGE */}
                              <div
                                style={{
                                  padding: "12px",
                                  background: "#fff",
                                }}
                              >
                                <div
                                  style={{
                                    background: "#f8fafc",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    height: "180px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "contain",
                                      transition: "0.3s",
                                    }}
                                  />
                                </div>
                              </div>

                              {/* CONTENT */}
                              <div
                                style={{
                                  padding: "0 18px 20px",
                                }}
                              >
                                {/* TITLE */}
                                <h3
                                  style={{
                                    marginBottom: "6px",
                                    lineHeight: "28px",
                                  }}
                                >
                                  <Link
                                    href="/products-details"
                                    style={{
                                      color: "#08171f",
                                      fontSize: "20px",
                                      fontWeight: "700",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {item.title}
                                  </Link>
                                </h3>

                                {/* SUBTITLE */}
                                <p
                                  style={{
                                    color: "#5c727d",
                                    fontSize: "15px",
                                    marginBottom: "14px",
                                    lineHeight: "24px",
                                  }}
                                >
                                  {item.subtitle}
                                </p>

                                {/* PRICE */}
                                <h4
                                  style={{
                                    color: "#08171f",
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    marginBottom: "14px",
                                  }}
                                >
                                  {item.price}
                                  <span
                                    style={{
                                      fontSize: "15px",
                                      color: "#5c727d",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {" "}
                                    / {item.unit}
                                  </span>
                                </h4>

                                {/* STOCK STATUS */}
                                <div
                                  style={{
                                    display: "inline-block",
                                    padding: "6px 12px",
                                    borderRadius: "6px",
                                    fontSize: "13px",
                                    fontWeight: "600",
                                    background:
                                      item.status === "In Stock"
                                        ? "#dcfce7"
                                        : "#fef3c7",
                                    color:
                                      item.status === "In Stock"
                                        ? "#166534"
                                        : "#d97706",
                                  }}
                                >
                                  {item.status}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===== PROPERTIES AREA ENDS =======*/}
      </div>
    </>
  );
}
