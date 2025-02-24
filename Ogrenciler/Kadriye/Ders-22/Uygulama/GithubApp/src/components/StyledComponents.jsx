import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

//import Button from "react-bootstrap/Container";

export const Container = styled.div`
  background-color: #343a40 important!;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const StyledInput = styled(Form.Control)`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
  }
`;

export const StyledButton = styled(Button)`
  background-color: #343a40;
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
export const StyledProfileCard = styled(Card)`
  margin-bottom: 20px;
  text-align: start;
  padding: 20px;
`;

export const ProfileImage = styled(Card.Img)`
  border-radius: 50%;
  width: 100%;
  max-width: 200px;
  object-fit: cover;
  margin: auto;
  margin-top: 20px;
`;
export const StyledBadge = styled(Badge)`
  border-radius: 20px;
  color: white;
  padding: 6px;
`;
