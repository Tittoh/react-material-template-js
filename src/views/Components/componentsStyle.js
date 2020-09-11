const componentsStyle = (theme) => ({
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    maxWidth: "500px",
    margin: "10px 0 0",
  },
  main: {
    paddingTop: "60px",
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  footer: {
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  divider: {
    margin: "3vh auto",
  },
});

export default componentsStyle;
