import CardsHome from "@/components/CardsHome";
import { getProducts } from "@/lib/getProducts";
import Link from "next/link";
import { Undo2, ArrowLeftFromLine } from 'lucide-react';

export default async function PageCategory({ params }: { params: { categoryId: string } }) {

    const { categoryId } = await params;
    const { products, pagination } = await getProducts({ categoryId });

    return (
        <>
            <article className="w-[98%] h-full flex gap-1.5 mt-10 flex-wrap justify-center">


                {products.length === 0 ? (

                    <div className="w-full h-[20rem] flex flex-col items-center justify-center">
                        <h1 className="text-3xl">Por el momento, no tenemos productos en esta categoría</h1>
                        <p>por favor, intenta más tarde ✌️❤️</p>
                        <Link className="mt-8 w-auto h-auto flex gap-2 p-2 bg-[#826300] text-[#FFFFFF] rounded-[6px]" href="/tienda">Regresar a Categorías <Undo2 /></Link>
                    </div>
                ) : (
                    <>
                        <div className="w-full flex  mb-4">
                            <Link href="/tienda" className="h-auto flex items-center gap-4">
                                <ArrowLeftFromLine size={28} />
                                <p className="text-[28px] font-bold ">Regresar</p>
                            </Link>
                            <h1 className="pl-4 text-[28px] capitalize font-bold">| {categoryId}</h1>
                        </div>
                        {products.map((product: any) => (
                            <CardsHome key={product.slug} name={product.name} image={product.image} price={product.price} id={product.slug} />
                        ))}
                    </>
                )}

            </article >
        </>
    );
}    
