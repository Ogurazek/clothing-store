import Image from "next/image"
import Link from "next/link"

export default function CardsHome({ name, image, price }: { name: string, image: string, price: number }) {
    return (
        <>
            <Link href="" className="transition-transform duration-200 hover:scale-105 w-[14.375rem] h-[26rem] flex items-center flex-col gap-2">
                <article className="w-[14.375rem] h-[26rem] gap-[17px] flex items-center flex-col overflow-ellipsis">
                    <section className="w-full h-[80%]">
                        <Image className="w-full h-full object-cover rounded-[5px]" src={image} alt="" width={400} height={400} />
                    </section>
                    <p className="font-semibold overflow-ellipsis">
                        {name}
                    </p>
                    <span>
                        {price}
                    </span>
                </article>
            </Link>
        </>
    )
}