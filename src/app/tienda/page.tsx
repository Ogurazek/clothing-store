import { Filter } from 'lucide-react';
import CheckBox from '@/components/checkbox';
import TitleCategory from '@/components/titleCategory';
import CardCategory from '@/components/CardCategory';
import { getCategories } from '@/lib/getCategories';


export default async function pageShop() {
    const categories = await getCategories();

    return (
        <>
            <article className="w-full h-auto flex flex-col">
                <div className='w-full h-20 flex p-14 items-center'>
                    <h1 className='text-3xl font-bold'>Nuestros Productos</h1>
                </div>
                <main className='w-full h-auto p-12 pt-0  flex flex-wrap gap-11'>
                    {
                        categories.map((category: any) => {
                            // tengo que solucionar el tema de los any
                            return <CardCategory key={category.slug} name={category.name} slug={category.slug} image={category.image} />
                        })
                    }
                </main>
            </article >
        </>
    )
}