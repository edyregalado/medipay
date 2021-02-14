import styled from "@emotion/styled";

const Shop = styled.div`
  padding: 10px 20px 40px 20px;
`;

const DrName = styled.h1`
  font-size: 18px;
  color: #fff;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: auto;
  text-align: center;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const DrSingleShop = () => {
  return (
    <Shop>
      <DrName>Dr. Black Swan</DrName>
    </Shop>
  );
};

export default DrSingleShop;
