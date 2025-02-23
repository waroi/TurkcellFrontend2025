import styled from "styled-components";

export const Button1 = styled.button`
  background-color: red;
  color: white;
  font-size: 1.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: darkred;
  }
`;

export const Button2 = styled(Button1)`
  background-color: blue;
  
  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  return (
    <div>
      <Button1>Red Button</Button1>
      <Button2>Blue Button</Button2>
    </div>
  );
}

export default App;
