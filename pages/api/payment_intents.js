import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;
      // Psst. For production-ready applications we recommend not using the
      // amount directly from the client without verifying it first. This is to
      // prevent bad actors from changing the total amount on the client before
      // it gets sent to the server. A good approach is to send the quantity of
      // a uniquely identifiable product and calculate the total price server-side.
      // Then, you would only fulfill orders using the quantity you charged for.

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        transfer_data: {
          destination: "acct_1IISlERRFC32YJQq",
        }
      });

      // const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
      // const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
      // const client = require('twilio')(accountSid, authToken);
      // client.messages
      // .create({
      //    from: 'whatsapp:+523338427308',
      //    body: 'Hello from Medipay',
      //    to: billingDetails.phone
      //  })
      // .then(message => console.log(message.sid));


      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
