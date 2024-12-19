import { ChangeEvent, MouseEvent, useState } from "react";
import { Input, VStack, Text } from "rsuite";
import { Uploader } from 'rsuite';
import { FileType } from "rsuite/esm/Uploader";
import { useAppSelector } from "../hooks";
import { ProductType } from "./ProductType";
import { unserializeProduct } from "./ProductTransformer";

export default function ProductForm() {
  const selectedProduct = useAppSelector((state) => state.products.selectedProduct);
  const [product, setProduct] = useState<ProductType>(unserializeProduct(selectedProduct));
  const [fileUploadError, setFileUploadError] = useState('');
  const [image, setImage] = useState<File | null>(null)
  const handleUploadImage = (fileList: FileType[], event: ChangeEvent<Element> | MouseEvent<Element>) => {
    setFileUploadError('');
    if (event.type === 'click') return;
    const image = fileList;
    if (!image || image.length == 0 || !image[0] || !image[0].name!.match(/\.(jpg|jpeg|png)$/)) {
      setFileUploadError('select valid image (jpg, jpeg, png).');
      return;
    }
    setProduct((prev) => {
      return ({
        ...prev,
        image: new Blob([image[0].blobFile!])
      })
    });
    setImage(image[0].blobFile!);
  }
  const handleRemoveImage = () => {
    setFileUploadError('');
    setProduct((prev) => {
      return ({
        ...prev,
        image: undefined
      })
    });
    setImage(null);
  }
  return (
    <VStack spacing={6}>
      <Input required value={product.name} onChange={(e) => setProduct((prev) => ({ ...prev, name: e }))} />
      <Input type="number" required value={product.price} onChange={(e) => setProduct((prev) => ({ ...prev, price: Number(e) }))} />
      <Input
        as="textarea"
        value={product.description}
        id="outlined-multiline-flexible"
        placeholder="Description"
        onChange={(e) => setProduct((prev) => ({ ...prev, description: e }))}
      />
      <Uploader autoUpload={false} action="#" onChange={handleUploadImage} draggable style={{ width: '100%' }} accept="image/png, image/jpeg" onRemove={handleRemoveImage}>
        <div style={{ height: 200, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {!image && <span>Click or Drag files to this area to upload</span>}
          {image && <img src={URL.createObjectURL(image)} height="200" width={'100%'} />}
        </div>
      </Uploader>
      {fileUploadError !== '' && <Text color="red">{fileUploadError}</Text>}
    </VStack>
  )
}