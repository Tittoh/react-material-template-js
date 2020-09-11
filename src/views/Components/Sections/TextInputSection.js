import React from "react";
import {
  Grid,
  Typography,
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
    password: "",
    weight: "",
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
      <Typography variant="h5" gutterBottom>
        Text Input
      </Typography>
      <Typography xs={12} variant="h6" className={classes.gray} gutterBottom>
        Text Field
      </Typography>
      <Grid container className={classes.input}>
        <TextField label="Standard" />
        <TextField helperText="Some important text" label="Filled" />
        <TextField error required label="Validation" />
        <TextField error helperText="Incorrect entry." label="Validation" />
      </Grid>
      <Grid container className={classes.input}>
        <TextField label="Outlined" variant="outlined" size="small" />
        <TextField
          color="secondary"
          label="Secondary"
          variant="outlined"
          size="small"
        />
        <TextField
          error
          required
          label="Validation"
          variant="outlined"
          size="small"
        />
        <TextField
          error
          helperText="Incorrect entry."
          label="Validation"
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid container className={classes.input}>
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
        <FormControl>
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
        <FormControl>
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
      <Grid container className={classes.input}>
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
      </Grid>
    </div>
  );
}
