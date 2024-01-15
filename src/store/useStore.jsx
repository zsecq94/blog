import { create } from "zustand";

export const useStore = create((set) => ({
  url: "",
  changeUrl: (newUrl) => set(() => ({ url: newUrl })),
}));
