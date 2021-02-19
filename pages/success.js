import styled from "@emotion/styled";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import { Grid, Typography, Card, CardContent, Paper } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    // left: '50%',
    // top: '50%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: '27px',
    color: "black",
  },
  title: {
    fontWeight: 'bold',
    fontSize: '58px',
  },
  paper: {
    width: '29.69rem',
    height: '30rem',
    backgroundColor: 'gray',
  }
}));

const Box = styled.div`
  width: 50%;
  margin: 30px auto;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #0000;
  border-radius: 6px;
  background-color: #F9F9FF;
  color: #0000;
  // position: relative;
`;

const Container = styled.div`
  width: 475px;
  margin: 30px auto 0 auto;
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
    <div className={classes.root}>
      <Confetti width={width} height={height}/>
      <Layout title="Listo!">
        {/* <Box>
        ¡Felicidades!
        </Box> */}
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>
            ¡Felicidades!
          </Typography>
          <Typography className={classes.text}>
            Medipay ha procesado tu pago.
          </Typography>
        </Paper>

        {/* <Container className={classes.root}>
          <Confetti width={width} height={height}/>
          <Title>¡Felicidades!</Title>
          <Message>Medipay ha procesado tu pago.</Message>
        </Container> */}
      </Layout>
    </div>
  );
};
