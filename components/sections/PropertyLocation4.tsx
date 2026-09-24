// "use client";
// import Link from "next/link";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "@/styles/custom.css";
// const swiperOptions = {
//   modules: [Autoplay, Pagination, Navigation],
//   slidesPerView: 3,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 25000,
//     disableOnInteraction: false,
//   },
//   loop: true,

//   // Navigation
//   navigation: {
//     nextEl: ".h1n",
//     prevEl: ".h1p",
//   },

//   // Pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 30,
//     },
//     575: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     991: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     1199: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//     1350: {
//       slidesPerView: 5,
//       spaceBetween: 30,
//     },
//   },
// };

// const services = [
//   {
//     id: 1,
//     title: "Cement",
//     image: "/assets/img/all-images/products/1.jpeg",
//     link: "/property-details-v1",
//   },
//   {
//     id: 2,
//     title: "Steel",
//     image: "/assets/img/all-images/products/2.jpeg",
//     link: "/property-details-v1",
//   },
//   {
//     id: 3,
//     title: "Electrical",
//     image: "/assets/img/all-images/products/3.jpeg",
//     link: "/property-details-v1",
//   },
//   {
//     id: 4,
//     title: "Plumbing",
//     image: "/assets/img/all-images/products/4.jpeg",
//     link: "/property-details-v1",
//   },
//   {
//     id: 5,
//     title: "Cranes",
//     image: "/assets/img/all-images/products/8.jpeg",
//     link: "/property-details-v1",
//   },
//   {
//     id: 6,
//     title: "Mixers",
//     image: "/assets/img/all-images/products/7.jpeg",
//     link: "/property-details-v1",
//   },
//   {
//     id: 7,
//     title: "Excavators",
//     image: "/assets/img/all-images/products/5.jpeg",
//     link: "/property-details-v1",
//   },
// ];

// export default function PropertyLocation4() {
//   return (
//     <>
//       <div className="property-loaction3-section sp2">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 m-auto">
//               <div className="project-heading heading1 space-margin60 text-center">
//                 <h5>Products</h5>
//                 <div className="space20" />
//                 <h2 className="text-anime-style-3">Our Featured Products</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <Swiper
//               {...swiperOptions}
//               className="loaction-slider-property owl-carousel"
//             >
//               {services.map((service) => (
//                 <SwiperSlide className="propety-loaction" key={service.id}>
//                   <div className="img1" style={{ backgroundColor: "red" }}>
//                     <img
//                       src={service.image}
//                       alt="housebox"
//                       className="service-img"
//                     />
//                   </div>
//                   <div className="content-area">
//                     <Link href="/property-details-v1">{service.title}</Link>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "@/styles/custom.css";
import { usePublicProductsStore } from "@/stores/usePublicProductsStore";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 25000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 30 },
    575: { slidesPerView: 2, spaceBetween: 30 },
    767: { slidesPerView: 2, spaceBetween: 30 },
    991: { slidesPerView: 3, spaceBetween: 30 },
    1199: { slidesPerView: 4, spaceBetween: 30 },
    1350: { slidesPerView: 5, spaceBetween: 30 },
  },
};

export default function PropertyLocation4() {
  const { products, loading, fetchPublicProducts } = usePublicProductsStore();

  useEffect(() => {
    fetchPublicProducts(12);
  }, [fetchPublicProducts]);

  return (
    <div className="property-loaction3-section sp2" style={{ zIndex:"0"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="project-heading heading1 space-margin60 text-center">
              <h5>Products</h5>
              <div className="space20" />
              <h2 className="text-anime-style-3">Our Featured Products</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div className="col-lg-2 col-md-4 col-6 mb-4" key={index}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "10px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  }}
                >
                  <Skeleton height={180} borderRadius={14} />
                  <div style={{ padding: "12px 4px", textAlign: "center" }}>
                    <Skeleton width="70%" height={18} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Swiper
              {...swiperOptions}
              className="loaction-slider-property owl-carousel"
            >
              {products.map((product) => {
                const title = product.title;

                const productUrl = `/products/${product.category?.slug || "category"
                  }/${product.subCategory?.slug || "general"}/${product.slug}`;

                return (
                  <SwiperSlide className="propety-loaction" key={product.id}>
                    <Link href={productUrl}>
                      <div className="img1">
                        <img
                          src={
                            product.imageUrl ||
                            "/assets/img/all-images/products/1.jpeg"
                          }
                          alt={title}
                          className="service-img"
                        />
                      </div>
                    </Link>

                    <div className="content-area">
                      <Link
                        href={productUrl}
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineHeight: "22px",
                          minHeight: "44px",
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#08171f",
                          textDecoration: "none",
                        }}
                      >
                        {title}
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}