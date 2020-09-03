import React from "react";
import {
  Button,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { AddShoppingCart, Favorite } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  basics: {
    padding: "70px 0",
  },
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
}));

export default function BasicComponents() {
  const classes = useStyles();
  return (
    <div className={classes.basics}>
      <Typography variant="h4" gutterBottom>
        Inputs
      </Typography>
      <Divider />
      <Typography variant="h5" gutterBottom>
        Buttons
      </Typography>
      <Typography xs={12} variant="h6" className={classes.gray} gutterBottom>
        Variants
      </Typography>
      <Grid container>
        <Grid item xs={2} />
        <Grid item>
          <Button className={classes.button} color="primary">
            Simple
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Contained
          </Button>
          <Button variant="outlined" color="primary">
            Outlined
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
          >
            Send
          </Button>
          <IconButton
            variant="outlined"
            className={classes.buttonRnd}
            color="primary"
            aria-label="add to shopping cart"
          >
            <Favorite />
          </IconButton>
          <IconButton
            variant="contained"
            className={classes.button}
            color="primary"
            aria-label="add to shopping cart"
          >
            <AddShoppingCart />
          </IconButton>
        </Grid>
      </Grid>
      <Typography xs={12} variant="h6" className={classes.gray} gutterBottom>
        Sizes
      </Typography>
      <Grid container>
        <Grid item xs={2} />
        <Grid item>
          <Button
            className={classes.button}
            size="small"
            variant="outlined"
            color="primary"
          >
            Small
          </Button>
          <Button
            className={classes.button}
            size="medium"
            variant="outlined"
            color="primary"
          >
            Medium
          </Button>
          <Button
            className={classes.button}
            size="large"
            variant="outlined"
            color="primary"
          >
            Large
          </Button>
        </Grid>
      </Grid>
      <Typography xs={12} variant="h6" className={classes.gray} gutterBottom>
        Color
      </Typography>
      <Grid container>
        <Grid item xs={2} />
        <Grid item>
          <Button className={classes.button} variant="contained">
            Default
          </Button>
          <Button className={classes.button} variant="contained" color="primary">
            Primary
          </Button>
          <Button className={classes.button} variant="contained" color="secondary">
            Secondary
          </Button>
          <Button className={classes.btnInfo} variant="contained">
            Info
          </Button>
          <Button className={classes.btnSuccess} variant="contained">
            Success
          </Button>
          <Button className={classes.btnWarning} variant="contained">
            Warning
          </Button>
          <Button className={classes.btnError} variant="contained">
            Error
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
