import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "./icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="absolute w-full">
      <div className="relative">
        <div className="h-full absolute w-full bg-app-purple blur-2xl rounded-b-full -z-[1]" />
        <div className="py-2 bg-app-dark ">
          <div className="flex h-16 max-w-screen-xl mx-auto justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 ">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <Icons.LogoWhite className="w-28 sm:w-32 h-12 " />
            </Link>

            <div className="flex items-center justify-end md:justify-between">
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="block rounded-md bg-white px-2 md:px-5 py-1 md:py-2.5 text-xs sm:text-sm font-medium text-app-purple transition hover:bg-app-purple hover:text-white duration-500"
                    to="/wallet"
                  >
                    Connect Wallet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
