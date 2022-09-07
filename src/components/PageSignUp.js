import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import Input from "../common/Input";
import Logo from "../common/Logo";
import Button from "../common/Button";

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
    <Container>
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
    </Container>
  );
}
