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
      <DrName>Dr. Black Swan</DrName>
      <AppointmentName>Anticipo de Cita</AppointmentName>
      <Details>{completeDateStamp}</Details>
    </Shop>
  );
};

export default DrSingleShop;
