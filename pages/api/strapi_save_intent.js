import React from 'react';
import axios from 'axios';

export default async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.query);
    const result = await axios.post(
      'http://localhost:1337/patients',
      {req}
    );
      res.status(200).send(result);
      // res.status(200).json({ user: 'Nhu Nguyen' })
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
  // if (req.method === "POST") {
  //   try {
  //     const newPatient = req.body;
  //     console.log(req);
  //     const result = await axios({
  //       method: 'post',
  //       url: 'http://localhost:1337/patients',
  //       data: newPatient
  //     });
  //     res.status(200).send(result);
  //   } catch (err) {
  //     res.status(500).json({ statusCode: 500, message: err.message });
  //   }
  // } else {
  //   res.setHeader("Allow", "POST");
  // }
}