"use client";

import "@/styles/contact.scss";
import Container from "@/components/Container";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Button from "@/components/Button";
import Breadcrumb from "@/components/Breadcrumb";

export default function Contact() {
  return (
    <main>
      <Breadcrumb title="Contact" />
      <Container className="bg-white dark-black py-5">
        <div className="row py-5">
          <div className="d-none d-xl-block col-xl-6">
            <Image src="/contact.png" alt="Contact" width={600} height={742} />
          </div>
          <div className="col-12 col-xl-6 mt-2">
            <h2 className="text-center mb-2">Leave A Message For Us</h2>
            <p className="text-center mb-4">Get in touch with Rockie</p>
            <div className="form">
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter mail"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <select
                  id="subject"
                  className="form-select"
                  aria-label="Subject"
                  defaultValue="0"
                >
                  <option value="0">NFT Items</option>
                  <option value="1">Transactions</option>
                  <option value="1">Account</option>
                  <option value="2">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your message"
                  id="message"
                  rows={5}
                ></textarea>
              </div>
              <Button
                className="w-100 mt-5"
                onClick={() =>
                  setTimeout(() => alert("Message sended successfully."))
                }
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Marquee />
    </main>
  );
}
