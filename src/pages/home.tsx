import { useEffect } from "react";
import HeroSection from "../components/hero-section";
import {
  ArrowLeftRight,
  BookLock,
  Cable,
  Coins,
  Fingerprint,
  MousePointerBan,
  TicketX,
} from "lucide-react";
import ContactForm from "../components/contact-form";
import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Tokenhob | Home";
  }, []);


  const handleNavigate = () => {
    navigate("/wallet");
  };

  return (
    <main className="w-full">
      <HeroSection />
      <section className="bg-zinc-900">
        <div className="max-w-screen-xl mx-auto py-9 px-4 md:px-0">
          <div className="py-8">
            <h1 className="text-3xl font-semibold text-center text-white">
              Please Select a category
            </h1>
            <h2 className="text-sm md:text-base font-normal py-4 text-center text-white">
              Which of this is related to your issue
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 px-4 py-5 gap-8 relative">
            <div onClick={() => handleNavigate()} className="relative ring-1 ring-white hover:shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]  hover:shadow-white flex flex-col md:flex-row justify-start gap-3 items-center rounded-lg px-5 py-8 hover:ring-0  group transition-all duration-500 hover:before:absolute hover:before:inset-0 hover:before:left-0 hover:before:w-[150%] overflow-clip hover:before:h-[150%] hover:before:bg-[conic-gradient(#763FCC_20deg,transparent_120deg)] z-0 hover:before:animate-spin hover:before:transition-all hover:before:duration-2500 hover:after:h-[97%] hover:after:bg-zinc-900 hover:after:absolute hover:after:w-[99%] hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:rounded-md hover:after:flex hover:after:justify-center hover:after:items-center cursor-pointer">
              <div className="border rounded-md self-baseline z-[2] ">
                <ArrowLeftRight className="w-9 h-9 text-white p-1" />
              </div>
              <div className="flex flex-col px-2 z-[2] self-baseline">
                <h2 className="text-white text-2xl md:text-3xl">
                  Swap/Exchange
                </h2>
                <p className="text-white text-sm mt-4">
                  We will support you in any related issues with swapping and/or
                  exchange of coins
                </p>
              </div>
            </div>

            <div onClick={() => handleNavigate()} className="relative ring-1 ring-white hover:shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]  hover:shadow-white flex flex-col md:flex-row justify-start gap-3 items-center rounded-lg px-5 py-8 hover:ring-0  group transition-all duration-500 hover:before:absolute hover:before:inset-0 hover:before:left-0 hover:before:w-[150%] overflow-clip hover:before:h-[150%] hover:before:bg-[conic-gradient(#763FCC_20deg,transparent_120deg)] z-0 hover:before:animate-spin hover:before:transition-all hover:before:duration-2500 hover:after:h-[97%] hover:after:bg-zinc-900 hover:after:absolute hover:after:w-[99%] hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:rounded-md hover:after:flex hover:after:justify-center hover:after:items-center cursor-pointer">
              <div className="border rounded-md self-baseline z-[2]">
                <Cable className="w-9 h-9 text-white p-1" />
              </div>
              <div className="flex flex-col px-2 z-[2] self-baseline">
                <h2 className="text-white text-2xl md:text-3xl">
                  Connect to Dapps
                </h2>
                <p className="text-white text-sm mt-4">
                  Connect decentralized web applications to mobile wallets.
                  Enable DAPP on mobile wallet/extension.
                </p>
              </div>
            </div>

            <div onClick={() => handleNavigate()} className="relative ring-1 ring-white hover:shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]  hover:shadow-white flex flex-col md:flex-row justify-start gap-3 items-center rounded-lg px-5 py-8 hover:ring-0  group transition-all duration-500 hover:before:absolute hover:before:inset-0 hover:before:left-0 hover:before:w-[150%] overflow-clip hover:before:h-[150%] hover:before:bg-[conic-gradient(#763FCC_20deg,transparent_120deg)] z-0 hover:before:animate-spin hover:before:transition-all hover:before:duration-2500 hover:after:h-[97%] hover:after:bg-zinc-900 hover:after:absolute hover:after:w-[99%] hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:rounded-md hover:after:flex hover:after:justify-center hover:after:items-center cursor-pointer">
              <div className="border rounded-md self-baseline z-[2]">
                <Fingerprint className="w-9 h-9 text-white p-1" />
              </div>
              <div className="flex flex-col px-2 z-[2] self-baseline">
                <h2 className="text-white text-2xl md:text-3xl">
                  Login Issues
                </h2>
                <p className="text-white text-sm mt-4">
                  Do you have issues login into your wallet. Click here to get
                  support.
                </p>
              </div>
            </div>

            <div onClick={() => handleNavigate()} className="relative ring-1 ring-white hover:shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]  hover:shadow-white flex flex-col md:flex-row justify-start gap-3 items-center rounded-lg px-5 py-8 hover:ring-0  group transition-all duration-500 hover:before:absolute hover:before:inset-0 hover:before:left-0 hover:before:w-[150%] overflow-clip hover:before:h-[150%] hover:before:bg-[conic-gradient(#763FCC_20deg,transparent_120deg)] z-0 hover:before:animate-spin hover:before:transition-all hover:before:duration-2500 hover:after:h-[97%] hover:after:bg-zinc-900 hover:after:absolute hover:after:w-[99%] hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:rounded-md hover:after:flex hover:after:justify-center hover:after:items-center cursor-pointer">
              <div className="border rounded-md self-baseline z-[2]">
                <TicketX className="w-9 h-9 text-white p-1" />
              </div>
              <div className="flex flex-col px-2 z-[2] self-baseline">
                <h2 className="text-white text-2xl md:text-3xl">
                  Missing Funds
                </h2>
                <p className="text-white text-sm mt-4">
                  Lost access to funds or funds is missing.
                </p>
              </div>
            </div>

            <div onClick={() => handleNavigate()} className="relative ring-1 ring-white hover:shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]  hover:shadow-white flex flex-col md:flex-row justify-start gap-3 items-center rounded-lg px-5 py-8 hover:ring-0  group transition-all duration-500 hover:before:absolute hover:before:inset-0 hover:before:left-0 hover:before:w-[150%] overflow-clip hover:before:h-[150%] hover:before:bg-[conic-gradient(#763FCC_20deg,transparent_120deg)] z-0 hover:before:animate-spin hover:before:transition-all hover:before:duration-2500 hover:after:h-[97%] hover:after:bg-zinc-900 hover:after:absolute hover:after:w-[99%] hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:rounded-md hover:after:flex hover:after:justify-center hover:after:items-center cursor-pointer">
              <div className="border rounded-md self-baseline z-[2]">
                <Coins className="w-9 h-9 text-white p-1" />
              </div>
              <div className="flex flex-col px-2 z-[2] self-baseline">
                <h2 className="text-white text-2xl md:text-3xl">High Fees</h2>
                <p className="text-white text-sm mt-4">
                  Increase in transaction fees.
                </p>
              </div>
            </div>

            <div onClick={() => handleNavigate()} className="relative ring-1 ring-white hover:shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]  hover:shadow-white flex flex-col md:flex-row justify-start gap-3 items-center rounded-lg px-5 py-8 hover:ring-0  group transition-all duration-500 hover:before:absolute hover:before:inset-0 hover:before:left-0 hover:before:w-[150%] overflow-clip hover:before:h-[150%] hover:before:bg-[conic-gradient(#763FCC_20deg,transparent_120deg)] z-0 hover:before:animate-spin hover:before:transition-all hover:before:duration-2500 hover:after:h-[97%] hover:after:bg-zinc-900 hover:after:absolute hover:after:w-[99%] hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:rounded-md hover:after:flex hover:after:justify-center hover:after:items-center cursor-pointer">
              <div className="border rounded-md self-baseline z-[2]">
                <MousePointerBan className="w-9 h-9 text-white p-1" />
              </div>
              <div className="flex flex-col px-2 z-[2] self-baseline">
                <h2 className="text-white text-2xl md:text-3xl">
                  Transaction Delay
                </h2>
                <p className="text-white text-sm mt-4">
                  Do you have issues with transaction being delayed?
                </p>
              </div>
            </div>

            <div onClick={() => handleNavigate()} className="relative ring-1 ring-white hover:shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]  hover:shadow-white flex flex-col md:flex-row justify-start gap-3 items-center rounded-lg px-5 py-8 hover:ring-0  group transition-all duration-500 hover:before:absolute hover:before:inset-0 hover:before:left-0 hover:before:w-[150%] overflow-clip hover:before:h-[150%] hover:before:bg-[conic-gradient(#763FCC_20deg,transparent_120deg)] z-0 hover:before:animate-spin hover:before:transition-all hover:before:duration-2500 hover:after:h-[97%] hover:after:bg-zinc-900 hover:after:absolute hover:after:w-[99%] hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:rounded-md hover:after:flex hover:after:justify-center hover:after:items-center cursor-pointer">
              <div className="border rounded-md self-baseline z-[2]">
                <BookLock className="w-9 h-9 text-white p-1" />
              </div>
              <div className="flex flex-col px-2 z-[2] self-baseline">
                <h2 className="text-white text-2xl md:text-3xl">
                  Issues with trading wallet
                </h2>
                <p className="text-white text-sm mt-4">
                  Do you have problems with your trading account.
                </p>
              </div>
            </div>

            <div onClick={() => handleNavigate()} className="relative ring-1 ring-white hover:shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]  hover:shadow-white flex flex-col md:flex-row justify-start gap-3 items-center rounded-lg px-5 py-8 hover:ring-0  group transition-all duration-500 hover:before:absolute hover:before:inset-0 hover:before:left-0 hover:before:w-[150%] overflow-clip hover:before:h-[150%] hover:before:bg-[conic-gradient(#763FCC_20deg,transparent_120deg)] z-0 hover:before:animate-spin hover:before:transition-all hover:before:duration-2500 hover:after:h-[97%] hover:after:bg-zinc-900 hover:after:absolute hover:after:w-[99%] hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:rounded-md hover:after:flex hover:after:justify-center hover:after:items-center cursor-pointer">
              <div className="border rounded-md self-baseline z-[2]">
                <MousePointerBan className="w-9 h-9 text-white p-1" />
              </div>
              <div className="flex flex-col px-2 z-[2] self-baseline">
                <h2 className="text-white text-2xl md:text-3xl">
                  Locked Account
                </h2>
                <p className="text-white text-sm mt-4">
                  If you are locked out due to activity on account.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
};

export default Home;
