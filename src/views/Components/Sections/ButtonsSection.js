import React from "react";
import {
  Button,
  Grid,
  Typography,
  IconButton,
  ButtonGroup,
  Divider,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { AddShoppingCart, Favorite } from "@material-ui/icons";
import styles from "./buttonsStyle";

const useStyles = makeStyles(styles);

export default function InputSection() {
  const classes = useStyles();
  return (
    <div>
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
          <ButtonGroup
            color="primary"
            variant="contained"
            size="small"
            aria-label=" contained small button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
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
          <Button size="small" className={classes.button} variant="contained">
            Default
          </Button>
          <Button
            size="small"
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Primary
          </Button>
          <Button
            size="small"
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Secondary
          </Button>
          <Button size="small" className={classes.btnInfo} variant="contained">
            Info
          </Button>
          <Button
            size="small"
            className={classes.btnSuccess}
            variant="contained"
          >
            Success
          </Button>
          <Button
            size="small"
            className={classes.btnWarning}
            variant="contained"
          >
            Warning
          </Button>
          <Button size="small" className={classes.btnError} variant="contained">
            Error
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
