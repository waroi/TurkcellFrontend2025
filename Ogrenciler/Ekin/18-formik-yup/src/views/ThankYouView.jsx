import { Link } from "react-router";

export default function ThankYouView() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🎉 Başvurunuz Alındı!</h1>
      <p>En kısa sürede sizinle iletişime geçeceğiz.</p>

      <Link to="/">
        <button style={{ marginTop: "2rem", padding: "1rem 2rem" }}>
          Anasayfaya Dön
        </button>
      </Link>
    </div>
  );
}
