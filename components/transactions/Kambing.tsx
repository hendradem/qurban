import React, { useState } from "react";
import toast from "react-hot-toast";
import convertCurrency from "../../libs/currency";

import { HiMapPin, HiUser, HiPhone } from "react-icons/hi2";

const Kambing = () => {
  const [tipeKambing, setTipeKambing] = useState("");
  const [tipeKambingFull, setTipeKambingFull] = useState("");
  const [hargaKambing, setHargaKambing] = useState("");
  const [namaShohibul, setNamaShohibul] = useState("");
  const [nomorWAShohibul, setNomorWAShohibul] = useState("");
  const [alamatShohibul, setAlamatShohibul] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const dataHewan = [
    {
      name: "Kambing tipe premium A",
      code: "A",
      price: {
        min: "3400000",
        max: "3700000",
      },
      spec: {
        berat: "35-40",
      },
    },
    {
      name: "Kambing tipe medium B",
      code: "B",
      price: {
        min: "3000000",
        max: "3300000",
      },
      spec: {
        berat: "31-35",
      },
    },
    {
      name: "Kambing tipe standar C",
      code: "C",
      price: {
        min: "2700000",
        max: "2900000",
      },
      spec: {
        berat: "29-31",
      },
    },
  ];

  const onConfirm = () => {
    if (!namaShohibul || !nomorWAShohibul || !alamatShohibul || !tipeKambing) {
      toast.error("Semua pilihan dan kolom wajib diisi!", {
        position: "bottom-center",
      });
    } else {
      const whatsAppAdmin = "6285643172430";

      let url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
        whatsAppAdmin
      )}&text=*Assalamu'alaikum%2C%20saya%20mau%20pesan%20hewan%20qurban*%0A%0A*Nama*%20%3A%20${encodeURIComponent(
        namaShohibul
      )}%0A*HP*%20%3A%20${encodeURIComponent(
        nomorWAShohibul
      )}%0A*Alamat*%20%3A%20${encodeURIComponent(
        alamatShohibul
      )}%0A*Tipe%20Hewan*%20%3A%20${encodeURIComponent(
        tipeKambingFull
      )}%0A*Harga*%20%3A%20${encodeURIComponent(
        hargaKambing
      )}%0A*Mau%20menerima%20daging*%20%3A%20${encodeURIComponent(
        isChecked ? "mau" : "tidak"
      )}`;

      window.open(`${url}`, "_blank");
    }
  };

  return (
    <div>
      <div className="w-full h-[120px] bg-orange-200 rounded-xl"></div>
      <div>
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
                  setTipeKambing(hewan.code);
                  setTipeKambingFull(hewan.name);
                  setHargaKambing(hewan.price.min + "-" + hewan.price.max);
                }}
              >
                <div
                  className={` ${index == 0 && "rounded-t-lg border"} ${
                    index == 1 && "border-r border-l"
                  } ${index == 2 && "rounded-b-lg border"}  ${
                    tipeKambing == hewan.code ? " bg-gray-50" : ""
                  } inline-flex cursor-pointer items-center p-2 py-2.5 w-full h-auto border-gray-200`}
                >
                  <div className="w-[10%] flex items-center justify-center">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100">
                      <p className="text-xl font-bold text-orange-700">
                        {" "}
                        {hewan.code}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-[90%] lg:w-[80%] pl-3 flex items-start justify-center">
                    <div className="flex flex-col items-start w-full ">
                      <h2 className="font-medium text-gray-700">
                        {hewan.name}
                      </h2>
                      <div className="flex  flex-row lg:flex-row lg:items-center mt-1.5">
                        <span className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                          berat {hewan.spec.berat}KG
                        </span>
                        <p className="bg-[#F9FAFB] text-[#4B5563] border border-[#EBEDEE] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ">
                          {convertCurrency(hewan.price.min) +
                            " - " +
                            convertCurrency(hewan.price.max)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden w-[0%] lg:w-[10%] lg:flex items-center justify-center">
                    <button
                      className={`rounded-full p-2.5 border  ${
                        tipeKambing == hewan.code
                          ? "border-0 bg-orange-400"
                          : "border-gray-200 bg-white"
                      }`}
                    ></button>
                  </div>
                </div>
              </div>
            );
          })}
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
                  onChange={(e) => {
                    setNamaShohibul(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setNomorWAShohibul(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setAlamatShohibul(e.target.value);
                  }}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Alamat lengkap anda"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <div className="relative flex gap-x-2">
                <div className="flex h-6 items-center">
                  <input
                    onChange={() => {
                      setIsChecked(!isChecked);
                    }}
                    type="checkbox"
                    true-value="mau"
                    false-value="tidak"
                    className="h-4 w-4 rounded-lg border-gray-100 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm">
                  <label className="font-medium text-gray-900">
                    Menerima daging
                  </label>
                  <p className="text-gray-500">
                    Saya mau menerima daging qurban
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onConfirm}
            className="w-full my-8 shadow-none border-0 bg-black hover:bg-gray-900 py-3 px-4 rounded-lg font-medium text-white"
          >
            Konfirmasi pesanan Kambing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kambing;
