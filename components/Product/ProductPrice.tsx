import { useContext } from "react";
import { twJoin } from "tailwind-merge";
import { ProductContext } from "./productContext";

interface ProductPriceProps {
  priceClassName?: string;
  discountedPriceClassName?: string;
  quantity?: number;
}

export const ProductPrice = ({
  priceClassName,
  discountedPriceClassName,
  quantity = 1,
}: ProductPriceProps) => {
  const product = useContext(ProductContext);
  if (!product) return null;

  return (
    <div data-aos="fade-up" className="flex space-x-2 items-center">
      <span className={twJoin("text-sm font-500 text-qgray line-through", priceClassName)}>
        € {(product.price * quantity).toFixed(2)}
      </span>
      <span className={twJoin("text-2xl font-500 text-qred", discountedPriceClassName)}>
        € {(product.discountedPrice * quantity).toFixed(2)}
      </span>
    </div>
  )
}
