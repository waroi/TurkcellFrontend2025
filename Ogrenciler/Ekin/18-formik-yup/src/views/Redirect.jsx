import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Button from "#/atoms/Button";

export default function ThankYouView() {
  const navigate = useNavigate();

  const { from } = useParams();

  // setTimeout(() => navigate("/"), 5000);

  return (
    <div className="container text-center">
      <h2 className="fs-1 mb-5">
        {from == "application"
          ? "🎉 Başvurunuz Alındı!"
          : "🎉 Sınav Tamamlandı!"}
      </h2>
      <h3 className="fs-5 mb-5">
        Başvuru sürecinizi kullanıcı sayfanızdan kontrol etmeyi unutmayın.
        Anasayfaya yönlendiriliyorsunuz...
      </h3>
      <Button to="/">Anasayfaya Dön</Button>
    </div>
  );
}
