import query from "./strapi";

const { STRAPI_HOST } = process.env;

export function getHomeInfo() {
  return query("home").then((res) => {
    return res.data;
  });
}

interface Coleccion {
  tituloColeccion: string;
  IdentificadorUnico: string;
  imageColeccion?: {
    url: string;
  };
}

export function getColeccion(): Promise<Coleccion[]> {
  return query(
    "coleccion-tiendas?fields[0]=tituloColeccion&fields[1]=IdentificadorUnico&populate[imageColeccion][fields][0]=url"
  ).then((res) => {
    const data = res.data as Coleccion[];

    return data.map((coleccion) => {
      const { tituloColeccion, IdentificadorUnico, imageColeccion } = coleccion;

      const image = imageColeccion?.url
        ? `${STRAPI_HOST}${imageColeccion.url}`
        : null;

      return { tituloColeccion, IdentificadorUnico, image };
    });
  });
}
