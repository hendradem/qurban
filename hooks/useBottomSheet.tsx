import { create } from "zustand";

interface BottomSheetStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useBottomSheet = create<BottomSheetStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useBottomSheet;
