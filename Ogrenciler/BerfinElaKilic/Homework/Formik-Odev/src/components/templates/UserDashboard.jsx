import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WelcomeCard from "../atoms/cards/WelcomeCard";
import WrapperCard from "../atoms/cards/WrapperCard";

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
            />
          )}
        </Col>
        <Col xs={12} md={3} className="d-flex flex-column gap-2">
          <WrapperCard>
            Son 90 günde özgeçmişinin görüntülenme sayısı: 90
          </WrapperCard>
          <WrapperCard>Bir bilgi tanesi</WrapperCard>
        </Col>
      </Row>
      <div>
        <h5> Başvurduğun İLANLAR</h5>
        <WrapperCard>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            officia eligendi laboriosam quidem facere non reiciendis vitae sunt
            molestias. Corrupti!
          </p>
        </WrapperCard>
        <WrapperCard>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            officia eligendi laboriosam quidem facere non reiciendis vitae sunt
            molestias. Corrupti!
          </p>
        </WrapperCard>
        <WrapperCard>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            officia eligendi laboriosam quidem facere non reiciendis vitae sunt
            molestias. Corrupti!
          </p>
        </WrapperCard>
        <WrapperCard>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            officia eligendi laboriosam quidem facere non reiciendis vitae sunt
            molestias. Corrupti!
          </p>
        </WrapperCard>
      </div>

      <h5> Sana uygun İLANLAR</h5>
      <WrapperCard>
        <p>Sana uygun işler jobCard bleşeniyle çağırırım</p>
      </WrapperCard>
    </Container>
  );
}

export default UserDashboard;
