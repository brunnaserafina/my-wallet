import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTransaction } from "../../services/mywallet";
import Input from "../../common/Input";
import Button from "../../common/Button";
import TransactionContainer from "../../common/Transaction";

export default function PageSpended() {
  const navigate = useNavigate("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const body = {
    value: value,
    description: description,
    type: "saida",
  };

  function joinSpended(event) {
    event.preventDefault();

    postTransaction(body)
      .catch(() => {
        alert("Informe o valor e a descrição da entrada de forma correta");
      })
      .then(() => {
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
