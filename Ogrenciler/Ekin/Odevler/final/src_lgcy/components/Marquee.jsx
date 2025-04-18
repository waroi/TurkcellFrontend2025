import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Marquee() {
  return (
    <Container className="marquee py-4 text-white">
      <div className="row">
        <div className="col-8">
          <h3 style={{ fontSize: "2rem" }}>Earn up to $25 worth of crypto</h3>
          <p className="text-white mb-0 fw-light small">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </p>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <Button className="bg-white">
            <span className="text-dark fw-bold">Create Account</span>
          </Button>
        </div>
      </div>
    </Container>
  );
}
