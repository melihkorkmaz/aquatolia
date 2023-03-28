import { MediaField } from "@/types/MediaField";
import { useContext } from "react";
import { twJoin } from "tailwind-merge";
import { ProductContext } from "./productContext";
import { ProductImage } from "./ProductImage";

interface ProductThumbnailsProps {
  onClick: (image: MediaField) => void;
  selected?: MediaField;
}

export const ProductThumbnails = ({ onClick, selected }: ProductThumbnailsProps) => {
  const product = useContext(ProductContext);

  if (!product) {
    return null;
  }

  return (<>
    <div className="flex gap-2 flex-wrap">
      <div
        onClick={() => product.mainImage && onClick(product.mainImage)}
        key={product.mainImage?.id}
        className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer relative flex"
      >
        <ProductImage
          image={product.mainImage}
          format="thumbnail"
          className={
            twJoin("hover:opacity-100", selected?.id === product.mainImage?.id ? "opacity-100" : "opacity-50 ")
          }
        />
      </div>
      {product?.images?.map((img) => (
        <div
          onClick={() => onClick(img)}
          key={img.id}
          className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer relative flex"
        >
          <ProductImage
            image={img}
            format="thumbnail"
            className={
              twJoin(" hover:opacity-100", selected?.id === img?.id ? "opacity-100" : "opacity-50")
            }
          />
        </div>
      ))}
    </div>
  </>)
}
