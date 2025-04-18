"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
const BlogCard = () => {
  const { translations } = useLanguage();
  return (
    <div className="col-md-4">
      <div className="card border-0 mt-91 mb-12">
        <div className="blogImage d-flex align-items-center justify-content-center">
          <Image src={"/assets/play.svg"} width={48} height={48} alt="play" />
        </div>
        <div className="card-body">
          <span className="display-3 text-white fw-normal badge bg-primary px-93 py-99 mb-11 text-uppercase">
            {translations.learnAndEarn}
          </span>
          <h5 className="fs-3 text-dark fw-bold mb-16">
            {translations.learnAboutUI}
          </h5>
          <div className="d-flex align-items-center justify-content-between ">
            <div className="d-flex align-items-center">
              <div className="circleAvatarBlog bg-success"></div>
              <p className="display-2 fw-bold text-secondary ps-93">
                Mustafa Fatih Gündüz
              </p>
            </div>
            <p className="display-2 fw-normal text-secondary">April 17, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
