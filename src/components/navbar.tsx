import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from 'lucide-react';


export default function Navbar() {

    return (
        <>
            <article className="bg-[#FAEDDF] w-full h-[4.375rem] px-8 flex items-center justify-between">
                <div className="w-[6.438rem] h-full flex items-center justify-center">
                    <Image className="w-full h-full object-cover" src="/logo.svg" alt="Logo" width={600} height={600} />
                </div>
                <nav className="w-auto h-full flex items-center justify-center">
                    <ul className="flex gap-[3.375rem] text-[14px] font-semibold">
                        <Link href=""><li>PRODUCTS</li></Link>
                        <Link href=""><li>SHOP</li></Link>
                        <Link href=""><li>WEDDINGS</li></Link>
                        <Link href=""><li>SERVICES</li></Link>
                        <Link href=""><li>CONTACT</li></Link>
                    </ul>
                </nav>
                <div className="w-[6.438rem] h-full gap-[1rem] flex justify-center items-center">
                    <Link href=""><Instagram /></Link>
                    <Link href=""><Facebook /></Link>
                    <Link href=""><Twitter /></Link>
                </div>
            </article>
        </>
    );
}
