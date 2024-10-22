const { create } = require("zustand");

const usePasswordStore = create((set) => ({
  email: null,
  token: null,
  setEmail: (email) => set(() => ({ email: email })),
  setToken: (token) => set(() => ({ token: token })),
}));

export default usePasswordStore;
