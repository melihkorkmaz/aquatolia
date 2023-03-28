import { ProductType } from "@/types/Product";
import { useContext } from "react";
import { ProductContext } from "./productContext";

interface ProductPropertyProps {
  name: keyof ProductType;
}

export const ProductProperty = ({ name }: ProductPropertyProps) => {
  const product = useContext(ProductContext);

  if (!product) return null;

  if (name === "category") {
    return (
      <>
        {product?.category?.title}
      </>
    );
  }

  return (
    <>
      {(product as any)?.[name]}
    </>
  );
};
