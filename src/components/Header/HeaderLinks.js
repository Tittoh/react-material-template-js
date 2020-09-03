/*eslint-disable*/
import React from "react";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Apps, Facebook, GitHub, Instagram, Twitter} from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "@material-ui/core/Button";


import styles from "./headerLinksStyle.js";

const useStyles = makeStyles(styles);

const HeaderLinks = () => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Examples"
          buttonProps={{
            className: classes.navLink,
            color: "inherit"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="#"
              target="_blank"
              className={classes.dropdownLink}
            >
              Landing page
            </a>,
            <a
                href="#"
                target="_blank"
                className={classes.dropdownLink}
            >
              Login / Signup
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://github.com/Tittoh/react-material-template-js"
          color="inherit"
          target="_blank"
          className={classes.navLink}
        >
          <GitHub className={classes.icons} /> Github
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            href="https://twitter.com/tittohtech"
            target="_blank"
            color="inherit"
            className={classes.navLink}
            aria-label="twitter"
          >
            <Twitter className={classes.socialIcons} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="inherit"
            href="https://www.facebook.com/tittohtech"
            target="_blank"
            className={classes.navLink}
          >
            <Facebook className={classes.socialIcons} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="inherit"
            href="https://www.instagram.com/tittohtech"
            target="_blank"
            className={classes.navLink}
          >
            <Instagram className={classes.socialIcons} />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
};
export default HeaderLinks
