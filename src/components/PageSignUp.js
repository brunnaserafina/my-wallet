import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function PageSignUp() {
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const body = {
    name,
    email,
    password,
    confirmPassword,
  };

  function joinSignUp(event) {
    event.preventDefault();

    const requisicao = axios.post("http://localhost:5000/cadastro", body);
    requisicao.catch(() => {
      alert("Confira os dados!");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    });
    requisicao.then((response) => {
      console.log(response);
      navigate("/login");
    });
  }

  return (
    <HomeContainer>
      <Logo>MyWallet</Logo>

      <form onSubmit={joinSignUp}>
        <Input
          placeholder="Nome"
          value={name}
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          value={email}
          type="email"
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
        <Input
          placeholder="Confirme a senha"
          value={confirmPassword}
          type="password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button>Cadastrar</Button>
      </form>

      <Link to={`/`}>
        <p>Já tem uma conta? Entre agora!</p>
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
