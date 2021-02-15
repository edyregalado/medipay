import styled from "@emotion/styled";

const Shop = styled.div`
  padding: 10px 20px 20px 20px;
`;

const DrName = styled.h1`
  font-size: 24px;
  color: #000;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: auto;
  text-align: center;
`;

const Details = styled.h2`
font-size: 18px;
color: #C9C9C9;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin-bottom: 0;
text-align: left;
`;

const Ticket = styled.h2`
font-size: 16px;
color: #C9C9C9;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin-bottom: 0px;
text-align: left;
`;

const AppointmentName = styled.h2`
font-size: 16px;
color: black;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin-bottom: auto;
text-align: left;
`;

var today = new Date();
var options = { day: 'numeric',
                month: 'short'};
var date = today.toLocaleDateString('es-ES', options);
var day = today.toLocaleDateString('es-ES', {weekday: 'long'})

const hourOptions = { hour: 'numeric', minute: 'numeric'};
// const hour = today.toLocaleDateString('es-ES', hourOptions);

var dateWithouthSecond = new Date();
// const hour = dateWithouthSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
const hour = dateWithouthSecond.toLocaleTimeString('es-ES', {hour: '2-digit', minute:'2-digit'});

const completeDateStamp = hour + ", " + date + ", " + day;
console.log(completeDateStamp);

// function prettyHour(time){
//   var date = new Date(parseInt(time));
//   var localeSpecificTime = date.toLocaleTimeString();
//   return localeSpecificTime.replace(/:\d+ /, ' ');
// }

// var date = new Date();
// var minute = date.getMinutes();
// var hour = date.getHours();
// var day = date.getDate();
// var month = new Date().getMonth()         // Get the month (0-11);
// var year = date.getFullYear();
// alert([minute, hour, day, month, year].join("\n"));

const DrSingleShop = () => {
  return (
    <Shop>
      <DrName>Dr. Black Swan</DrName>
      <AppointmentName>Anticipo de Cita</AppointmentName>
      <Details>{completeDateStamp}</Details>
    </Shop>
  );
};

export default DrSingleShop;
