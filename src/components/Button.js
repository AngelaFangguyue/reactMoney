import styled from "styled-components";
const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #f5d5d5;
  padding: 14px 10px;
  color: white;
  /* align-self: flex-start; */ /*加这句话的意思本来是button外面没有Center，而是Layout里的SwitchWrapper是它的父容器，此时button的宽度占满了整个屏幕的宽度。*/
`;
export default Button;
