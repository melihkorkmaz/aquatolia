import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import { twJoin } from "tailwind-merge";
import InputRange, { Range } from "react-input-range";
import "react-input-range/lib/css/index.css";
import Checkbox from "@/components/Helpers/Checkbox";
import { NextPageContext } from "next";
import { getProductsByCategory } from "@/services/product";
import ProductCard from "@/components/ProductCard";
import { getNavigation } from "@/services/navigation";
import { getCategories } from "@/services/category";
import useInitAppState from "@/components/AppProvider/useInitAppState";
import useTranslation from "next-translate/useTranslation";
import { AppContextType } from "@/components/AppProvider/AppContext";
import Layout from "@/pages/Layout";
import { ProductType } from "@/types/Product";

export async function getServerSideProps(context: NextPageContext) {
  const { id } = context.query;
  const language = context.locale as string;

  const [navigations, categories, products] = await Promise.all([
    getNavigation(language),
    getCategories(),
    getProductsByCategory(id as string)
  ]);

  return {
    props: {
      products,
      mainNavigation: navigations,
      categories
    }
  };
}

interface CollectionsProps extends Omit<AppContextType, "language"> {
  products: ProductType[]
}

export default function Collections({ products, ...rest }: CollectionsProps) {
  const { lang } = useTranslation();
  useInitAppState({ ...rest, language: lang })

  const [filterToggle, setToggle] = useState(false);
  const [volume, setVolume] = useState<Range>({ min: 200, max: 500 });


  return (
    <Layout>
      <div className="bg-[#f8f8f8] pt-10">
        <div className="container-x mx-auto">
          <Breadcrumb />
          <div className="w-full lg:flex lg:space-x-[30px]">
            <div className="lg:w-[270px]">
              <div className={twJoin(
                "filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[20px]",
                filterToggle ? "block" : "hidden lg:block"
              )}>
                <div className="filter-subject-item pb-10 border-b border-qgray-border">
                  <div className="subject-title mb-[30px]">
                    <h1 className="text-black text-base font-500">Price Range</h1>
                  </div>
                  <div className="price-range mb-5">
                    <InputRange
                      draggableTrack
                      maxValue={1000}
                      minValue={0}
                      value={volume}
                      onChange={(value: Range | number) => setVolume(value as Range)}
                    />
                  </div>
                  <p className="text-xs text-qblack font-400">
                    Price: ${volume.min} - ${volume.max}
                  </p>
                </div>

                <div className="filter-subject-item pb-10 mt-10">
                  <div className="subject-title mb-[30px]">
                    <h1 className="text-black text-base font-500">Sizes</h1>
                  </div>
                  <div className="filter-items">
                    <ul>
                      <li className="item flex justify-between items-center mb-5">
                        <div className="flex space-x-[14px] items-center">
                          <div>
                            <Checkbox
                              id="sizeS"
                              name="sizeS"
                              handleChange={(e) => { }}
                              checked={false}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="sizeS"
                              className="text-xs font-black font-400 capitalize"
                            >
                              s
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="item flex justify-between items-center mb-5">
                        <div className="flex space-x-[14px] items-center">
                          <div>
                            <Checkbox
                              id="sizeS"
                              name="sizeS"
                              handleChange={(e) => { }}
                              checked={false}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="sizeM"
                              className="text-xs font-black font-400 capitalize"
                            >
                              M
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="item flex justify-between items-center mb-5">
                        <div className="flex space-x-[14px] items-center">
                          <div>
                            <Checkbox
                              id="sizeS"
                              name="sizeS"
                              handleChange={(e) => { }}
                              checked={false}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="sizeXL"
                              className="text-xs font-black font-400 capitalize"
                            >
                              XL
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="item flex justify-between items-center mb-5">
                        <div className="flex space-x-[14px] items-center">
                          <div>
                            <Checkbox
                              id="sizeS"
                              name="sizeS"
                              handleChange={(e) => { }}
                              checked={false}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="sizeXXL"
                              className="text-xs font-black font-400 capitalize"
                            >
                              XXL
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="item flex justify-between items-center mb-5">
                        <div className="flex space-x-[14px] items-center">
                          <div>
                            <Checkbox
                              id="sizeS"
                              name="sizeS"
                              handleChange={(e) => { }}
                              checked={false}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="sizeFit"
                              className="text-xs font-black font-400 capitalize"
                            >
                              Sliem Fit
                            </label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]">
                <div>
                  <p className="font-400 text-[13px]">
                    <span className="text-qgray"> Showing</span> 1–16 of 66
                    results
                  </p>
                </div>
                <div className="flex space-x-3 items-center">
                  <span className="font-400 text-[13px]">Sort by:</span>
                  <div className="flex space-x-3 items-center border-b border-b-qgray">
                    <span className="font-400 text-[13px] text-qgray">
                      Default
                    </span>
                    <span>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 1L5 5L9 1" stroke="#9A9A9A" />
                      </svg>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setToggle(!filterToggle)}
                  type="button"
                  className="w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow text-qyellow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  xl:gap-[30px] gap-5 mb-[40px]">
                {products?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
