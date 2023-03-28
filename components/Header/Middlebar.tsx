import Image from "next/image";
import Link from "next/link";
import { Cart } from "../Cart";
import { Compair } from "../Helpers/icons/Compair";
import { ThinBag } from "../Helpers/icons/ThinBag";
import { ThinLove } from "../Helpers/icons/ThinLove";
import { ThinPeople } from "../Helpers/icons/ThinPeople";
import { SearchBox } from "../Helpers/SearchBox";

import logo from "../../public/images/logo.png";

export function Middlebar() {
  return (
    <div className="w-full h-[86px] bg-white quomodo-shop-middle-bar lg:block hidden">
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
              <Link href="/">
                <Image
                  src={logo}
                  width="152"
                  height="36"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox />
            </div>
            <div className="flex space-x-6 items-center">
              <div className="compaire relative">
                <Link href="/products-compaire">
                  <span>
                    <Compair />
                  </span>
                </Link>
                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-amber-300 text-black">
                  2
                </span>
              </div>
              <div className="favorite relative">
                <Link href="/wishlist">
                  <span>
                    <ThinLove />
                  </span>
                </Link>
                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-amber-300 text-black">
                  1
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/cart">
                    <span>
                      <ThinBag />
                    </span>
                  </Link>
                  <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-amber-300 text-black">
                    15
                  </span>
                </div>
                <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block" />
              </div>
              <div>
                <button type="button" aria-label="People">
                  <span>
                    <ThinPeople />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
