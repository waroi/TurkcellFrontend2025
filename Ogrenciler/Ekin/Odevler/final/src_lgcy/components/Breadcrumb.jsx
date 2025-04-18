import Container from "@/components/Container";

export default function Breadcrumb({ title }) {
  return (
    <Container className="bg-tertiary dark-black py-5">
      <h2 className="d-flex justify-content-between align-items-center">
        {title}
        <span
          style={{ fontSize: "1.2rem" }}
          className="text-secondary fw-light"
        >
          Home / {title}
        </span>
      </h2>
    </Container>
  );
}
