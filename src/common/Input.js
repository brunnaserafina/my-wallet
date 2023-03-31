import styled from "styled-components";

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

  @media (min-width: 768px) {
    width: 50vw;
  }

  @media (min-width: 1024px) {
    width: 30vw;
  }
`;

export default Input;
