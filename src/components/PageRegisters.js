import { Link } from "react-router-dom";
import styled from "styled-components";
import exitIcon from "../assets/imgs/exitIcon.svg";
import plusIcon from "../assets/imgs/plusIcon.svg";

export default function PageRegisters() {
  return (
    <RegistersContainer>
      <Message>
        <p>Olá, Fulano</p>
        <img src={exitIcon} alt="exitIcon" />
      </Message>

      <Registers>
        <p>Não há registros de </p>
        <p>entrada ou saída</p>
      </Registers>

      <Buttons>
        <Link to={`/entrada`}>
          <img src={plusIcon} alt="plusIcon" />
          <div>
            <p>Nova </p>
            <p>entrada</p>
          </div>
        </Link>

        <Link to={`/saida`}>
          <img src={plusIcon} alt="plusIcon" />
          <div>
            <p>Nova </p>
            <p>saída</p>
          </div>
        </Link>
      </Buttons>
    </RegistersContainer>
  );
}

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
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 25px;
  margin-bottom: 12px;

  p {
    font-family: Raleway;
    font-weight: 400;
    line-height: 23.5px;
    font-size: 20px;
    color: #868686;
  }
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
