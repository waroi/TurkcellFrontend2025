"use client";

import React from "react";
import Button from "@/components/atoms/Button";

const ContactForm = () => {
  return (
    <div className="container py-5">
      <div className="row g-5 align-items-start">
        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "#B0B3C0",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              minHeight: "400px",
            }}
          />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold mb-1">Leave A Message For Us</h2>
          <p className="text-muted mb-4">Get in touch with Rockie</p>

          <form className="d-flex flex-column gap-3">
            <input className="form-control" placeholder="Enter your name" />
            <input className="form-control" placeholder="Enter mail" />
            <select className="form-select">
              <option>NFT Items</option>
              <option>Security</option>
              <option>Withdrawals</option>
            </select>
            <textarea
              className="form-control"
              placeholder="Enter your message"
              rows={4}
            />
            <div className="mt-3">
              <Button variant="primary" type="button">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
