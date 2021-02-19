import { ClassNames } from "@emotion/core";
import React from "react";
import { makeStyles, withTheme } from '@material-ui/core/styles';
// import Logo from "../../public/logomedipay.png";


// var imageName = require("../../public/logomedipay.png");

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "1rem",
    padding: "1rem",
    // backgroundColor: "rgb(235, 195, 64)",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    textAlign: "center"
  },
  logo: {
    height: "50px",
    // textAlign: "center",
  }
}));

const Footer = props => {
  const classes = useStyles();

  return(
  <div className={classes.footer}>
    <img alt="timer" src={require("../../public/logomedipay.png")} className={classes.logo}/>
    {/* <section>
      <img src={imageName}/>
    </section> */}
  </div>
  );
};

export default Footer;