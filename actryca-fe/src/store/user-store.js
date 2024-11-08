import { create } from "zustand";

const useUserStore = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
  updateUserField: (field, value) =>
    set((state) => ({
      userData: { ...state.userData, [field]: value },
    })),
}));

export default useUserStore;
