"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BuyButton = ({ animal }) => {
  const router = useRouter();

  const handleBuy = () => {
    toast.success(`Booking started for ${animal.name}`);

    setTimeout(() => {
      router.push("/BuyForm");
    }, 1500); // delay so user can see toast
  };

  return (
    <button
      onClick={handleBuy}
      className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 py-2.5 rounded-lg font-bold shadow-md"
    >
      Buy Now
    </button>
  );
};

export default BuyButton;