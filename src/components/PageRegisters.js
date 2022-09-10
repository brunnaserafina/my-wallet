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

  useEffect(() => {
    const request = axios.get("http://localhost:5000/transactions", {
      headers: { Authorization: `Bearer ${token}` },
    });

    request.catch((response) => console.log(response));

    request.then((response) => {
      setRegisters(response.data);

      if (response.data.length === 0) {
        setContainRegisters(false);
      }
    });
  }, []);

  return (
    <RegistersContainer>
      <Message>
        <p>Olá, {username}</p>
        <img src={exitIcon} alt="exitIcon" />
      </Message>

      {containRegisters ? (
        <Registers justifyContent={"flex start"} >
          {registers.map((register) => (
            <RegistersElements key={register.id} register={register} />
          ))}
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

function RegistersElements({ register }) {
  return (
    <Transaction>
      <p>{register.date} {register.description}</p>
      <p>{register.value}</p>
    </Transaction>
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
  justify-content: ${props => props.justifyContent};
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

const Transaction = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  background-color: red;
`;
