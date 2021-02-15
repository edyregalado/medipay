// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// export default async (req, res) => {
//   if (req.method === "POST") {
//     try {
//       const { number } = req.body;
//       // Psst. For production-ready applications we recommend not using the
//       // amount directly from the client without verifying it first. This is to
//       // prevent bad actors from changing the total amount on the client before
//       // it gets sent to the server. A good approach is to send the quantity of
//       // a uniquely identifiable product and calculate the total price server-side.
//       // Then, you would only fulfill orders using the quantity you charged for.

//       client.messages
//       .create({
//         from: 'whatsapp:+523338427308',
//         body: 'Hello from Medipay',
//         to: 'whatsapp:+523338427308'
//       })
//       .then(message => console.log(message.sid));
    
//       // const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
//       // const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
//       // const client = require('twilio')(accountSid, authToken);
//       // client.messages
//       // .create({
//       //    from: 'whatsapp:+523338427308',
//       //    body: 'Hello from Medipay',
//       //    to: billingDetails.phone
//       //  })
//       // .then(message => console.log(message.sid));

//       res.status(200).send(message.sid);
//     } catch (err) {
//       res.status(500).json({ statusCode: 500, message: err.message });
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// };

const WhatsAppWeb = require('baileys')

const client = new WhatsAppWeb() 

// CONECTA WHATS - SERVIDOR
module.exports.conectApi = async (req, res) => {
        client.connect()
        .then (([user, chats, contacts, unread]) => {
            res.jsonp({mensaje: 'Autenticación exitosa'});
        })
        .catch (err => console.log(err) )
}


// ENVIAR MENSAJES

module.exports.sendMessage = async (req, res) => {
    options = {
        quoted: null,
        timestamp: new Date()
    }
    client.sendTextMessage(`${req.body.phone}@s.whatsapp.net`, req.body.body, options)
    .then( res.jsonp({mensaje:'Notificación enviada'}))
}