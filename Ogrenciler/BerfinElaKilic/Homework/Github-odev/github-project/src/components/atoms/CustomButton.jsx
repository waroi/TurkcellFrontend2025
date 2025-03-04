import styled from "styled-components";

export const CustomButton = styled.button`
  background-color:#212830;
  border:1px solid #3d444d;    
  transition: 80mscubic-bezier(0.33, 1, 0.68, 1);
  border-radius: 6px;
  color: white;
  width: 100%;
  padding: 0.25rem 0;
  cursor: pointer;
  &:hover{
      background-color: #262c36;
  }
`;
export const StyledSplitButton = styled(CustomButton)`
  padding: 0.25rem 1rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .9rem;
  gap: 8px;
`

