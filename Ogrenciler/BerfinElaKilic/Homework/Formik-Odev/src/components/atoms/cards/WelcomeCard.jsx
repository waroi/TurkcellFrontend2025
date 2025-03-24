import Card from "react-bootstrap/Card";
import PrimaryButton from "../Buttons/PrimaryButton";
import { NavLink } from "react-router";
import WrapperCard from "./WrapperCard";
import SuccessButton from "../Buttons/SuccessButton";
import WarningButton from "../Buttons/WarningButton";

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
      <Card className="text-center border-0 bg-transparent">
        {header && <Card.Header>{header}</Card.Header>}
        <Card.Body>
          <Card.Title className="fw-bold fs-2">
            Hoşgeldin {userName}!
          </Card.Title>
          <Card.Text>{body}</Card.Text>
          <NavLink to={navigateTo}>
            <WarningButton> {navigationButtonTitle}</WarningButton>
          </NavLink>
        </Card.Body>
        {footer && <Card.Footer className="text-muted">{footer}</Card.Footer>}
      </Card>
    </WrapperCard>
  );
}

export default WelcomeCard;
