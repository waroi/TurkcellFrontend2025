import { useLocation } from "react-router-dom";

const ResultPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status");

    return (
        <div className="result-page">
            <h2>
                {
                    status === "success" ? 
                    "Tebrikler, testi geçtiniz! 2. Aşama için sizinle iletişime geçeceğiz. " 
                    :
                     "Test başarısız, yeterli puan alamadınız. Vakit ayırdığınız için teşekkürler."
                }
            </h2>
        </div>
    );
};

export default ResultPage;
