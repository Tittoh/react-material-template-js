const textInputStyle = (theme) => ({
  input: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  gray: {
    color: theme.palette.grey.A700,
  },
});
export default textInputStyle;
