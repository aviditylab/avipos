import { db } from "../../db";
import { ProductTypeSerialized } from "../ProductType";

export default async function getProducts(): Promise<ProductTypeSerialized[]> {
  const res = (await db.products.toArray()).reverse();
  const serializedResponse = res.map((item) => {
    return {
      ...item,
      image: item.image
        ? URL.createObjectURL(item.image)
        : "https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103595_960_720.png",
      id: item.id!,
    };
  });
  return serializedResponse;
}
