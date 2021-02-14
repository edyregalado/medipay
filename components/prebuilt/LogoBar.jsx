import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Grid, Link, SvgIcon } from '@material-ui/core';
// import { ReactComponent as Logo } from "../../public/test.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const LogoBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static" color="#FFFF">
            {/* <Grid container>
              <Button>
                <img
                  className={classes.logo}
                  src={require("../../public/logomedipay.png")}
                  alt="Inicio"
                />
              </Button>
            </Grid>  */}
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Medipay
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
};

export default LogoBar;
