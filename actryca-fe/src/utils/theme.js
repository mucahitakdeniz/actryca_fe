"use client";
import { createTheme } from "@mui/material/styles";
import { DM_Sans, DM_Serif_Text } from "next/font/google";

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

const dmSerifText = DM_Serif_Text({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const theme = createTheme({
  typography: {
    fontFamily: `${dmSans.style.fontFamily}, sans-serif`,
    button: {
      textTransform: "capitalize",
    },
    fontFamily2: `${dmSerifText.style.fontFamily}, sans-serif`,
    button: {
      textTransform: "capitalize",
    },
  },
  palette: {
    primary: {
      light: "#614B8B",
      main: "#513F75",
      dark: "#322748",
      contrastText: "#fff",
      darkest: "#231b32",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    info: {
      light: "#dededf",
      main: "#a4a5a8",
      dark: "#656568",
      contrastText: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: "bold",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          height: 48,
          marginTop: "4px",
          "& .MuiInputBase-root": {
            height: "100%",
            padding: "10px 12px",
            borderRadius: 8,
            backgroundColor: "white",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E3DAF3",
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          hover: "#f48fb1",
        },
        today: {
          color: "#fff",
          backgroundColor: "#513F75",
        },
      },
    },
  },
});
