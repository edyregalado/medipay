import { useState } from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import DrShop from "../components/prebuilt/DrShop";
import CheckoutForm from "../components/CheckoutForm";
import getPrice from "../utils/get-price";
import Footer from "../components/prebuilt/Footer";

// import awsExports from "../src/aws-exports";

// Amplify.configure({...awsExports, ssr: true });

const MainPage = props => {

  return (
    <div>
      <Layout title="Medipay">
        <Row>
          <DrShop/>
        </Row>
        <CheckoutForm
          price={getPrice}
          onSuccessfulCheckout={() => Router.push("/success")}
        />
        <Footer/>
      </Layout>
    {/* </Grid> */}
    </div>
  );
};

export default MainPage;
