import Image from "next/image"

export default function CardCollection() {
    return (
        <>
            <article className="w-[18.5rem] h-[18.5rem] rounded-[8px] overflow-hidden relative">
                <Image className="w-full h-full object-cover" src="/PictureCollection.svg" alt="" width={600} height={600} />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[50%] bg-white h-[1.8rem] flex items-center justify-center p-2 rounded">
                    <p className="font-semibold  m-0">Suits & Vests</p>
                </div>
            </article>

        </>
    )
}