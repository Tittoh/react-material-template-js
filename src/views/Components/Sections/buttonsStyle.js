const buttonsStyle = (theme) => ({
  gray: {
    color: theme.palette.grey.A700,
  },
  button: {
    margin: theme.spacing(1),
  },
  btnInfo: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.info.main,
      opacity: "0.7",
    },
  },
  btnSuccess: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.success.main,
      opacity: "0.7",
    },
  },
  btnWarning: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.warning.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.warning.main,
      opacity: "0.7",
    },
  },
  btnError: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.error.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.error.main,
      opacity: "0.7",
    },
  },
  buttonRnd: {
    margin: theme.spacing(1),
    borderRadius: "50%",
    border: "1px solid",
  },
});

export default buttonsStyle;
