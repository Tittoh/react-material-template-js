import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "#0455bf",
      main: "#0455BF",
      dark: "#002e8e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f46cca",
      main: "#bf3899",
      dark: "#8b006b",
      contrastText: "#fff",
    },
    dark: {
      main: "#041326",
      contrastText: "#fff",
    },
    error: { main: "#f44336" },
    warning: { main: "#ff9800" },
    info: { main: "#00acc1" },
    success: { main: "#4caf50" },
    grey: {
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    h3: {
      fontWeight: "300",
    },
    h4: {
      fontWeight: "300",
    },
    h5: {
      fontWeight: "300",
    },
    h6: {
      fontWeight: "300",
    },
    button: {
      fontWeight: "400",
    },
  },
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  img: {
    imgFluid: {
      maxWidth: "100%",
      height: "auto",
    },
    imgRounded: {
      borderRadius: "6px !important",
    },
    imgRoundedCircle: {
      borderRadius: "50% !important",
    },
    imgRaised: {
      boxShadow:
        "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    imgGallery: {
      width: "100%",
      marginBottom: "2.142rem",
    },
    imgCardTop: {
      width: "100%",
      borderTopLeftRadius: "calc(.25rem - 1px)",
      borderTopRightRadius: "calc(.25rem - 1px)",
    },
    imgCardBottom: {
      width: "100%",
      borderBottomLeftRadius: "calc(.25rem - 1px)",
      borderBottomRightRadius: "calc(.25rem - 1px)",
    },
    imgCard: {
      width: "100%",
      borderRadius: "calc(.25rem - 1px)",
    },
    imgCardOverlay: {
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      padding: "1.25rem",
    },
  },
});

export default theme;
