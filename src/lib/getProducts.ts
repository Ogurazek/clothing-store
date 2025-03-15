import query from "./strapi";

const { STRAPI_HOST } = process.env;

export function getProducts({ categoryId }: { categoryId: string }) {
  console.log("Ejecutando getProducts con categoryId sdasdasdasd:", categoryId);
  return query(
    `products?filters[product_category][slug][$contains]=${categoryId}&populate=image`
  ).then((res) => {
    console.log(res);
    const { data, meta } = res;

    const products = data.map((product: any) => {
      const { name, price, image: rawImage, slug } = product;
      const image = `${STRAPI_HOST}${rawImage.url}`;
      return { name, price, image, slug };
    });

    return { products, pagination: meta.pagination };
  });
}
