import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  Slider,
  Radio,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  slider: {
    width: "30ch",
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
    slider: 30,
  });

  const handleChange = (event) => {
    setValue({ ...state, [event.target.name]: event.target.value });
  };
  const handleChange2 = (event) => {
    setValue({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container>
      <Typography xs={12} variant="h5" gutterBottom>
        Other
      </Typography>
      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
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
                label="Disabled"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
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
                  onChange={handleChange2}
                  name="checkedA"
                />
              }
              label="Secondary"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange2}
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
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl component="fieldset">
            <Typography
              xs={12}
              variant="h6"
              className={classes.gray}
              gutterBottom
            >
              Switches
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={state.checkedF}
                  onChange={handleChange2}
                  name="checkedF"
                />
              }
              label="Secondary"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.checkedG}
                  onChange={handleChange2}
                  name="checkedG"
                  color="primary"
                />
              }
              label="Primary"
            />
            <FormControlLabel control={<Switch />} label="Uncontrolled" />
            <FormControlLabel disabled control={<Switch />} label="Disabled" />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl component="fieldset">
            <Typography
              xs={12}
              variant="h6"
              className={classes.gray}
              gutterBottom
            >
              Slider
            </Typography>
            <Typography id="range-slider" gutterBottom>
              Continuous
            </Typography>
            <Slider
              className={classes.slider}
              defaultValue={30}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
            <Typography id="discrete-slider" gutterBottom>
              Discrete
            </Typography>
            <Slider
              defaultValue={30}
              color="secondary"
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
            <Typography id="range-slider" gutterBottom>
              Range
            </Typography>
            <Slider
              defaultValue={[20, 37]}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}
