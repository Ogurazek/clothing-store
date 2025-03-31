
import getProductDetail from "@/lib/getProductDetail";
import { ArrowLeftFromLine } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import CardProductDetail from "@/components/CardProductDetail";



export default async function ProductDetail({ params }: { params: { productoId: string } }) {

    const { productoId } = await params;
    const productosDetalles = await getProductDetail({ productoId });


    return (
        <>
            <article className="w-full h-auto flex flex-col items-center justify-center p-4">
                <div className="w-full h-16 flex items-center">
                    <Link href="/tienda" className="w-auto h-auto flex items-center gap-4">
                        <ArrowLeftFromLine />
                        <p className="text-[20px] font-bold ">Regresar</p>
                    </Link>
                </div>
                {
                    productosDetalles.products.map((producto: any) => (
                        <CardProductDetail
                            key={producto.slug}
                            name={producto.name}
                            price={producto.price}
                            image={producto.images[0]}
                            image2={producto.images[1]}
                            image3={producto.images[2]}
                            image4={producto.images[3]}
                            description={producto.description}
                        />
                    ))
                }
            </article>
        </>
    )
}