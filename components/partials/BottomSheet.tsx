import { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import Sapi from "../transactions/Sapi";
import Kambing from "../transactions/Kambing";

import { FaCrow } from "react-icons/fa";
import { RiArrowLeftSLine, RiCloseFill } from "react-icons/ri";

interface SheetProps {
  isOpen: boolean;
}

const BottomSheetMain: React.FC<SheetProps> = ({ isOpen }) => {
  const [open, setOpen] = useState(false);
  const [tipeHewanQurban, setTipeHewanQurban] = useState("");
  const [sheetState, setSheetState] = useState(1);
  const [sheetHeight, setSheetHeight] = useState(0.5);

  useEffect(() => {
    setOpen(true);
    setSheetHeight(0.5);
  }, []);

  function onDismiss() {
    setOpen(false);
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        open={open}
        blocking={true}
        onDismiss={onDismiss}
        // defaultSnap={({ snapPoints, lastSnap }) =>
        //   lastSnap ?? Math.min(...snapPoints)
        // }
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 5,
          maxHeight * sheetHeight,
        ]}
        header={
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                setSheetState(1);
                setSheetHeight(0.5);
              }}
              className="rounded-full p-2 bg-gray-100"
            >
              <RiArrowLeftSLine className="text-lg text-gray-700" />
            </button>
            <h2 className="text-center font-medium text-lg text-gray-700">
              Pilih jenis hewan
            </h2>
            <button
              onClick={onDismiss}
              className="rounded-full p-2 bg-gray-100"
            >
              <RiCloseFill className="text-lg text-gray-700" />
            </button>
          </div>
        }
        // footer={
        //   //   <button
        //   //     onClick={onDismiss}
        //   //     className="m-0 bg-blue-500 py-2.5 px-4 rounded-lg font-medium text-white"
        //   //   >
        //   //     Konfirmasi hewan qurban
        //   //   </button>

        //   <button
        //     onClick={onDismiss}
        //     className="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50"
        //   >
        //     Konfirmasi hewan qurban
        //   </button>
        // }
      >
        <div className="h-[100%] m-4">
          {sheetState == 1 ? (
            <div>
              <div className="flex flex-row gap-3 mt-5">
                <div
                  onClick={() => {
                    setTipeHewanQurban("Sapi");
                  }}
                  className={`flex flex-col items-center w-full h-auto p-4 border border-gray-50 bg-white rounded-md shadow cursor-pointer transition ${
                    tipeHewanQurban == "Sapi" ? "border border-emerald-200" : ""
                  }`}
                >
                  <div className="rounded-full p-3 bg-emerald-50">
                    <FaCrow className="text-emerald-400 text-xl" />
                  </div>
                  <div className="text-center">
                    <h2 className="mt-2 font-medium text-gray-700 text-md">
                      Kurban Sapi
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm">
                      Pilih sapi dengan berbagai tipe
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setTipeHewanQurban("Kambing");
                  }}
                  className={`flex flex-col items-center w-full h-auto p-4 border border-gray-50 bg-white rounded-md shadow cursor-pointer transition ${
                    tipeHewanQurban == "Kambing"
                      ? "border border-emerald-200"
                      : ""
                  }`}
                >
                  <div className="rounded-full p-3 bg-emerald-50">
                    <FaCrow className="text-emerald-400 text-xl" />
                  </div>
                  <div className="text-center">
                    <h2 className="mt-2 font-medium text-gray-700 text-md">
                      Kurban Kambing
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm">
                      Pilih kambing dengan berbagai tipe
                    </p>
                  </div>
                </div>
              </div>
              <button
                disabled={!tipeHewanQurban}
                onClick={() => {
                  setSheetState(2);
                  setSheetHeight(1);
                }}
                className="w-full mt-4 shadow-none border-0 bg-black py-3 px-4 rounded-lg font-medium text-white"
              >
                Pilih {tipeHewanQurban}
              </button>
            </div>
          ) : null}

          {tipeHewanQurban == "Sapi" && sheetState == 2 ? <Sapi /> : null}
          {tipeHewanQurban == "Kambing" && sheetState == 2 ? <Kambing /> : null}
        </div>
      </BottomSheet>
    </>
  );
};

export default BottomSheetMain;
