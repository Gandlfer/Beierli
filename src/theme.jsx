import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32", // forest green
    },
    secondary: {
      main: "#66bb6a", // lighter green
    },
    background: {
      default: "#f4fdf4",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
