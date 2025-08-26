import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: darkblue;
  }
`;

function Btn() {
  return <Button>Click Me</Button>;
}
export default Btn;
