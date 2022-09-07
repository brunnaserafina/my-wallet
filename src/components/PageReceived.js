import TransactionContainer from "../common/Transaction";
import Input from "../common/Input";
import Button from "../common/Button";

export default function PageReceived() {
  return (
    <TransactionContainer>
      <h2>Nova entrada</h2>

      <form>
        <Input placeholder="Valor" />
        <Input placeholder="Descrição" />
        <Button>Salvar entrada</Button>
      </form>
    </TransactionContainer>
  );
}
