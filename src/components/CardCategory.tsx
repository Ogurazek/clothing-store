import Link from "next/link"
import Image from "next/image"


export default function CardCategory({ name, image, slug }: { name: string, image: string, slug: string }) {
    return (
        <>
            <Link href={`/tienda/categories/${slug}`} className="transition-transform mb-6 duration-200 hover:scale-105 w-[14rem] h-[12rem] flex items-center flex-col gap-2">
                <article className="w-[14rem] h-[10rem] gap-[17px] flex items-center flex-col overflow-ellipsis ">
                    <section className="w-full h-full">
                        <Image className="w-full h-[10rem] object-cover rounded-[5px]" src={image} alt={`Categoría${slug}`} width={400} height={400} />
                    </section>
                    <p className="font-semibold overflow-ellipsis text-[1.100rem]">
                        {name}
                    </p>
                </article>
            </Link>
        </>
    )
}