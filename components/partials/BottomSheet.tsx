import { useEffect, useState, useCallback } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import Sapi from "../transactions/Sapi";
import Kambing from "../transactions/Kambing";

import { FaCrow } from "react-icons/fa";
import { RiArrowLeftSLine, RiCloseFill } from "react-icons/ri";
import { toast } from "react-hot-toast";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const BottomSheetMain: React.FC<SheetProps> = ({ isOpen, onClose, onOpen }) => {
  const [open, setOpen] = useState(false);
  const [tipeHewanQurban, setTipeHewanQurban] = useState("");
  const [sheetState, setSheetState] = useState(1);
  const [sheetHeight, setSheetHeight] = useState(0.5);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);
  const handleOpen = useCallback(() => {
    onOpen();
  }, [onOpen]);
  if (!isOpen) return null;

  return (
    <>
      <BottomSheet
        open={isOpen}
        blocking={true}
        onDismiss={handleClose}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 5,
          maxHeight * sheetHeight,
        ]}
        header={
          <div className="flex justify-between items-center">
            {sheetState !== 1 ? (
              <button
                onClick={() => {
                  setSheetState(1);
                  setSheetHeight(0.5);
                }}
                className="rounded-full p-2 bg-gray-100"
              >
                <RiArrowLeftSLine className="text-lg text-gray-700" />
              </button>
            ) : (
              <button className="rounded-full"></button>
            )}

            <h2 className="text-center font-medium text-lg text-gray-700">
              Pilih jenis hewan
            </h2>
            <button
              onClick={handleClose}
              className="rounded-full p-2 bg-gray-100"
            >
              <RiCloseFill className="text-lg text-gray-700" />
            </button>
          </div>
        }
      >
        <div className="h-[100%] m-4">
          {sheetState == 1 ? (
            <div>
              <div className="flex flex-row gap-3 mt-5">
                <div
                  onClick={() => {
                    setTipeHewanQurban("Sapi");
                  }}
                  style={{
                    border: `${
                      tipeHewanQurban == "Sapi"
                        ? "1px solid #a7f3d0"
                        : "1px solid #f9fafb"
                    }`,
                  }}
                  className={`flex flex-col items-center w-full h-auto p-4 border border-gray-50 bg-white rounded-md shadow cursor-pointer transition `}
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
                  style={{
                    border: `${
                      tipeHewanQurban == "Kambing"
                        ? "1px solid #a7f3d0"
                        : "1px solid #f9fafb"
                    }`,
                  }}
                  className={`flex flex-col items-center w-full h-auto p-4 border border-gray-50 bg-white rounded-md shadow cursor-pointer transition`}
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
                onClick={() => {
                  if (!tipeHewanQurban) {
                    toast.error("Pilih jenis hewan qurban terlebih dahulu", {
                      position: "bottom-center",
                    });
                  } else {
                    setSheetState(2);
                    setSheetHeight(1);
                  }
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
