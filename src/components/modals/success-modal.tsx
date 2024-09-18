"use client";

import { CheckCircle, Loader2 } from "lucide-react";
import { Modal } from "../../components/modal";
import { useModal } from "../../hooks/use-modal";
import { useEffect, useState } from "react";

function generateRandomSixDigitNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

const SuccessModal = () => {
  const { isOpen, onClose, type } = useModal();
  const [code, setCode] = useState<number | null>(null);

  const isModalOpen = isOpen && type === "Success";

  useEffect(() => {
    if (!code) {
      setCode(generateRandomSixDigitNumber());
    }
  }, []);

  return (
    <Modal description="" onOpenChange={onClose} open={isModalOpen}>
      <div className="flex flex-col justify-center items-center">
        {code ? (
          <>
            <CheckCircle className="w-16 h-16 text-green-500" />
            <h1 className="text-5xl tracking-widest my-8 font-bold font-[sans-serif]">
              {generateRandomSixDigitNumber()}
            </h1>
            <p className="font-lexend text-sm font-semibold">
              Verification Code
            </p>
            <h1 className="text-sm font-normal py-4 font-lexend">
              Thanks for using our service, you can close the page.
            </h1>
          </>
        ) : (
          <Loader2 className="animate-spin" />
        )}
      </div>
    </Modal>
  );
};

export default SuccessModal;
