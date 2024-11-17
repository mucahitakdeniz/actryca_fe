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
      mainInformation: {}, 

      setUser: (user) => set({ user }),
      setTokens: (tokens) => set({ tokens }),
      setStatus: (status) => set({ status }),
      setPersonalInfo: (info) => set({ personalInfo: info }),
      setEducationSkills: (data) => set({ educationSkills: data }),
      setProfessionalInfo: (data) =>
        set((state) => ({
          professionalInfo: {
            ...state.professionalInfo,
            ...data,
          },
        })),
      setMainInformation: (data) => set({ mainInformation: data }), 
      
      resetForm: () => set({ personalInfo: {}, educationSkills: {}, professionalInfo: {}, mainInformation: {} }), 
      logout: () =>
        set({ user: null, tokens: null, status: null, personalInfo: {}, mainInformation: {} }), 
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
