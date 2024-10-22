import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      tokens: null,
      status: null,
      personalInfo: {},
      educationSkills: {},
      professionalInfo: {},
      setUser: (user) => set({ user }),
      setTokens: (tokens) => set({ tokens }),
      setStatus: (status) => set({ status }),
      setPersonalInfo: (info) => set({ personalInfo: info }),
      setEducationSkills: (data) => set({ educationSkills: data }),
      setProfessionalInfo: (data) => set((state) => ({
        professionalInfo: {
          ...state.professionalInfo,
          ...data,
        }
      })),
      resetForm: () => set({ personalInfo: {}, educationSkills: {}, professionalInfo: {} }),
      logout: () => set({ user: null, tokens: null, status: null, personalInfo: {} }), 
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
