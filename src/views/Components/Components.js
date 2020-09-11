import React from "react";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {Container, Typography, Grid, Divider} from "@material-ui/core";
// @material-ui/icons
import { ArrowDownwardRounded } from "@material-ui/icons";
// components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import ButtonsSection from "./Sections/ButtonsSection";

import styles from "./componentsStyle.js";
import TextInputSection from "./Sections/TextInputSection";
import OtherInputsSection from "./Sections/OtherInputsSection";

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
          <Grid>
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
          </Grid>
        </Container>
      </Parallax>

      <Container maxWidth="lg" className={classes.main}>
        <Typography variant="h4" gutterBottom>
          Inputs
        </Typography>
        <Divider className={classes.divider} />
        <ButtonsSection />
        <Divider className={classes.divider} />
        <TextInputSection />
        <Divider className={classes.divider} />
        <OtherInputsSection />
      </Container>
      <Footer />
    </div>
  );
}
