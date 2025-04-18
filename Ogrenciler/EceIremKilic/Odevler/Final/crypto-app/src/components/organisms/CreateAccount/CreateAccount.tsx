import CustomButton from "@/components/atoms/CustomButton";
import React from "react";
import { Container } from "react-bootstrap";

const CreateAccount = () => {
  return (
    <div className="bg-primary">
      <div className="create-account">
        <Container className="py-4 d-flex justify-content-between align-items-center text-white">
          <div>
            <h4>Earn up to $25 worth of crypto</h4>
            <p>
              Discover how specific cryptocurrencies work — and get a bit of
              each crypto to try out for yourself.
            </p>
          </div>
          <CustomButton
            variant="light"
            label="Create Account"
            className="rounded-pill"
          />
        </Container>
      </div>
    </div>
  );
};

export default CreateAccount;
