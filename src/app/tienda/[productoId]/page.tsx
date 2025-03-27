import getProductDetail from "@/lib/getProductDetail";

export default async function ProductDetail({ params }: { params: { productoId: string } }) {


    const { productoId } = params;
    const productosDetalles = await getProductDetail({ productoId });

    return (
        <>
            <div>
                {
                    productosDetalles.products.map(producto => (
                        <div key={producto.slug}>
                            <h1>{producto.name}</h1>
                            <p>{producto.price}</p>
                            <img src={producto.image} alt="" />
                        </div>
                    ))
                }
            </div>
        </>
    )
}