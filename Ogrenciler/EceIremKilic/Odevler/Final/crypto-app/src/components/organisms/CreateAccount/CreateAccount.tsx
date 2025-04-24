"use client";
import CustomButton from "@/components/atoms/CustomButton";
import { useTranslations } from "next-intl";
import React from "react";
import { Container } from "react-bootstrap";

const CreateAccount = () => {
  const t = useTranslations();
  return (
    <div className="bg-primary">
      <div className="create-account">
        <Container className="py-4 d-flex justify-content-between align-items-center text-white">
          <div>
            <h4>{t("promoSection.title")}</h4>
            <p>{t("promoSection.description")}</p>
          </div>
          <CustomButton
            variant="light"
            label={t("promoSection.cta")}
            className="rounded-pill"
          />
        </Container>
      </div>
    </div>
  );
};

export default CreateAccount;
