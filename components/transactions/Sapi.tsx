import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import toast, { Toaster } from "react-hot-toast";
import { useCurrency } from "../../hooks/useCurrency";

import {
  HiMapPin,
  HiUser,
  HiUsers,
  HiPhone,
  HiChevronRight,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const Sapi = () => {
  const [tipeQurban, setTipeQurban] = useState("");
  const [tipeSapi, setTipeSapi] = useState("");

  const dataHewan = [
    {
      name: "Sapi tipe premium A",
      code: "A",
      price: {
        sendiri: "25550000",
        rombongan: "3650000",
      },
      spec: {
        umur: "2",
        berat: "400",
      },
    },
    {
      name: "Sapi tipe medium B",
      code: "B",
      price: {
        sendiri: "24500000",
        rombongan: "3500000",
      },
      spec: {
        umur: "2",
        berat: "350",
      },
    },
    {
      name: "Sapi tipe standar C",
      code: "C",
      price: {
        sendiri: "23450000",
        rombongan: "3350000",
      },
      spec: {
        umur: "2",
        berat: "300",
      },
    },
  ];

  return (
    <div>
      <div className="w-full h-[180px] bg-emerald-200 rounded-xl"></div>
      <div>
        <div className="qurban-type">
          <div className="heading pb-2 mt-5">
            <h2 className="text-base font-semibold text-gray-900">Tipe</h2>
            <p className="text-sm text-gray-500">Pilih tipe qurban</p>
          </div>
          <div className="inline-flex w-full rounded-md" role="group">
            <button
              type="button"
              onClick={() => {
                setTipeQurban("Sendiri");
              }}
              style={{
                border:
                  tipeQurban == "Sendiri"
                    ? "1px solid #34d399"
                    : "1px solid #e5e7eb",
                backgroundColor: tipeQurban == "Sendiri" ? "#ecfdf5" : "#fff",
              }}
              className={`inline-flex w-full items-center px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 `}
            >
              <HiUser className="text-gray-400 mr-2 text-lg" />
              Qurban Sendiri
            </button>
            <button
              type="button"
              onClick={() => {
                setTipeQurban("Rombongan");
              }}
              style={{
                border:
                  tipeQurban == "Rombongan"
                    ? "1px solid #34d399"
                    : "1px solid #e5e7eb",
                backgroundColor: tipeQurban == "Rombongan" ? "#ecfdf5" : "#fff",
              }}
              className={` inline-flex w-full items-center px-4 py-3 text-sm font-medium text-gray-900 bg-white border-r border-b border-t border-gray-200 rounded-r-md hover:bg-gray-100`}
            >
              <HiUsers className="text-gray-400 mr-2 text-lg" />
              Qurban Rombongan
            </button>
          </div>
        </div>

        <div className="qurban-product">
          <div className="heading pb-2 mt-5">
            <h2 className="text-base font-semibold text-gray-900">
              Hewan qurban
            </h2>
            <p className="text-sm text-gray-500">Pilih tipe hewan qurban</p>
          </div>

          {dataHewan?.map((hewan, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  if (tipeQurban == "") {
                    toast.error("Pilih tipe qurban terlebih dahulu", {
                      duration: 4000,
                      position: "bottom-center",
                    });
                  } else {
                    setTipeSapi(hewan.code);
                  }
                }}
              >
                <div
                  className={` ${index == 0 && "rounded-t-lg border"} ${
                    index == 1 && "border-r border-l"
                  } ${index == 2 && "rounded-b-lg border"} ${
                    tipeQurban == "" ? "cursor-not-allowed" : "cursor-pointer"
                  } inline-flex  items-center p-2 w-full h-auto border-gray-200`}
                >
                  <div className="w-[10%] flex items-center justify-center">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-50">
                      <p className="text-xl font-bold text-emerald-600">
                        {" "}
                        {hewan.code}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-[80%] pl-3 flex items-start justify-center">
                    <div className="flex flex-col items-start w-full">
                      <h2 className="font-medium text-gray-700">
                        {hewan.name}
                      </h2>
                      {tipeQurban !== "" ? (
                        <div className="flex items-center mt-1">
                          <span className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                            berat {hewan.spec.berat}KG
                          </span>
                          <span className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                            usia {hewan.spec.umur}th
                          </span>
                          <p className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                            Rp{" "}
                            {tipeQurban == "Sendiri"
                              ? useCurrency(hewan.price.sendiri)
                              : useCurrency(hewan.price.rombongan)}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <Skeleton width={80} />
                          <Skeleton width={40} />
                          <Skeleton width={90} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-[10%] flex items-center justify-center">
                    <button
                      className={`rounded-full p-2.5  border  ${
                        tipeSapi == hewan.code
                          ? "border-0 bg-emerald-300"
                          : "border-gray-200 bg-white"
                      }`}
                    ></button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="inline-flex cursor-pointer items-center p-2 w-full h-auto rounded-t-lg border border-gray-200">
            <div className="w-[10%] flex items-center justify-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                <p className="text-xl font-bold text-blue-600">A</p>
              </div>
            </div>
            <div className="w-[80%] pl-3 flex items-start justify-center">
              <div className="flex flex-col items-start w-full">
                <h2 className="font-medium text-gray-700">
                  Sapi rombongan tipe A
                </h2>
                <div className="flex items-center mt-1">
                  <span className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                    berat 400KG
                  </span>
                  <span className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                    usia 2 th
                  </span>
                  <p className="text-sm text-gray-500">Rp 24.000.000</p>
                </div>
              </div>
            </div>
            <div className="w-[10%] flex items-center justify-center">
              <button className="rounded-full p-2.5 bg-white border border-gray-200"></button>
            </div>
          </div>

          <div className="inline-flex cursor-pointer items-center p-2 w-full h-auto border-l border-r border-gray-200">
            <div className="w-[10%] flex items-center justify-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                <p className="text-xl font-bold text-blue-600">B</p>
              </div>
            </div>
            <div className="w-[80%] pl-3 flex items-start justify-center">
              <div className="flex flex-col items-start w-full">
                <h2 className="font-medium text-gray-700">
                  Sapi rombongan tipe B
                </h2>
                <div className="flex items-center mt-1">
                  <span className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                    berat 400KG
                  </span>
                  <span className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                    usia 2 th
                  </span>
                  <p className="text-sm text-gray-500">Rp 24.000.000</p>
                </div>
              </div>
            </div>
            <div className="w-[10%] flex items-center justify-center">
              <button className="rounded-full p-2.5 bg-white border border-gray-200"></button>
            </div>
          </div>

          <div className="inline-flex cursor-pointer items-center p-2 w-full h-auto rounded-b-lg border border-gray-200">
            <div className="w-[10%] flex items-center justify-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                <p className="text-xl font-bold text-blue-600">C</p>
              </div>
            </div>
            <div className="w-[80%] pl-3 flex items-start justify-center">
              <div className="flex flex-col items-start w-full">
                <h2 className="font-medium text-gray-700">
                  Sapi rombongan tipe C
                </h2>
                <div className="flex items-center mt-1">
                  <span className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                    berat 400KG
                  </span>
                  <span className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                    usia 2 th
                  </span>
                  <p className="text-sm text-gray-500">Rp 24.000.000</p>
                </div>
              </div>
            </div>
            <div className="w-[10%] flex items-center justify-center">
              <button className="rounded-full p-2.5 bg-white border border-gray-200"></button>
            </div>
          </div> */}
        </div>

        <div className="user-information mt-8">
          <div className="heading border-b pb-2">
            <h2 className="text-base font-semibold text-gray-900">
              Informasi shohibul qurban
            </h2>
            <p className="text-sm text-gray-500">
              Pastikan data yang anda isi sudah benar
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama lengkap
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nama lengkap anda"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nomor Whatsapp
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiPhone className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nomor WA aktif "
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Alamat lengkap
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiMapPin className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Alamat lengkap anda"
                />
              </div>
            </div>
          </div>

          <button className="w-full mt-8 shadow-none border-0 bg-black hover:bg-gray-900 py-3 px-4 rounded-lg font-medium text-white">
            Konfirmasi pesanan sapi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sapi;
