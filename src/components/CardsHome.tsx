import Image from "next/image"
import Link from "next/link"

export default function CardsHome({ name, image, price, id }: { name: string, image: string, price: number, id: string }) {
    return (
        <>
            <Link href={`/tienda/${id}`} className="w-[20rem] h-[33.5rem] flex items-center flex-col gap-2">
                <article className="w-[20rem] h-[33.5rem] gap-[17px] flex items-center flex-col overflow-ellipsis overflow-hidden">
                    <section className="w-full h-[80%] overflow-hidden">
                        <Image className="transition-all duration-400 hover:scale-110 w-full h-full object-cover" src={image} alt="" width={600} height={600} />
                    </section>
                    <div className="w-full h-[3.75rem] ">
                        <p className=" overflow-ellipsis">
                            {name}
                        </p>
                        <span className="text-gray-500 text-[14px]">
                            ${price}
                        </span>
                    </div>
                </article>
            </Link>
        </>
    )
}