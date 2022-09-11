import styled from "styled-components";

const RegistersContainer = styled.div`
  background-color: #8c11be;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;

  p {
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    color: #f7f7f7;
  }
`;

const Registers = styled.div`
  width: 90vw;
  height: 70vh;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  border-radius: 5px;
  margin-top: 25px;
  margin-bottom: 12px;
  box-sizing: border-box;
  padding-top: 20px;
  position: relative;

  p {
    font-family: Raleway;
    font-weight: 400;
    line-height: 23.5px;
    font-size: 20px;
    color: #868686;
  }
`;

const Transactions = styled.div`
  overflow-y: auto;
  width: 90%;
  margin-bottom: 30px;
`;

const Balance = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  margin-bottom: 15px;
  width: 90%;
  justify-content: space-between;

  h6 {
    font-family: Raleway;
    font-size: 19px;
    font-weight: 700;
    color: #000000;
  }
`;
const Value = styled.span`
  font-family: Raleway;
  color: ${(props) => (props.$color ? "#C70000" : "#03AC00")};
  font-size: 19px;
  font-weight: 400;
`;

const Buttons = styled.div`
  width: 90vw;
  height: 15vh;
  display: flex;
  justify-content: space-between;

  a {
    background-color: #a328d6;
    width: 47%;
    border-radius: 5px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;
    text-decoration: none;
  }

  div {
    font-family: Raleway;
    font-weight: 700;
    font-size: 17px;
    color: #f7f7f7;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Transaction = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  h5 {
    font-family: Raleway;
    font-size: 16px;
    color: #000000;
    font-weight: 400;
  }

  h5 > span {
    color: #c6c6c6;
  }
`;

const Span = styled.span`
  color: ${(props) => (props.$color ? "#C70000" : "#03AC00")};
  font-size: 16px;
  font-weight: 400;
`;

export {
  RegistersContainer,
  Message,
  Registers,
  Transactions,
  Balance,
  Value,
  Buttons,
  Transaction,
  Span,
};
