import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  Radio,
  Checkbox,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  gray: {
    color: theme.palette.grey.A700,
  },
}));

export default function OtherInputsSection() {
  const classes = useStyles();
  const [state, setValue] = React.useState({
    gender: "female",
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setValue({ ...state, [event.target.name]: event.target.value });
  };
  const checkboxChange = (event) => {
    setValue({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container>
      <Typography xs={12} variant="h5" gutterBottom>
        Other
      </Typography>
      <Grid container>
        <Grid item xs={3}>
          <FormControl component="fieldset">
            <Typography
              xs={12}
              variant="h6"
              className={classes.gray}
              gutterBottom
            >
              Radio
            </Typography>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={state.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio color="primary" />}
                label="(Disabled option)"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl component="fieldset">
            <Typography
              xs={12}
              variant="h6"
              className={classes.gray}
              gutterBottom
            >
              Checkboxes
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={checkboxChange}
                  name="checkedA"
                />
              }
              label="Secondary"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={checkboxChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Primary"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="checkedH"
                />
              }
              label="Custom icon"
            />
            <FormControlLabel
              disabled
              control={<Checkbox name="checkedD" />}
              label="Disabled"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}
