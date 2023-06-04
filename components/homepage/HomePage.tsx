import React, { useState } from "react";
import {
  HiShoppingCart,
  HiPresentationChartLine,
  HiMail,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

import { BottomSheet } from "react-spring-bottom-sheet";
import BottomSheetMain from "../partials/BottomSheet";

export const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full p-4">
      {/* <div className="h-[200px]">
        <p className="text-center font-bold text-xl">Qurban MPD-MPR 1444H</p>
      </div> */}
      <div className="w-full h-[220px] bg-orange-200 rounded-xl"></div>
      <div className="mt-5 flex flex-row gap-2">
        <div
          onClick={() => setOpen(true)}
          className="cursor-pointer hover:bg-gray-50 transition w-full py-4 bg-white shadow-sm border border-gray-100 rounded-lg"
        >
          <div className="flex flex-col items-center text-gray-600">
            <HiShoppingCart size={28} />
            <span className="mt-1 font-medium text-sm text-gray-500">
              Pilih hewan
            </span>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-gray-50 transition w-full py-4 bg-white shadow-sm border border-gray-100 rounded-lg">
          <div className="flex flex-col items-center text-gray-600">
            <HiPresentationChartLine size={28} />
            <span className="mt-1 font-medium text-sm text-gray-500">
              Dokumentasi
            </span>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-gray-50 transition w-full py-4 bg-white shadow-sm border border-gray-100 rounded-lg">
          <div className="flex flex-col items-center text-gray-600">
            <HiMail size={28} />
            <span className="mt-1 font-medium text-sm text-gray-500">
              Kontak
            </span>
          </div>
        </div>
      </div>

      <BottomSheetMain isOpen />
    </div>
  );
};
