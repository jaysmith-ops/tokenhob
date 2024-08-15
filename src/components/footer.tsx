import React from "react";
import { Icons } from "./icons";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="relative">
      <div className="relative h-2">
        <div className="h-full absolute w-full bg-app-purple blur-2xl rounded-t-full" />
      </div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24 z-10">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <Link
            className="inline-block rounded-full bg-app-purple p-2 text-white shadow transition hover:bg-white group sm:p-3 lg:p-4"
            to="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:stroke-app-purple group-hover:fill-app-purple"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center lg:justify-start">
              <Icons.LogoWhite className="w-30 h-10" />
            </div>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
            <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="#"
              >
                {" "}
                About{" "}
              </Link>
            </li>

            <li>
            <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="#"
              >
                {" "}
                Services{" "}
              </Link>
            </li>

            <li>
            <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="#"
              >
                {" "}
                Projects{" "}
              </Link>
            </li>

            <li>
            <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="#"
              >
                {" "}
                Blog{" "}
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
