import ProductDetails from "@/components/ui/product/ProductDetails";

type PageProps = {
    params: Promise<{
        categorySlug: string;
        subCategorySlug: string;
        slug: string;
    }>;
};

export default async function Page({ params }: PageProps) {
    const { slug } = await params;

    return <ProductDetails slug={slug} />;
}