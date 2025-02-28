import { Accordion, Container } from "react-bootstrap";

export default function FAQ() {
  return (
    <section className="faq bg-primary py-5">
      <div id="faq"></div>
      <Container className="py-5">
        <h3 className="text-center text-uppercase mb-5">F.A.Q</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>How do I place an order?</h5>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              Simply browse our collection, select your desired Pokemon, and
              click "Add to Cart". Follow the checkout process to complete your
              purchase.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h5>What payment methods do you accept?</h5>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              We accept all major credit cards, PayPal, and Pokemon League
              coins. All transactions are secure and encrypted.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h5>Do you ship internationally?</h5>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              Yes! We ship to trainers worldwide. Shipping costs and delivery
              times vary by location.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h5>What's your return policy?</h5>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              If you're not satisfied with your Pokemon, you can return it
              within 30 days for a full refund. The Pokemon must be in its
              original condition.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h5>Are your Pokemon authentic?</h5>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              All our Pokemon are certified authentic by the Pokemon League and
              come with a certificate of authenticity.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <h5>How do I care for my Pokemon?</h5>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              Each Pokemon comes with a detailed care guide. Our support team is
              also available 24/7 for any questions.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}
