import styled from "styled-components";

export default function PageSpended() {
  return (
    <SpendedContainer>
      <Message>Nova saída</Message>

      <form>
        <Input placeholder="Valor" />
        <Input placeholder="Descrição" />
        <Button>Salvar saída</Button>
      </form>
    </SpendedContainer>
  );
}

const SpendedContainer = styled.div`
  background-color: #8c11be;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Message = styled.div`
  font-family: Raleway;
  font-size: 26px;
  font-weight: 700;
  color: #f7f7f7;
  width: 85vw;
  margin-top: 30px;
  margin-bottom: 40px;
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
