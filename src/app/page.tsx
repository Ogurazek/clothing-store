import Image from "next/image";
import Link from "next/link";
import CardsHome from "@/components/CardsHome";
import CardCollection from "@/components/CardCollection";
import { getHomeInfo, getColeccion } from "@/lib/getHomeInfo";


export default async function Home() {
  const { title, secondTitle } = await getHomeInfo()
  const colecciones = await getColeccion()

  return (
    <>
      <article className="w-full h-[33.600rem] relative">
        <Image className="w-full h-full object-cover" src="/wallpaper.svg" alt="" width={600} height={600} />
      </article>
      <div className="absolute inset-0 m-auto w-[45%] h-[40%] pl-12 z-10 flex flex-col justify-center gap-5 text-[#FFFFFF]">
        <p className="text-[30px] text-left">{title}</p>
        <h1 className="text-[45px] font-bold">{secondTitle}</h1>
        <Link className="mb-11 hover:opacity-75 w-[10.188rem] h-[2.813rem] p-4 bg-[#826300] flex justify-center items-center rounded-[10px]" href="">
          <div className="text-[1.100rem] font-bold">
            <p>Lo Nuevo</p>
          </div>
        </Link>
      </div>
      {/* segunda sección del home */}
      <article className="w-[95%] h-auto flex justify-center items-center mt-16 flex-col gap-6">
        <p className="text-[24px] font-semibold">PRODUCTOS DESTACADOS</p>
        <Link href="" className="w-[6.063rem] h-[1.875rem] rounded-[10px] flex justify-center items-center border-[#B1B1B1] border-[1px] transition-transform duration-200 hover:bg-[#B1B1B1]">
          <p className="text-[16px] m-0">Ver Todo</p>
        </Link>
        <section className="w-full h-auto flex gap-8 justify-center items-center">
          <CardsHome name="nada" image="/picture.svg" price={300} />
          <CardsHome name="nada" image="/picture.svg" price={300} />
          <CardsHome name="nada" image="/picture.svg" price={300} />
          <CardsHome name="nada" image="/picture.svg" price={300} />
          <CardsHome name="nada" image="/picture.svg" price={300} />

        </section>
        <section className="w-full h-[14.75rem] mt-10 relative rounded-[6px] overflow-hidden">
          <Image className="w-full h-full object-cover" src="/pictureOrder.svg" alt="" width={600} height={600} />
          <div className="absolute inset-0 m-auto w-[30%] h-[40%] z-10 flex flex-col justify-center items-center gap-5 text-[#FFFFFF]">
            <p className="text-[35px] ">Crear el Orden</p>
            <Link className="mb-2 w-[10.188rem] h-[2.813rem] p-4  bg-[#826300] flex justify-center items-center rounded-[10px]" href="">
              <div className="text-[1rem] font-bold">
                <p>Aprender Más</p>
              </div>
            </Link>
          </div>
        </section>
      </article>
      {/* Tercera sección del home */}
      <article className="w-[70%] h-auto flex flex-col items-center mt-16 gap-10">
        <p className="text-[24px] font-semibold">COLECCIÓN DE LA TIENDA</p>
        <section className="w-full h-auto flex flex-wrap gap-6 justify-center items-center">
          {
            colecciones.map((coleccion: any) => {
              return <CardCollection title={coleccion.tituloColeccion} image={coleccion.image} key={coleccion.IdentificadorUnico} />
            })
          }
        </section>
      </article>
    </>
  );
}
