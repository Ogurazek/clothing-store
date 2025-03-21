import Image from "next/image"

export default function ContactPage() {
    return (
        <>
            <article className="w-full h-auto flex flex-col items-center justify-center gap-8">
                <section className="w-[70%] h-96 flex p-4 gap-4">
                    <div className="w-[50%] h-full flex items-center justify-center">
                        <Image className="w-full h-full object-cover rounded-[4px]" src="/pictureOfContact.png" alt="" width={400} height={400}></Image>
                    </div>
                    <div className="w-[50%] h-full flex justify-center flex-col gap-2">
                        <h1 className="text-2xl text-left">Title of Page</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio quae, corrupti nobis quasi beatae exercitationem tenetur. Aspernatur quisquam, dolores blanditiis animi quaerat magni tenetur. Minus debitis exercitationem dolor facilis!</p>
                    </div>
                </section>
                <section className="w-[34.375rem] h-auto gap-4 flex flex-col">
                    <p className="text-center">Send a Message</p>
                    <input className="bg-[#FFFFFF]  h-[2rem] border-2 border-black" placeholder="Full name" type="text" />
                    <input className="bg-[#FFFFFF] h-[2rem] border-2 border-black" placeholder="Enter email" type="text" />
                    <input className="bg-[#FFFFFF] h-[2rem] border-2 border-black" placeholder="Mobile number" type="text" />
                    <textarea className="bg-[#FFFFFF] h-[8.125rem] border-2 border-black" type="text" placeholder="Message" name="" id=""></textarea>
                </section>
            </article>
        </>
    )
}