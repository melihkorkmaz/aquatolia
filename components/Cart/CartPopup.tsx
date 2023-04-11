import useCart from "@/hooks/useCart";
import { ProductType } from "@/types/Product";
import useTranslation from "next-translate/useTranslation";
import { Cross } from "../Helpers/icons/Cross";
import Product from "../Product";

interface CartPopupProps {
  products?: ProductType[];
}

export function CartPopup({ products = [] }: CartPopupProps) {
  const { t } = useTranslation("product");
  const { getCart, removeProductFromCart } = useCart();

  const cart = getCart();

  return (
    <>
      <div
        style={{ boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
        className="w-[300px] bg-white border-t-[3px] border-qh3-blue absolute -right-[45px] top-11 z-50 hidden group-hover:block"
      >
        <div className="w-full h-full">
          <div className="product-items overflow-y-scroll">
            <ul>
              {products.length === 0 && (
                <li className="w-full h-full text-xs text-gray-500 text-center">
                  {t("card.empty-cart")}
                </li>
              )}
              {products.map((product) => (
                <li className="w-full h-full flex" key={product.id}>
                  <Product product={product}>
                    <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                      <div className="w-[65px] h-full">
                        <Product.Image />
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-center ">
                        <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                          <Product.Property name="title" />
                        </p>

                        <Product.Price priceClassName="text-[18px]" discountedPriceClassName="text-[18px]" quantity={cart[product.id].quantity} />
                      </div>
                    </div>
                    <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer" role="button" onClick={() => removeProductFromCart(product.id)}>
                      <Cross />
                    </span>
                  </Product>
                </li>
              ))}

            </ul>
          </div>
          <div className="w-full px-4 mt-[20px] mb-[12px]">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="product-actions px-4 mb-[30px]">
            <div className="total-equation flex justify-between items-center mb-[28px]">
              <span className="text-[15px] font-500 text-qblack">{t("card.subtotal")}</span>
              <span className="text-[15px] font-500 text-qred ">€ {
                products.reduce((acc, product) => {
                  return acc + (product.discountedPrice * cart[product.id].quantity)
                }, 0).toFixed(2)
              }</span>
            </div>
            <div className="product-action-btn">
              <a href="#">
                <div className="gray-btn w-full h-[50px] mb-[10px] ">
                  {t("card.view-cart")}
                </div>
              </a>
              <a href="#">
                <div className="w-full h-[50px]">
                  <div className="brand-btn">
                    {t("card.checkout-now")}
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full px-4 mt-[20px]">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="flex justify-center py-[15px]">
            <p className="text-[13px] font-500 text-qgray">
              {t("card.get-return-in")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
