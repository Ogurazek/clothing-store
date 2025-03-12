import CardFooter from "./CardFooter"

export default function Footer() {
    return (
        <>
            <article className="w-full h-[20rem] bg-[#515050] mt-24 flex items-center justify-center p-6 flex-col text-[#FFFFFF] text-[14px]">
                <section className="w-full h-[15rem] items-center flex p-4 overflow-hidden gap-[6rem]">
                    <footer className="w-[11.563rem] h-full flex flex-col gap-4">
                        <ul className="flex flex-col gap-6">
                            <li>Sign up save</li>
                            <li>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</li>
                        </ul>
                        <input className="w-full h-auto border-b-2 border-[#FFFFFF] outline-none" placeholder="Enter your email" type="text" />
                    </footer>
                    <CardFooter />
                    <CardFooter />
                    <CardFooter />
                    <CardFooter />
                </section>
            </article>
        </>
    )
}