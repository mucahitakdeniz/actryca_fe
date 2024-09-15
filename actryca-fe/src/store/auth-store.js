import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      tokens: null,
      status: null,
      setUser: (user) => set({ user }),
      setTokens: (tokens) => set({ tokens }),
      setStatus: (status) => set({ status }), 
      logout: () => set({ user: null, tokens: null, status: null }), 
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage), 
    }
  )
);

export default useAuthStore;
