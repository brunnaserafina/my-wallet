import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PageLogin() {
  return (
    <HomeContainer>
      <Logo>MyWallet</Logo>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Button>Entrar</Button>
      <Link to={"/cadastro"}>
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
