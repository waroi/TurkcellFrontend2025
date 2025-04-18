"use client";
import NavList from "@/app/_components/ui/NavList";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SelectCurrency from "./SelectCurrency";
import BuySuccess from "./BuySuccess";
import Confirmation from "./Confirmation";
import { useTranslations } from "next-intl";

const PlayGround = () => {
  const [selectedKey, setSelectedKey] = useState("buy-cripto");
  const [selectedAction, setSelectedAction] = useState("select-currency");
  const BuyCriptoNavs = ["overview", "buy-cripto", "sell-cripto"];
  const steps = ["select-currency", "payment", "success"];
  const t = useTranslations("BuyCriptoPage");

  return (
    <Row className="mt-9">
      <Col
        xs="3"
        className="d-flex flex-column align-items-center justify-content-start py-3 flex-wrap gap-4 border-end pe-5"
      >
        {BuyCriptoNavs.map((nav) => (
          <NavList
            key={nav}
            parentKey="BuyCriptoNavs"
            location="BuyCriptoPage"
            item={nav}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />
        ))}
      </Col>
      <Col xs="9">
        <div className="d-flex align-items-center justify-content-around body2 fw-bold mb-5">
          {steps.map((item) => (
            <span key={item}> {t(`steps.${item}`)}</span>
          ))}
        </div>
        {selectedAction === "select-currency" && <SelectCurrency />}
        {selectedAction === "success" && <BuySuccess />}
        {selectedAction === "payment" && <Confirmation />}
      </Col>
    </Row>
  );
};

export default PlayGround;
