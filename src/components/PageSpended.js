import Input from "../common/Input";
import Button from "../common/Button";
import TransactionContainer from "../common/Transaction";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PageSpended() {
  const navigate = useNavigate("");
  const { token } = useContext(UserContext);
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const body = {
    value: value,
    description: description,
    type: "saida",
  };

  function joinSpended(event) {
    event.preventDefault();

    const request = axios.post("http://localhost:5000/transactions", body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    request.catch((response) => {
      console.log(response);
      alert("Informe o valor e a descrição da entrada de forma correta");
    });
    request.then(() => {
      navigate("/registros");
    });
  }

  return (
    <TransactionContainer>
      <h2>Nova saída</h2>

      <form onSubmit={joinSpended}>
        <Input
          placeholder="Valor"
          value={value}
          type="number"
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          placeholder="Descrição"
          value={description}
          type="text"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button>Salvar saída</Button>
      </form>
    </TransactionContainer>
  );
}
