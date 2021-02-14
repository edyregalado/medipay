import styled from "@emotion/styled";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import { makeStyles, withTheme } from '@material-ui/core/styles';

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
    <Layout title="Listo!">
      <Container className={classes.root}>
        <Confetti width={width} height={height}/>
        <Title>¡Felicidades!</Title>
        <Message>Medipay ha procesado tu pago.</Message>
      </Container>
    </Layout>
  );
};
