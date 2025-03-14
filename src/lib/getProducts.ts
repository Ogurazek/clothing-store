import query from "./strapi";

const { STRAPI_HOST } = process.env;

export function getProducts({ categoryId }: { categoryId: string }) {
  return query(
    `products?filters[product_category][slug][$contains]=${categoryId}&populate=image`
  ).then((res) => {
    const { data, meta } = res;
    console.log("pure con queso", data);
    const products = data.map((product) => {
      const { name, price, slug, image } = product;

      const productImage = image?.url ? `${STRAPI_HOST}${image.url}` : null;

      return { name, price, slug, image: productImage };
    });
    return { products, pagination: meta.pagination };
  });
}
