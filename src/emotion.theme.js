import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8375",

      contrastText: "#FFFFFF",
    },
    custom: {
      main: "#ff8375",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontWeight: 700,
    // fontFamily: ["Black Hans Sans", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
  },
});

export default theme;
