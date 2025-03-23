import Card from "react-bootstrap/Card";
import PrimaryButton from "../Buttons/PrimaryButton";
import { NavLink } from "react-router";
import WrapperCard from "./WrapperCard";

function WelcomeCard({
  header,
  userName,
  navigateTo,
  navigationButtonTitle,
  footer,
  body,
}) {
  console.log(navigateTo);
  return (
    <WrapperCard>
      <Card className="text-center border-0">
        {header && <Card.Header>{header}</Card.Header>}
        <Card.Body>
          <Card.Title>Hoşgeldin {userName}!</Card.Title>
          <Card.Text>{body}</Card.Text>
          <NavLink to={navigateTo}>
            <PrimaryButton> {navigationButtonTitle}</PrimaryButton>
          </NavLink>
        </Card.Body>
        {footer && <Card.Footer className="text-muted">{footer}</Card.Footer>}
      </Card>
    </WrapperCard>
  );
}

export default WelcomeCard;
