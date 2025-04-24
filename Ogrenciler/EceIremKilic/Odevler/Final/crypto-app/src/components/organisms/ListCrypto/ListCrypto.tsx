import React from "react";
import ListTabs from "../../molecules/ListTabs";
import { Container } from "react-bootstrap";
import ListCards from "../../molecules/ListCards";

const ListCrypto = () => {
  return (
    <Container>
      <div className="card border-0 shadow p-3 rounded-4">
        <ListTabs />
        <hr className="mx-2" />
        <ListCards />
      </div>
    </Container>
  );
};

export default ListCrypto;
