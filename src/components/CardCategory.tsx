import Link from "next/link"
import Image from "next/image"


export default function CardCategory({ name, image, slug }: { name: string, image: string, slug: string }) {
    return (
        <>
            <Link href={`/categories/${slug}`} className="transition-transform duration-200 hover:scale-105 w-[14.375rem] h-[22rem] flex items-center flex-col gap-2">
                <article className="w-[14.375rem] h-[22rem] gap-[17px] flex items-center flex-col overflow-ellipsis">
                    <section className="w-full h-[100%]">
                        <Image className="w-full h-full object-cover rounded-[5px]" src={image} alt="" width={400} height={400} />
                    </section>
                    <p className="font-semibold overflow-ellipsis">
                        {name}
                    </p>
                </article>
            </Link>
        </>
    )
}