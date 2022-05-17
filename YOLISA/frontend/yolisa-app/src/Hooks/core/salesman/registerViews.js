import instance from "../../configAxios";

export default function registerViews(id_salesman) {
  const result = instance.post(
    "visitant/info/salesman/register_views",
    {
      id_salesman: id_salesman,
    },
    {
      headers: {
        ContentType: "application/json",
      },
    }
  );

  return result;
}
