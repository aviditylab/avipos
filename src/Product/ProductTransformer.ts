import { ProductType, ProductTypeSerialized } from "./ProductType";

export function serializeProduct(product: ProductType): ProductTypeSerialized {
  return {
    id: product.id!,
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image
      ? URL.createObjectURL(product.image)
      : "https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103595_960_720.png",
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
}

export function unserializeProduct(
  product: ProductTypeSerialized | null
): ProductType {
  if (product === null) {
    return {
      name: "",
      description: "",
      price: 0,
      createdAt: 0,
      updatedAt: 0,
    };
  }
  return {
    name: product.name,
    description: product.description,
    price: product.price,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
}
