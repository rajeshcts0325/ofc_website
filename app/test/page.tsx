import PropertyFilter from "@/components/elements/property-filter";
import PropertyList from "@/components/elements/property-list";
import Layout from "@/components/layout/Layout";
export default function Reviews() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div className="lg:col-span-1">
          <PropertyFilter />
        </div>
        <div className="lg:col-span-3">
          <PropertyList />
        </div>
      </Layout>
    </>
  );
}
