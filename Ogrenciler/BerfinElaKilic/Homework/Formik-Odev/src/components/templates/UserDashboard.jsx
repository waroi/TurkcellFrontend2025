import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WelcomeCard from "../atoms/cards/WelcomeCard";
import WrapperCard from "../atoms/cards/WrapperCard";
import AllJobs from "../../views/AllJobs";

function UserDashboard({ data, location }) {
  const text =
    " Seni gördüğümüze sevindik! Sen yokken yeni iş ilanları açıldı ve dikkat çekmeye başladın!";

  return (
    <Container className="d-flex flex-column justify-content-between h-100 gap-3 ">
      <Row className="mb-5">
        <Col xs={12} md={9}>
          {data && (
            <WelcomeCard
              userName={data.firstName}
              navigateTo={`${location.pathname}/profile`}
              navigationButtonTitle="Özgeçmişini görüntüle ve düzenle"
              body={text}
              className="border-secondary border-1"
            />
          )}
        </Col>

        <Col
          xs={12}
          md={3}
          className="d-flex p-5 align-items-center justify-content-center flex-column gap-2 border-start border-secondary border-1"
        >
          <div>Son 90 günde özgeçmişinin görüntülenme sayısı: 90</div>
        </Col>
      </Row>

      <AllJobs title="Başvurduğun İlanlar" limit="5" />
      <AllJobs title="Sana uygun İlanlar" limit="2" />
    </Container>
  );
}

export default UserDashboard;
