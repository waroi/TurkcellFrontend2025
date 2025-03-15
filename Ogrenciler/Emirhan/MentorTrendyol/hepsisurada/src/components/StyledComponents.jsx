import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${({ bgColor }) => bgColor || "blue"};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const NavLogo = styled.div`
  width: 100px;
  height: auto;
  object-fit: cover;
`;
