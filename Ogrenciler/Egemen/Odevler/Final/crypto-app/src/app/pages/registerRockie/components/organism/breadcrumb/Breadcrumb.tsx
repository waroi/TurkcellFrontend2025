"use client";
import React, { useEffect, useState } from "react";
import "./breadcrumb.scss";
import Link from "next/link";

interface BreadcrumbProps {
  header: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ header }) => {
  return (
    <div className="banner d-flex flex-row align-items-center justify-content-between">
      <div className="banner-content ">
        <p className="register-header">{header}</p>
      </div>
      <div className="home-register d-flex">
        <Link href="/homepage">
          <p className="link">Home</p>
        </Link>{" "}
        /{" "}
        <Link href="/register">
          {" "}
          <p className="link">Register</p>
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumb;
