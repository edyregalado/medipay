const withPlugins = require('next-compose-plugins');
const dotenv = require("dotenv").config();
const withImages = require('next-images');

module.exports = withPlugins(
  [dotenv, {env: {
    PUBLISHABLE_KEY: process.env.PUBLISHABLE_KEY,
    NEXT_PUBLIC_TWILIO_ACCOUNT_SID: process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
    NEXT_PUBLIC_TWILIO_AUTH_TOKEN: process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN
  }}],
  withImages(),
);

// module.exports = {
//   env: {
//     PUBLISHABLE_KEY: process.env.PUBLISHABLE_KEY,
//     NEXT_PUBLIC_TWILIO_ACCOUNT_SID: process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
//     NEXT_PUBLIC_TWILIO_AUTH_TOKEN: process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN
//   }, withImages()
// };
