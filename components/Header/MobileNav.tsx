import Link from "next/link";
import Image from "next/image";
import { ThinBag } from "../Helpers/icons/ThinBag";

import logo from "../../public/images/logo.png";

export default function MobileNav() {
  return (
    <div className="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
      <div className="w-full h-full flex justify-between items-center px-5">
        <div>
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
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
        <div className="cart relative cursor-pointer">
          <a href="/cart">
            <span>
              <ThinBag />
            </span>
          </a>
          <span className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] 'bg-qh3-blue text-white'`}>
            15
          </span>
        </div>
      </div>
    </div>
  )
}
