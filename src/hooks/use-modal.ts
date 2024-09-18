import { create } from "zustand";

export type ModalType = "Success" | "Error"

interface ModalData {
}
interface useModalProps {
  type: ModalType | null;
  isOpen: boolean;
  data: ModalData;
  onClose: () => void;
  onOpen: (type: ModalType, data?: ModalData) => void;
}

export const useModal = create<useModalProps>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false, type: null, data: {} }),
}));
