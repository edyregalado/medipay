import styled from "@emotion/styled";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: '50%',
    top: '50%',
  }
}));

const Container = styled.div`
  width: 475px;
  // margin: 30px auto 0 auto;
  text-align: center;
  background-color: #ffff;
  color: black;
  margin: auto;
  width: 50%;
  padding-top: 200px;
`;
const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  // margin-top: 40px;
  font-size: 27px;
`;

export default () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  return (
    <div>
      <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
        <Grid item xs={12} md ={6}>
          <Paper>
            <Typography>
              Dr. Eduardo Regalado
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
