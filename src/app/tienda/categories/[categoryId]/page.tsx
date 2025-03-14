import { getProducts } from "@/lib/getProducts";
import CardsHome from "@/components/CardsHome";

export default async function PageCategoryID({
    params,
}: { params: { categoryId?: string } }) {

    const categoryId = params;
    const { products } = await getProducts({ categoryId });

    return (
        <>
            {products.length > 0 ? (
                <CardsHome name={products.name} />
            ) : (
                <div>No hay productos disponibles.</div>
            )}
        </>
    );
}
