const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export default function query(url: string) {
  return fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json());
}
