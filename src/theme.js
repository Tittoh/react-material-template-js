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
      main: "#0455BF",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(255, 121, 176, 1)",
      main: "rgba(255, 64, 129, 1)",
      dark: "rgba(198, 0, 85, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    dark: {
      main: "#041326",
      contrastText: "#fff",
    },
    error: { main: "#f44336" },
    success: { main: "#4caf50" },
    info: { main: "#00acc1" },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
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
