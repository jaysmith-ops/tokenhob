import axios from "axios";
import { Bitcoin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "./icons";

type Props = {};

type ResponseType = {
  bitcoin: {
    usd: number;
  };
  dogecoin: {
    usd: number;
  };
  ethereum: {
    usd: number;
  };
};

const HeroSection = (props: Props) => {
  const [coinData, setCoinData] = useState<{ [name: string]: number }>();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      axios
        .get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd"
        )
        .then((res) => {
          const response: ResponseType = res.data;

          let data: { [name: string]: number } = {};
          Object.entries(response).map((res) => {
            data[res[0]] = res[1].usd;
            setCoinData(data);
          });
          setIsLoaded(true);
        })
        .catch((err) => {});
    }
  }, []);

  useEffect(() => {
    console.log({ coinData });
  }, [coinData]);

  return (
    <section className="h-full pt-20">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 h-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 h-full">
          <div className="relative overflow-hidden grid rounded-lg sm:h-80 lg:order-last lg:h-full">
            <div className="relative w-full grid h-80 max-h-screen md:h-[600px]">
              <img
                alt=""
                src="/3d-rendewring-cryptocurency-distribution-concept.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="absolute flex justify-center items-center flex-wrap gap-4 px-4 py-2 bottom-0">
              <div className="flex justify-between items-center gap-4 bg-app-purple ring-2 ring-white rounded-xl px-3 md:px-5 py-2 md:py-4">
                <div className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-12 md:h-12">
                  <Icons.Bitcoin className="text-white font-bold w-5 h-5 md:w-9 md:h-9" />
                </div>

                <div className="w-fit">
                  <h3 className=" text-base md:text-lg/tight  font-medium text-white">
                    Bitcoin
                  </h3>

                  <p className="mt-0.5 text-white  text-sm">
                    {coinData?.bitcoin}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-4 bg-app-purple ring-2 ring-white rounded-xl px-3 md:px-5 py-2 md:py-4">
                <div className="flex relative justify-center items-center bg-white rounded-full w-6 h-6 md:w-12 md:h-12">
                  <Icons.Dogecoin className="text-white font-bold w-5 h-5 md:w-9 md:h-9" />
                </div>

                <div className="w-fit">
                  <h3 className=" text-base md:text-lg/tight   font-medium text-white">
                    Dogecoin
                  </h3>

                  <p className="mt-0.5 text-white text-sm">
                    {coinData?.dogecoin}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-4 bg-app-purple ring-2 ring-white rounded-xl px-3 md:px-5 py-2 md:py-4">
                <div className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-12 md:h-12">
                  <Icons.Ethereum className="text-white font-bold w-5 h-5 md:w-9 md:h-9" />
                </div>

                <div>
                  <h3 className=" text-base md:text-lg/tight  font-medium text-white">
                    Ethereum
                  </h3>

                  <p className="mt-0.5 text-white  text-sm">
                    {coinData?.bitcoin}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-5xl text-white font-lexend">
              CLAIM REWARD BONUS/AIRDROP
            </h2>

            <Link
              to="/wallet"
              className="mt-8 inline-block rounded bg-white px-12 py-3 text-base md:text-lg font-medium text-app-dark transition hover:bg-app-purple hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Claim now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
