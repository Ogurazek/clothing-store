import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <article className="w-full h-[33.600rem relative">
        <Image className="w-full h-full object-cover" src="/wallpaper.svg" alt="" width={600} height={600} />
      </article>
      <div className="absolute inset-0 m-auto w-[45%] h-[40%] pl-12 z-10 flex flex-col justify-center gap-6 text-[#FFFFFF]">
        <p className="text-[30px] text-left">LOOK YOUR BEST</p>
        <h1 className="text-[45px] font-bold">FOR YOUR SPECIAL DAY</h1>
        <Link className="mb-16 w-[10.188rem] h-[2.813rem] p-4 bg-[#826300] flex justify-center items-center rounded-[10px]" href="">
          <div className="text-[1.100rem] font-bold">
            New Arrivals
          </div>
        </Link>
      </div>
      <p>holqa</p>
    </>
  );
}
