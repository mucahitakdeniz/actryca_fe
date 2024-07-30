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
      light: "#C6BED5",
      main: "#614B8B",
      dark: "#513F75",
      contrastText: "#fff",
      darkest: "#36383C",
    },
    secondary: {
      light: "#ff9433",
      main: "#FF7A00",
      dark: "#b25500",
      contrastText: "#000",
    },
    info: {
      light: "#f3f3f6",
      main: "#F1F0F4",
      dark: "#a8a8aa",
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
    MuiSelect: {
      styleOverrides: {
        root: {
          height: "48px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.light",
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
