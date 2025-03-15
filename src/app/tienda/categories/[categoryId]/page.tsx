import CardsHome from "@/components/CardsHome";
import { getProducts } from "@/lib/getProducts";

export default async function PageCategory({ params }: { params: { categoryId: string } }) {

    const { categoryId } = params;
    const { products, pagination } = await getProducts({ categoryId });



    return (
        <>
            <div>
                <div>hola</div>
                {products.length === 0 ? (
                    <p>Está vacío</p>
                ) : (
                    products.map((product: any) => (
                        <CardsHome key={product.slug} name={product.name} image={product.image} price={product.price} />
                    ))
                )}
            </div>
        </>
    );
}    
