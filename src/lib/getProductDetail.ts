import query from "./strapi";

const { STRAPI_HOST } = process.env;

export default function getProductDetail({
  productoId,
}: {
  productoId: string;
}) {
  return query(
    `products?filters[slug][$eq]=${productoId}&populate=images`
  ).then((res) => {
    const { data } = res;

    const products = data.map((product: any) => {
      const { name, price, images: rawImages, slug, description } = product;

      const images = rawImages
        ? rawImages.map((img: any) => `${STRAPI_HOST}${img.url}`)
        : [];

      return { name, price, images, slug, description };
    });

    return { products };
  });
}
