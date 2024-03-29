import styled from "styled-components";

const TransactionContainer = styled.div`
  background-color: #8c11be;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    color: #f7f7f7;
    width: 85vw;
    margin-top: 30px;
    margin-bottom: 40px;

    @media (min-width: 768px) {
      width: 50vw;
    }

    @media (min-width: 1024px) {
      width: 30vw;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default TransactionContainer;
