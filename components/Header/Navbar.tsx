'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { Arrow } from "../Helpers/icons/Arrow";
import useAppState from "../AppProvider/useAppState";
import useTranslation from "next-translate/useTranslation";
import BarThreeCenterLeft from "../Helpers/icons/BarThreeCenterLeft";
import slugify from "slugify";

export default function Navbar() {
  const { mainNavigation: navigations, categories } = useAppState();
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");
  const { t, lang } = useTranslation('layout');

  const handler = () => {
    setToggle(!categoryToggle);
  };

  useEffect(() => {
    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle]);

  return (
    <div className="nav-widget-wrapper w-full  h-[60px] relative z-30 bg-brand quomodo-shop-nav-bar lg:block hidden">
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                <button
                  onClick={handler}
                  type="button"
                  className="w-full h-full flex justify-between items-center"
                >
                  <div className="flex space-x-3 items-center">
                    <BarThreeCenterLeft />
                    <span className="text-sm font-600 text-qblacktext">
                      {t('navbar.all-categories')}
                    </span>
                  </div>
                  <div>
                    <Arrow />
                  </div>
                </button>
                {categoryToggle && (
                  <div
                    className="fixed top-0 left-0 w-full h-full -z-10"
                    onClick={handler}
                  ></div>
                )}
                <div className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden" style={{ height: `${elementsSize} ` }}>
                  <ul className="categories-list">
                    {categories.map((category) => (
                      <li className="category-item" key={category.id}>
                        <Link href={`/${lang}/collection/${slugify(category.title, { lower: true })}/${category.id}`} onClick={handler}>
                          <div className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-brand hover:text-white`}>
                            <div className="flex items-center space-x-6">
                              <span className="text-xs font-400">
                                {category.title}
                              </span>
                            </div>
                            <div>
                              <Arrow direction="right" className=""/>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  {navigations?.map((item) => (
                    <li className="relative" key={item.id}>
                      <Link href={item.url} >
                        <span className={`flex items-center text-sm font-600 cursor-pointer text-white`}>
                          <span>{item.title}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
