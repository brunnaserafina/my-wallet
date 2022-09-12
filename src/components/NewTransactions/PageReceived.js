import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTransaction } from "../../services/mywallet";
import Input from "../../common/Input";
import Button from "../../common/Button";
import TransactionContainer from "../../common/Transaction";

export default function PageReceived() {
  const navigate = useNavigate("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const body = {
    value,
    description,
    type: "entrada",
  };

  function joinReceived(event) {
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
      <h2>Nova entrada</h2>

      <form onSubmit={joinReceived}>
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
        <Button>Salvar entrada</Button>
      </form>
    </TransactionContainer>
  );
}
