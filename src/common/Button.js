import styled from "styled-components";

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
  cursor: pointer;

  @media (min-width: 768px) {
    width: 50vw;
  }

  @media (min-width: 1024px) {
    width: 30vw;
  }
`;

export default Button;
