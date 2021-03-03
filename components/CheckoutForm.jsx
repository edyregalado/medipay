import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styled from "@emotion/styled";
import axios from "axios";

import Row from "./prebuilt/Row";
import BillingDetailsFields from "./prebuilt/BillingDetailsFields";
import SubmitButton from "./prebuilt/SubmitButton";
import CheckoutError from "./prebuilt/CheckoutError";

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  // padding: 10px 20px 20px 20px;
  background-color: black;
  color: #FFFF;
  font-weight: bold;
  border-radius: 20px;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  // TIP
  // use the cardElements onChange prop to add a handler
  // for setting any errors:

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async ev => {
    ev.preventDefault(); // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      phone: ev.target.phone.value,
      address: {
        postal_code: ev.target.zip.value
      }
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      const { data: clientSecret } = await axios.post("/api/payment_intents", {
        amount: price * 100
      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }
    const newPatient = {
      Patient_Name: billingDetails.name,
      Patient_phone_number: billingDetails.phone,
      email: billingDetails.name,
      CP: billingDetails.address.postal_code,
      Amount: price
    }
    console.log(newPatient);
    // const resultPatient = await axios({
    //   method: 'post',
    //   url: "/api/strapi_save_intent",
    //   data: newPatient
    // });
    // console.log(resultPatient);
    const res = await axios.post('/api/strapi_save_intent', {
        Patient_Name: billingDetails.name,
        Patient_phone_number: billingDetails.phone,
        email: billingDetails.name,
        CP: billingDetails.address.postal_code,
        Amount: price
    });
  
      // const result = await res.json()
      // result.user => 'Ada Lovelace'
      // useEffect(() => {

      
      // Call API
      // const postPatients = async () => {
      //   const result = await axios({
      //     method: 'post',
      //     url: 'http://localhost:1337/patients',
      //     data: newPatient
      //   });
      //   // const result = await axios.post('http://localhost:1337/patients');
      //   // setPatients(result.data);
      //   // setFiltered(result.data);
      //   console.log(result.data);
      // }
      // postPatients();
      // }, []); //arreglo vacío para que solo se llame una vez

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  // Learning
  // A common ask/bug that users run into is:
  // How do you change the color of the card element input text?
  // How do you change the font-size of the card element input text?
  // How do you change the placeholder color?
  // The answer to all of the above is to use the `style` option.
  // It's common to hear users confused why the card element appears impervious
  // to all their styles. No matter what classes they add to the parent element
  // nothing within the card element seems to change. The reason for this is that
  // the card element is housed within an iframe and:
  // > styles do not cascade from a parent window down into its iframes

  const iframeStyles = {
    base: {
      color: "#FFFF",
      fontSize: "16px",
      iconColor: "#0000",
      "::placeholder": {
        color: "#FFFF"
      },
    },
    invalid: {
      iconColor: "#D98A41",
      color: "#D98A41"
    },
    complete: {
      iconColor: "#cbf4c9"
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Row>
        <BillingDetailsFields />
      </Row>
      <Row>
        <CardElementContainer>
          <CardElement
            options={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
        </CardElementContainer>
      </Row>
      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
      <Row>
        {/* TIP always disable your submit button while processing payments */}
        <SubmitButton disabled={isProcessing || !stripe}>
          {isProcessing ? "Procesando..." : `Pagar $${price}`}
        </SubmitButton>
      </Row>
    </form>
  );
};

export default CheckoutForm;
