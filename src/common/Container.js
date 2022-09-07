import styled from "styled-components";

const Container = styled.div`
  background-color: #8c11be;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    font-size: 15px;
    font-family: Raleway;
    font-weight: 700;
    color: #ffffff;
    text-decoration: none;
  }
`;

export default Container;
