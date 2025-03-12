import { Image } from "react-bootstrap";

export default function Marquee() {
  return (
    <section className="marquee position-relative overflow-hidden bg-danger text-white">
      <div className="d-flex align-items-center position-absolute h-100">
        <Image src="/running-pikachu.gif" alt="Running Pikachu" fluid />
        <p className="flex-shrink-0 m-0 fs-4 fw-bold">
          Catch them all while stocks last!
        </p>
        <Image src="/running-pikachu.gif" alt="Running Pikachu" fluid />
        <p className="flex-shrink-0 m-0 fs-4 fw-bold">
          Buy Any Pokémon, Get One FREE!
        </p>
        <Image src="/running-pikachu.gif" alt="Running Pikachu" fluid />
        <p className="flex-shrink-0 m-0 fs-4 fw-bold">
          Don't wait - This epic deal ends March 29th!
        </p>
        <Image src="/running-pikachu.gif" alt="Running Pikachu" fluid />
        <p className="flex-shrink-0 m-0 fs-4 fw-bold">
          Catch them all while stocks last!
        </p>
        <Image src="/running-pikachu.gif" alt="Running Pikachu" fluid />
        <p className="flex-shrink-0 m-0 fs-4 fw-bold">
          Buy Any Pokémon, Get One FREE!
        </p>
        <Image src="/running-pikachu.gif" alt="Running Pikachu" fluid />
        <p className="flex-shrink-0 m-0 fs-4 fw-bold">
          Don't wait - This epic deal ends March 29th!
        </p>
        <Image src="/running-pikachu.gif" alt="Running Pikachu" fluid />
        <p className="flex-shrink-0 m-0 fs-4 fw-bold">
          Catch them all while stocks last!
        </p>
        <Image src="/running-pikachu.gif" alt="Running Pikachu" fluid />
        <p className="flex-shrink-0 m-0 fs-4 fw-bold">
          Buy Any Pokémon, Get One FREE!
        </p>
        <Image src="/running-pikachu.gif" alt="Running Pikachu" fluid />
        <p className="flex-shrink-0 m-0 fs-4 fw-bold">
          Don't wait - This epic deal ends March 29th!
        </p>
      </div>
    </section>
  );
}
