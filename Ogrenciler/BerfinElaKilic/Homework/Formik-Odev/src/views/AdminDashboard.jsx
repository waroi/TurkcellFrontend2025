import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WelcomeCard from "../components/atoms/cards/WelcomeCard";
import WrapperCard from "../components/atoms/cards/WrapperCard";
import AllJobs from "./AllJobs";
import { useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

function AdminDashboard() {
  const location = useLocation();
  const { user } = useAuth();

  const text =
    "Merhaba! Yönetici olarak platformda tüm ilanları görüntüleyebilir ve yönetebilirsiniz!";
  return (
    <Container className="d-flex flex-column justify-content-between h-100 gap-3 ">
      <Row className="mb-5">
        <Col
          xs={12}
          md={6}
          className="d-flex p-5 align-items-center justify-content-center flex-column gap-2 "
        >
          <WelcomeCard
            userName={`Hoşgeldin ${user.firstName}`}
            navigateTo={`${location.pathname}`}
            navigationButtonTitle="İlanlarım"
            body={text}
            className="border-secondary border-1"
          />
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex p-5 align-items-center justify-content-center flex-column gap-2 border-start border-secondary border-1"
        >
          {" "}
          <WelcomeCard
            userName="Sınav Yönetimi"
            navigateTo={`${location.pathname}/exams`}
            navigationButtonTitle="Sınav Ekle"
            body="Bu modülden sınav oluşturabilir ve adaylara gönderebilirsiniz."
            className="border-secondary border-1"
          />
        </Col>
      </Row>
      <AllJobs title="İlanlarım" />
    </Container>
  );
}

export default AdminDashboard;
