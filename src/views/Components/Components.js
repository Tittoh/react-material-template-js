import React from "react";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";
// @material-ui/icons
import { ArrowDownwardRounded } from "@material-ui/icons";
// components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";

import styles from "./componentsStyle.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Material-UI Template"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "dark",
        }}
        {...rest}
      />
      <Parallax image={require("../../assets/img/bg9.jpg")}>
        <Container maxWidth="lg">
          <GridItem>
            <div className={classes.brand}>
              <Typography variant="h2" className={classes.title}>
                Material-UI Template.
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                A Material Design UI Kit.
              </Typography>
              {/* arrow styling location assets/scss/plugins/_plugin-down-arrow.scss*/}
              <div className="downArrow bounce">
                <ArrowDownwardRounded style={{ fontSize: 40 }} />
              </div>
            </div>
          </GridItem>
        </Container>
      </Parallax>

      <Container maxWidth="lg" className={classes.main}>
        <Typography variant="caption" color="primary">
          Body
        </Typography>
        <Button variant="outlined" color="secondary">
          Button
        </Button>
        <Typography variant="h1">Responsive h1</Typography>
        <Typography variant="h1">Responsive h1</Typography>
        <Typography variant="h1">Responsive h1</Typography>
        <Typography variant="h4">Responsive h4</Typography>
        <Typography variant="h5">Responsive h5</Typography>
      </Container>
      <Footer />
    </div>
  );
}
