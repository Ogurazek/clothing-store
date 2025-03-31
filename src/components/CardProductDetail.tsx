
import Image from "next/image"


type CardProductDetailProps = {
    name: string;
    price: number;
    image: string;
    image2?: string;
    image3?: string;
    image4?: string;
    description: string;
}

export default function CardProductDetail({ name, price, image, image2, image3, image4, description }: CardProductDetailProps) {

    return (
        <>
            <article className="w-[65.125rem] h-auto flex p-4 gap-4">
                {/* Sección del carrusel de imágenes */}
                <section className="w-[20%] h-[30rem] overflow-auto flex flex-col items-center gap-[0.8rem]">
                    <Image className="w-full h-[9.4rem] object-cover" src={image2 || "./pictureOfCollection.svg"} alt="" width={400} height={400} />
                    <Image className="w-full h-[9.4rem] object-cover" src={image3 || "./pictureOfCollection.svg"} alt="" width={400} height={400} />
                    <Image className="w-full h-[9.4rem] object-cover" src={image4 || "./pictureOfCollection.svg"} alt="" width={400} height={400} />
                </section>
                {/* Sección de la imagen principal del producto */}
                <section className="w-[40%] h-[30rem] flex flex-col">
                    <Image className="w-full h-full object-cover" src={image || "./pictureOfCollection.svg"} alt="" width={400} height={400} />
                </section>
                {/* Sección del precio y descripción del producto */}
                <section className="w-[40%] h-[30rem]  flex flex-col overflow-hidden overflow-ellipsis">
                    <header className="w-full overflow-hidden">
                        <p className="text-[24px]">{name}</p>
                    </header>
                    <div className="w-full h-auto">
                        <p className="text-gray-500">{price}</p>
                    </div>
                    <div className="w-full h-[1px] bg-black mt-4 mb-4"></div>
                    <div className="w-full h-auto flex gap-8">
                        <span>Talle</span>
                        <button className="hover:font-bold cursor-pointer">XXL</button>
                        <button className="hover:font-bold cursor-pointer">XL</button>
                        <button className="hover:font-bold cursor-pointer">L</button>
                        <button className="hover:font-bold cursor-pointer">S</button>
                    </div>
                    <button className="w-full h-[4rem] bg-black mt-14 mb-14 text-[#FFFFFF] text-[20px] cursor-pointer">Añadir al Carrito</button>
                    <strong className="font-bold mb-4">Detalles del Producto</strong>
                    <p className="text-[14px] text-gray-600">{description}</p>
                </section>
            </article>
        </>
    )
}