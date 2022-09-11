import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTransactions } from "../../services/mywallet";
import exitIcon from "../../assets/imgs/exitIcon.svg";
import plusIcon from "../../assets/imgs/plusIcon.svg";
import {
  RegistersContainer,
  Message,
  Registers,
  Transactions,
  Balance,
  Value,
  Buttons,
  Transaction,
  Span,
} from "./PageRegistersStyle";

export default function PageRegisters() {
  const navigate = useNavigate("");
  const token = JSON.parse(localStorage.getItem("mywallet")).token;
  const username = JSON.parse(localStorage.getItem("mywallet")).name;
  const [registers, setRegisters] = useState([]);
  const [containRegisters, setContainRegisters] = useState(true);
  const [balance, setBalance] = useState(0);
  let colorBalance = false;

  useEffect(() => {
    getTransactions(token)
      .catch((response) => console.log(response))
      .then((response) => {
        const transaction = response.data;
        let positivo = 0;
        let negativo = 0;

        setRegisters(transaction);

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

        setBalance(positivo - negativo);
      });
  }, [token]);

  if (balance < 0) {
    colorBalance = true;
  }

  return (
    <RegistersContainer>
      <Message>
        <p>Olá, {username}</p>
        <img
          src={exitIcon}
          alt="exitIcon"
          onClick={() => {
            if (window.confirm("Você realmente deseja sair?")) {
              localStorage.clear("mywallet");
              navigate("/");
            }
          }}
        />
      </Message>

      {containRegisters ? (
        <Registers justifyContent={"flex start"}>
          <Transactions>
            {registers.map((register, index) => (
              <RegistersElements key={index} register={register} />
            ))}
          </Transactions>

          <Balance>
            <h6>SALDO</h6>
            <Value $color={colorBalance}>
              {balance.toFixed(2).toString().replace(".", ",")}
            </Value>
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

function RegistersElements({ register }) {
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
          <Span $color={colorTransaction}>
            {register.value.toString().replace(".", ",")}
          </Span>
        </p>
      </Transaction>
    </>
  );
}
