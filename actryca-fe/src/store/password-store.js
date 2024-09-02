const { create } = require("zustand");

const usePasswordStore = create((set) => ({
  email: null,
  setMail: (email) => set(() => ({ email: email })),
}));

export default usePasswordStore;
