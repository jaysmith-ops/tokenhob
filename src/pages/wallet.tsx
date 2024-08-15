import React, { useEffect } from "react";
import wallet, { WalletType } from "../lib/wallet-images";
import { useNavigate } from "react-router-dom";
import { useWallet } from "../hooks/use-wallet";

type Props = {};

const Wallet = (props: Props) => {
  const navigate = useNavigate();
  const {onSelect} = useWallet()

  const handleNavigate = (wallet: WalletType) => {
    navigate("/connect-wallet");
    onSelect(wallet)
  };

  useEffect(() => {
    document.title = "Tokenhob | Wallets";
  }, []);
  return (
    <div className="px-4 py-6 mt-24">
      <section className="max-w-screen-xl">
        <div className="flex flex-col">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl text-center">
            Wallets
          </h1>
          <p className="text-white text-xs sm:text-sm md:text-base font-light py-5 text-center leading-9">
            Multiple iOS and Android wallets support the DappTradeFix protocol.
            Simply scan a QR code from your desktop computer screen to start
            securely using a dApp with your mobile wallet. Interaction between
            mobile apps and mobile browsers are supported via mobile deep
            linking.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-2 gap-5">
            {wallet.map((el) => (
              <div
                key={el.id}
                className=" bg-white rounded-lg cursor-pointer"
                onClick={() => handleNavigate(el)}
              >
                <div className="flex flex-col justify-between items-center h-full">
                  <div className="w-20 h-20 flex justify-center items-center">
                    <img
                      src={el.imagePath}
                      alt={el.name}
                      className="rounded-full w-10 h-10 sm:w-16 sm:h-16"
                    />
                  </div>

                  <div className="bg-app-dark w-full border-b border-l border-r rounded-b-lg">
                    <p className="w-full text-white text-center text-xs sm:text-sm  py-2">
                      {el.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallet;
