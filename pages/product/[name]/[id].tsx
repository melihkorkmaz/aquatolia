import { AppContextType } from "@/components/AppProvider/AppContext";
import useInitAppState from "@/components/AppProvider/useInitAppState";
import Breadcrumb from "@/components/Breadcrumb";
import { Hearth } from "@/components/Helpers/icons/Hearth";
import Product from "@/components/Product";
import useCart from "@/hooks/useCart";
import Layout from "@/pages/Layout";
import { getCategories } from "@/services/category";
import { getNavigation } from "@/services/navigation";
import { getProduct } from "@/services/product";
import { MediaField } from "@/types/MediaField";
import { ProductType } from "@/types/Product";
import useTranslation from "next-translate/useTranslation";
import { NextPageContext } from "next/dist/shared/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ProductPageProps extends Omit<AppContextType, "language"> {
  product?: ProductType;
}

export async function getServerSideProps(context: NextPageContext) {
  const language = context.locale as string;

  const [navigations, categories, product] = await Promise.all([
    getNavigation(language),
    getCategories(),
    getProduct(context.query.id as string)
  ]);

  const props: ProductPageProps = {
    mainNavigation: navigations,
    categories,
    product
  }

  return {
    props
  }
};

export default function ProductPage({
  product,
  ...rest
}: ProductPageProps) {
  const { lang, t } = useTranslation("product");
  useInitAppState({ ...rest, language: lang });
  const [selectedImage, setSelectedImage] = useState<MediaField | undefined>(product?.mainImage);
  const [quantity, setQuantity] = useState(1);
  const reviewElement = useRef(null);
  const [tab, setTab] = useState("des");
  const { addProductToCart } = useCart();

  const changeImgHandler = (image: MediaField) => {
    image && setSelectedImage(image);
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setSelectedImage(product?.mainImage);
  }, [product?.mainImage]);

  if (!product) {
    return null;
  }

  return (
    <Layout>
      <div className="container-x mx-auto mt-6">
        <div className="breadcrumb-wrapper w-full ">
          <Breadcrumb
            paths={[
              { name: "home", path: "/" },
              { name: "single product", path: "/single-product" },
            ]}
          />
        </div>
        <div className="w-full pb-[60px]">
          <Product product={product}>
            <div className="product-view w-full lg:flex justify-between">
              <div data-aos="fade-right" className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
                <div className="w-full">
                  <div className="w-full h-[600px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3 py-3">
                    <Product.Image image={selectedImage} />
                  </div>
                  <Product.Thumbnails onClick={changeImgHandler} selected={selectedImage} />
                </div>
              </div>
              <div className="flex-1">
                <div className="product-details w-full mt-10 lg:mt-0">
                  <span className="text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block"
                  >
                    <Product.Property name="category" />
                  </span>
                  <p className="text-xl font-medium text-qblack mb-4"
                  >
                    <Product.Property name="title" />
                  </p>

                  <div className="mb-8">
                    <Product.Price />
                  </div>

                  <p className="text-qgray text-sm text-normal mb-[30px] leading-7">
                    <Product.Property name="description" />
                  </p>

                  <div className="mb-[30px]">
                    {product?.variants.map((variant) => (
                      <Product.Variant variant={variant} key={variant.id} />
                    ))}
                  </div>
                  <div className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]">
                    <div className="w-[120px] h-full px-[26px] flex items-center border border-qgray-border">
                      <div className="flex justify-between items-center w-full">
                        <button
                          onClick={decrement}
                          type="button"
                          className="text-base text-qgray"
                        >
                          -
                        </button>
                        <span className="text-qblack">{quantity}</span>
                        <button
                          onClick={increment}
                          type="button"
                          className="text-base text-qgray"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-[60px] h-full flex justify-center items-center border border-qgray-border">
                      <button title="Save to favourites" type="button">
                        <span>
                          <Hearth />
                        </span>
                      </button>
                    </div>
                    <div className="flex-1 h-full">
                      <button
                        type="button"
                        className="black-btn text-sm font-semibold w-full h-full"
                        onClick={() => {
                          addProductToCart(product.id, quantity);
                        }}
                      >
                        {t("card.add-to-cart")}
                      </button>
                    </div>
                  </div>

                  <div className="mb-[20px]">
                    <p className="text-[13px] text-qgray leading-7">
                      <span className="text-qblack">Category :</span> <Product.Property name="category" />
                    </p>
                    <p className="text-[13px] text-qgray leading-7">
                      <span className="text-qblack">EAN :</span> <Product.Property name="EAN" />
                    </p>
                    <p className="text-[13px] text-qgray leading-7">
                      <span className="text-qblack">SKU:</span> <Product.Property name="SKU" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Product >
        </div>
      </div>

      <div className="bg-[#f8f8f8]">
        <div
          className="product-des-wrapper w-full relative pb-[60px]"
          ref={reviewElement}
        >
          <div className="tab-buttons w-full mb-10 mt-5 sm:mt-0 border-b border-[#E8E8E8]">
            <div className="container-x mx-auto">
              <ul className="flex space-x-12 ">
                <li>
                  <span
                    onClick={() => setTab("des")}
                    className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === "des"
                      ? "border-qyellow text-qblack "
                      : "border-transparent text-qgray"
                      }`}
                  >
                    Description
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => setTab("review")}
                    className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === "review"
                      ? "border-qyellow text-qblack "
                      : "border-transparent text-qgray"
                      }`}
                  >
                    Reviews
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-x mx-auto">
            <div className="tab-contents w-full">
              {tab === "des" && (
                <div className="w-full tab-content-item">
                  <div dangerouslySetInnerHTML={{ __html: product.details }} />
                </div>
              )}
              {tab === "review" && (
                <div data-aos="fade-up" className="w-full tab-content-item">
                  ...coming soon
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
