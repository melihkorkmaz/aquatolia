import Image from "next/image";
import Link from "next/link";

import { ThinLove } from "../Helpers/icons/ThinLove";
import { ThinPeople } from "../Helpers/icons/ThinPeople";
import { SearchBox } from "../Helpers/SearchBox";

import logo from "../../public/images/logo.png";
import CartButton from "../Cart/CartButton";

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
              <div className="favorite relative">
                <Link href="/wishlist">
                  <span>
                    <ThinLove />
                  </span>
                </Link>
              </div>
              <div className="cart-wrapper group relative py-4">
                <CartButton /> 
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
