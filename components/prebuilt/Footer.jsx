import { ClassNames } from "@emotion/core";
import React from "react";
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
  },
  logo: {
    height: "50px",
  },
}));

const Footer = props => {
  const classes = useStyles();

  return(
  <div className={classes.footer}>
    <img alt="timer" src={require("../../public/logomedipay.png")} className={classes.logo}/>
  </div>
  );
};

export default Footer;