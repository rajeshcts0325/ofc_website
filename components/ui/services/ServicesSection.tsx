"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Cta from "../cta/Cta";
import FinanceSection from "./FinanceSection";
import InsuranceSection from "./InsuranceSection";
import EquipmentRental from "./EquipmentRental";
import CtaHome from "../home/CtaHome";
import ContructionMaterials from "./ContructionMaterials";

export default function ServicesSection() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          {/*===== HERO AREA ENDS =======*/}
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
                      Home{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                      </svg>{" "}
                      Our Services{" "}
                    </Link>
                    <div className="space24" />
                    <h1>Our Services </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== HERO AREA ENDS =======*/}
          <ContructionMaterials />
          <EquipmentRental />
          <InsuranceSection />
          <CtaHome />
          <FinanceSection />
          <Cta />
        </div>
      </Layout>
    </>
  );
}
