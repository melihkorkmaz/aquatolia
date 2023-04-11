import { CartPopup } from "./CartPopup";
import { ThinBag } from "../Helpers/icons/ThinBag";
import Link from "next/link";
import { useState } from "react";
import useCart from "@/hooks/useCart";
import { getProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

const CartButton = () => {
  const [count, setCount] = useState(0);
  const { getCart } = useCart();

  const { data } = useQuery({
    queryKey: ["cart-products"],
    queryFn: () => {
      const cart = getCart();
      const productIds = Object.keys(cart).map((key) => Number(key));

      if (productIds.length === 0) return Promise.resolve([]);

      const products = getProducts(productIds);
      return products;
    },
    onSuccess(data) {
      setCount(data.length);
    },
  });

  return (
    <>
      <div className="cart relative cursor-pointer">
        <Link href="/cart">
          <span>
            <ThinBag />
          </span>
        </Link>
        {count > 0 && (
          <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-amber-300 text-black">
            {count}
          </span>
        )}
      </div>
      <CartPopup products={data} />
    </>
  );
};

export default CartButton;
