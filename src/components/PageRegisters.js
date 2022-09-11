import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";
import exitIcon from "../assets/imgs/exitIcon.svg";
import plusIcon from "../assets/imgs/plusIcon.svg";

export default function PageRegisters() {
  const { username } = useContext(UserContext);
  const { token } = useContext(UserContext);
  const [registers, setRegisters] = useState([]);
  const [containRegisters, setContainRegisters] = useState(true);
  const [balance, setBalance] = useState(0);
  let colorBalance = false;

  useEffect(() => {
    const request = axios.get("http://localhost:5000/transactions", {
      headers: { Authorization: `Bearer ${token}` },
    });

    request.catch((response) => console.log(response));

    request.then((response) => {
      const transaction = response.data;
      let positivo = 0;
      let negativo = 0;

      setRegisters(transaction);
      console.log(transaction);

      if (transaction.length === 0) {
        setContainRegisters(false);
      }

      for (let i = 0; i < transaction.length; i++) {
        if (transaction[i].type === "entrada") {
          positivo += Number(transaction[i].value);
        } else if (transaction[i].type === "saida") {
          negativo += Number(transaction[i].value);
        }
      }

      setBalance((positivo - negativo).toFixed(2));
    });
  }, []);

  if (balance < 0) {
    colorBalance = true;
  }

  return (
    <RegistersContainer>
      <Message>
        <p>Olá, {username}</p>
        <img src={exitIcon} alt="exitIcon" />
      </Message>

      {containRegisters ? (
        <Registers justifyContent={"flex start"}>
          <Transactions>
            {registers.map((register) => (
              <RegistersElements
                key={register.id}
                register={register}
                balance={balance}
              />
            ))}
          </Transactions>

          <Balance>
            <h6>SALDO</h6>
            <Value $color={colorBalance}>{balance}</Value>
          </Balance>
        </Registers>
      ) : (
        <Registers justifyContent={"center"}>
          <p>Não há registros de </p>
          <p>entrada ou saída</p>
        </Registers>
      )}

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

function RegistersElements({ register, balance }) {
  let colorTransaction = true;

  if (register.type === "entrada") {
    colorTransaction = false;
  }

  return (
    <>
      <Transaction>
        <h5>
          <span>{register.date}</span> {register.description}
        </h5>
        <p>
          <Span $color={colorTransaction}>{register.value}</Span>
        </p>
      </Transaction>
    </>
  );
}

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
