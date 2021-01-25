import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#FFF",
      default: "#FAFAFA",
    },
    primary: {
      light: "rgba(119,211,255,1)",
      main: "rgba(0,155,229,1)",
      dark: "rgba(0,107,157,1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(236, 236, 236, 1)",
      main: "rgba(206, 206, 206, 1)",
      dark: "rgba(165, 165, 165, 1)",
      contrastText: "#fff",
    },
  },
});

export default theme;
