import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Card = (children, className, ...props) => {
  return (
    <Card className={className} {...props}>
      {children}
    </Card>
  );
};

export default Card;
