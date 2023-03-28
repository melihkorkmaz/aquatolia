import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "./productContext";
import { twJoin } from "tailwind-merge";
import { MediaField } from "@/types/MediaField";

interface ProductImageProps {
  image?: MediaField
  format?: "thumbnail" | "small" | "medium" | "large";
  className?: string;
}

export const ProductImage = ({ image, format = "large", className }: ProductImageProps) => {
  const product = useContext(ProductContext);

  if (!product) {
    return null;
  }

  const imageFormat = image?.formats && image.formats[format] || product?.mainImage?.formats && product?.mainImage?.formats[format];

  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imageFormat?.url}`}
      alt={product.title || ""}
      width={imageFormat?.width || 100}
      height={imageFormat?.height || 100}
      className={twJoin("max-h-full object-contain", className || "")}
    />
  )
}
