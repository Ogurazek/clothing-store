import { Filter } from 'lucide-react';
import CheckBox from '@/components/checkbox';
import TitleCategory from '@/components/titleCategory';
import CardCategory from '@/components/CardCategory';
import { getCategories } from '@/lib/getCategories';


export default async function pageShop() {
    const categories = await getCategories();

    return (
        <>
            <article className="w-full h-auto flex">
                <section className="w-[14.563rem] min-h-[37.5rem] h-auto flex flex-col border-[1px] border-b-0 border-[#DFDFDF]">
                    <header className="w-full h-[2.375rem] pr-3 pl-3 gap-2.5 flex items-center sticky">
                        <p>FILTER</p>
                        <Filter size={24} />
                    </header>
                    <TitleCategory />
                    <CheckBox />
                </section>
                <main className='w-full h-auto p-12 flex flex-wrap gap-11'>
                    {
                        categories.map((category: any) => {
                            // tengo que solucionar el tema de los any
                            return <CardCategory key={category.slug} name={category.name} slug={category.slug} image={category.image} />
                        })
                    }
                </main>
            </article >
            <div>paginación</div>
        </>
    )
}