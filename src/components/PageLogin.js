import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function PageLogin() {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const body = {
    email,
    password,
  };

  function joinLogin(event) {
    event.preventDefault();

    const requisicao = axios.post("http://localhost:5000/", body);

    requisicao.catch(() => {
      alert("Email ou senha incorreta!");
      setEmail("");
      setPassword("");
    });

    requisicao.then((response) => {
      console.log(response);
      navigate("/registros");
    });
  }

  return (
    <HomeContainer>
      <Logo>MyWallet</Logo>

      <form onSubmit={joinLogin}>
        <Input
          placeholder="E-mail"
          value={email}
          type="email"
          pattern="[a-z0-9._%+-]+@[a-zLink, 0-9.-]+\.[a-z]{2,4}$"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          value={password}
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Entrar</Button>
      </form>

      <Link to={`/cadastro`}>
        <p>Primeira vez? Cadastre-se</p>
      </Link>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: #8c11be;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    font-size: 15px;
    font-family: Raleway;
    font-weight: 700;
    color: #ffffff;
    text-decoration: none;
  }
`;

const Logo = styled.h1`
  font-family: "Saira Stencil One";
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 85vw;
  height: 58px;
  border-radius: 5px;
  border: none;
  margin-bottom: 13px;
  font-family: Raleway;
  font-weight: 400;
  box-sizing: border-box;
  padding: 15px;
  font-size: 20px;

  &::placeholder {
    color: #000000;
  }
`;

const Button = styled.button`
  width: 85vw;
  height: 46px;
  color: #ffffff;
  background-color: #a328d6;
  border-radius: 5px;
  margin-bottom: 36px;
  border: none;
  font-size: 20px;
  font-family: Raleway;
  font-weight: 700;
`;
