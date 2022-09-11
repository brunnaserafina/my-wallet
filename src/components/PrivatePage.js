import styled from "styled-components";
import { Link } from "react-router-dom";

function renderError() {
  localStorage.clear("mywallet");

  return (
    <ErrorContainer>
      <h3>VOCÊ NÃO É AUTORIZADO!</h3>
      <Link to={`/`}>
        <p>Faça login para continuar acessando</p>
      </Link>
    </ErrorContainer>
  );
}

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("mywallet"));

  if (!auth) {
    return renderError();
  }

  return <>{children}</>;
}

const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a328d6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Raleway;

  h3 {
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 10px;
  }

  a {
    color: #ffffff;
    font-weight: 700;
  }
`;
