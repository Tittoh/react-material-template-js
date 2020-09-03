/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import {Container, List, ListItem} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme =>(
    {
      block: {

        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block",
      },
      left: {
        float: "left!important",
        display: "block",
      },
      right: {
        padding: "15px 12px",
        margin: "0",
        float: "right!important",
      },
      footer: {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        padding: "0.9375rem 0",
        textAlign: "center",
        display: "flex",
        zIndex: "2",
        position: "relative",
      },
      a: {
        color: theme.palette.primary.contrastText,
      },
      footerWhiteFont: {
        "&,&:hover,&:focus": {
          color: "#FFFFFF",
        },
      },
      list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0",
      },
      inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto",
      },
      icon: {
        width: "18px",
        height: "18px",
        position: "relative",
        top: "3px",
      },
    }
));

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
              >
                Titus Kipkemboi
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
              >
                About
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <Typography variant="caption" className={classes.right}>
          &copy;&nbsp;
          <a
            href="https://www.tittohtech.com"
            className={aClasses}
            target="_blank"
          >
            Tittoh Tech.
          </a>
          &nbsp;{"2020"}
        </Typography>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
