import query from "./strapi";

const { STRAPI_HOST } = process.env;

export default function getProductDetail({
  productoId,
}: {
  productoId: string;
}) {
  console.log("Ejecutando getProducts con categoryId sdasdasdasd:", productoId);
  return query(
    `products?filters[slug][$eq]=${productoId}&populate[image][fields][0]=url`
  ).then((res) => {
    console.log("res", res);
    const { data } = res;

    const products = data.map((product: any) => {
      const { name, price, image: rawImage, slug } = product;
      const image = `${STRAPI_HOST}${rawImage.url}`;
      return { name, price, image, slug };
    });

    return { products };
  });
}
