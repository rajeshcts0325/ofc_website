import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Cta1 from "@/components/sections/Cta1";
import Hero2 from "@/components/sections/Hero2";
import Items1 from "@/components/sections/Items1";
import Others1 from "@/components/sections/Others1";
import Project1 from "@/components/sections/Project1";
import Properties1 from "@/components/sections/Properties1";
import PropertyLocation1 from "@/components/sections/PropertyLocation1";
import PropertyLocation4 from "@/components/sections/PropertyLocation4";
import Team1 from "@/components/sections/Team1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Cta from "@/components/ui/cta/Cta";
import CoreServices from "@/components/ui/home/CoreServices";
import CtaHome from "@/components/ui/home/CtaHome";
import HomeCategory from "@/components/ui/category/HomeCategory"
import EquipmentRental from "@/components/ui/services/EquipmentRental";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Hero2 />
        <Others1 />
        <HomeCategory />
        {/* <About1 /> */}
        <EquipmentRental/>
        <CoreServices />
        {/* <Properties1 /> */}
        <Items1 />
        <PropertyLocation4 />
        <CtaHome />
        <Testimonial1 />
        <Project1 />
        <Cta />
      </Layout>
    </>
  );
}
