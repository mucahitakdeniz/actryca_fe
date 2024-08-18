import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // İsteğin başarısız olması durumunda 1 kez tekrar denemek için
      refetchOnWindowFocus: false, // Pencere odağa geldiğinde tekrar sorgulama yapılmaması için
    },
    mutations: {
      retry: false, // Mutasyonlarda tekrar denemeyi kapatmak için
    },
  },
});

export default queryClient;
