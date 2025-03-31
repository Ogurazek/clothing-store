import query from "./strapi";

const { STRAPI_HOST } = process.env;

export async function getProducts({ categoryId }: { categoryId: string }) {
  return query(
    `products?filters[product_category][slug][$contains]=${categoryId}&populate=images`
  ).then((res) => {
    const { data, meta } = res;

    const products = data.map((product: any) => {
      const { name, price, images: rawImages, slug } = product;
      const image = `${STRAPI_HOST}${rawImages[0].url}`;
      return { name, price, image, slug };
    });

    return { products, pagination: meta.pagination };
  });
}
