"use client";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/footer/Footer";
import Navbar from "@/components/home/navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/queryClient";

const dmSans = DM_Sans({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

/* export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CssBaseline />
              <Navbar />
              {children}
              <Footer />
            </LocalizationProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
