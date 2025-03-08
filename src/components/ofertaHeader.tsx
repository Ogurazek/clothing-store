

export default function OfertaHeader() {

    const megaOferta = "Mega Oferta"
    const diezOff = "Take 10% Off"
    return (
        <>
            <header className="bg-[#826300] w-full h-[2.5rem] text-[#FFFFFF] flex
             justify-center items-center gap-6 border-[1px] border-[black]"
            >
                <p className="font-bold text-[1rem]">
                    {megaOferta}
                </p>
                <p>
                    {diezOff}
                </p>
            </header>
        </>
    )
}