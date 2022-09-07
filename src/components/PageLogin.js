import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import Input from "../common/Input";
import Logo from "../common/Logo";
import Button from "../common/Button";

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
    <Container>
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
    </Container>
  );
}
