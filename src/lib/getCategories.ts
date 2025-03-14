import query from "./strapi";

const { STRAPI_HOST } = process.env;

interface Category {
  name: string;
  slug: string;
  imagen?: {
    url: string;
  };
}

export function getCategories(): Promise<Category[]> {
  return query("product-categories?populate[imagen][fields][0]=url").then(
    (res) => {
      const data = res.data as Category[];
      return data.map((category) => {
        const { name, slug, imagen } = category;

        const image = imagen?.url ? `${STRAPI_HOST}${imagen.url}` : null;

        return { name, slug, image };
      });
    }
  );
}
