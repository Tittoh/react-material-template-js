import React from "react";
import {
  Grid,
  Typography,
  Divider,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./textInputStyle";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function TextInputSection() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Divider />
      <Typography variant="h5" gutterBottom>
        Text Input
      </Typography>
      <Typography xs={12} variant="h6" className={classes.gray} gutterBottom>
        Text Field
      </Typography>
      <Grid container>
        <TextField className={classes.input} label="Standard" />
        <TextField
          className={classes.input}
          helperText="Some important text"
          label="Filled"
        />
        <TextField
          error
          required
          className={classes.input}
          label="Validation"
        />
        <TextField
          error
          helperText="Incorrect entry."
          className={classes.input}
          label="Validation"
        />
      </Grid>
      <Grid container>
        <TextField
          className={classes.input}
          label="Outlined"
          variant="outlined"
          size="small"
        />
        <TextField
          color="secondary"
          className={classes.input}
          label="Secondary"
          variant="outlined"
          size="small"
        />
        <TextField
          error
          required
          className={classes.input}
          label="Validation"
          variant="outlined"
          size="small"
        />
        <TextField
          error
          helperText="Incorrect entry."
          className={classes.input}
          label="Validation"
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid container>
        <TextField
          className={classes.input}
          label="Start adornment"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.input}
          label="End adornment"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <FormControl className={classes.input}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            size="small"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.input}>
          <Input
            id="standard-adornment-weight"
            value={values.weight}
            onChange={handleChange("weight")}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id="standard-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
      </Grid>
    </div>
  );
}
