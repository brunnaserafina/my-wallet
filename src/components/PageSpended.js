import Input from "../common/Input";
import Button from "../common/Button";
import TransactionContainer from "../common/Transaction";

export default function PageSpended() {
  return (
    <TransactionContainer>
      <h2>Nova saída</h2>

      <form>
        <Input placeholder="Valor" />
        <Input placeholder="Descrição" />
        <Button>Salvar saída</Button>
      </form>
    </TransactionContainer>
  );
}
