import styled from "styled-components";
import Card from "react-bootstrap/Card";

const CardTitle = styled(Card.Title)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default CardTitle;
