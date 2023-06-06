import { create } from "zustand";

interface TransactionModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useTransacationModal = create<TransactionModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useTransacationModal;
