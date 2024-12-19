export interface ProductType {
  id?: number;
  name: string;
  description: string;
  price: number;
  image?: Blob;
  createdAt: number;
  updatedAt: number;
}

export interface ProductTypeSerialized {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: number;
  updatedAt: number;
}
