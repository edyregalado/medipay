import styled from "@emotion/styled";

const Shop = styled.div`
  padding: 10px 20px 20px 20px;
  background-color: black;
  color: #FFFF;
  font-weight: bold;
  border-radius: 20px;
`;

const DrName = styled.h1`
  font-size: 24px;
  font-style: bold;
  font-variant: normal;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: auto;
  text-align: center;
`;

const ByMedipay = styled.h1`
  font-size: 16px;
  color: #000;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: auto;
  margin-right: 60px;
  text-align: right;
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
margin-right: 10px;
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

const today = new Date();
const options = { day: 'numeric',
                month: 'short'};
const date = today.toLocaleDateString('es-ES', options);
const day = today.toLocaleDateString('es-ES', {weekday: 'long'})

const hourOptions = { hour: 'numeric', minute: 'numeric'};
const dateWithouthSecond = new Date();
const hour = dateWithouthSecond.toLocaleTimeString('es-ES', {hour: '2-digit', minute:'2-digit'});

const completeDateStamp = hour + ", " + date + ", " + day;

const DrSingleShop = () => {
  return (
    <Shop>
      <DrName>Doctor Black Swan</DrName>
      {/* <ByMedipay>By Medipay</ByMedipay> */}
      {/* <AppointmentName>Anticipo de Cita</AppointmentName> */}
      {/* <Details>{completeDateStamp}</Details> */}
    </Shop>
  );
};

export default DrSingleShop;
