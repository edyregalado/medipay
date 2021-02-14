import { useState } from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import DrShop from "../components/prebuilt/DrShop";
import CheckoutForm from "../components/CheckoutForm";
import getPrice from "../utils/get-price";
import LogoBar from "../components/prebuilt/LogoBar";

import "../styles/globals.css";
import awsExports from "../src/aws-exports";

Amplify.configure({...awsExports, ssr: true });

const MainPage = props => {

  return (
    <Layout title="Medipay">
      <LogoBar/>
      <Row>
        <DrShop/>
      </Row>
      <CheckoutForm
        price={getPrice}
        onSuccessfulCheckout={() => Router.push("/success")}
      />
    </Layout>
  );
};

export default MainPage;
