import { useTheme } from "@/contexts/ThemeContext";
import "./CryptoInfo.scss";
import { useTranslations } from "next-intl";

const CryptoInfo = () => {
    const { theme } = useTheme()
    const translate = useTranslations("Dashboard").raw("topContainer")

    return (
        <div className="crypto-info-box">
            <div className="crypto-info-box__pair">
                <select className="form-select-lg">
                    <option>BTC/USD</option>
                    <option>ETH/USD</option>
                    <option>BNB/USD</option>
                    <option>XRP/USD</option>
                </select>
            </div>
            <div className="crypto-info-box__divider"></div>
            <div className="crypto-info-box__item">
                <div className="label">{translate.lastPrice}</div>
                <div>
                    <span className="last-price">0.058505</span>
                    <span className="usd-price ps-1">$390.68</span>
                </div>
            </div>
            <div className="crypto-info-box__item">
                <div className="label">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill={theme !== "dark" ? "#777E90" : "#B1B5C3"} xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4805 2C17.9945 2 22.4805 6.486 22.4805 12C22.4805 17.514 17.9945 22 12.4805 22C6.96647 22 2.48047 17.514 2.48047 12C2.48047 6.486 6.96647 2 12.4805 2ZM12.4805 3.5C7.79347 3.5 3.98047 7.313 3.98047 12C3.98047 16.687 7.79347 20.5 12.4805 20.5C17.1675 20.5 20.9805 16.687 20.9805 12C20.9805 7.313 17.1675 3.5 12.4805 3.5ZM12.1417 7.0954C12.5567 7.0954 12.8917 7.4314 12.8917 7.8454V12.2674L16.2967 14.2974C16.6517 14.5104 16.7687 14.9704 16.5567 15.3264C16.4157 15.5614 16.1667 15.6924 15.9117 15.6924C15.7807 15.6924 15.6487 15.6584 15.5277 15.5874L11.7577 13.3384C11.5317 13.2024 11.3917 12.9574 11.3917 12.6934V7.8454C11.3917 7.4314 11.7277 7.0954 12.1417 7.0954Z" fill="#777E90" />
                    </svg>
                    {translate.H24High}
                </div>
                <div className="d-flex align-items-center gap-1">
                    <span className="change">0.001447</span>
                    <span className="change-badge">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.87243 7.90568C4.95659 8.06168 5.11662 8.15893 5.29068 8.15893H8.00097V13.5105C8.00097 13.7807 8.2152 14 8.47915 14C8.7431 14 8.95732 13.7807 8.95732 13.5105V8.15893H11.6676C11.8423 8.15893 12.0023 8.06168 12.0859 7.90568C12.1707 7.74969 12.1649 7.5591 12.0725 7.40832L8.88401 2.22845C8.79602 2.08616 8.64364 2 8.47915 2C8.31466 2 8.16228 2.08616 8.07429 2.22845L4.88582 7.40832C4.83737 7.48795 4.8125 7.57868 4.8125 7.6694C4.8125 7.75034 4.8329 7.83193 4.87243 7.90568Z" fill="white" />
                        </svg>
                        3.24%</span>
                </div>
            </div>
            <div className="crypto-info-box__item">
                <div className="label">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill={theme !== "dark" ? "#777E90" : "#B1B5C3"} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.57427 11.8585C7.70051 12.0925 7.94055 12.2384 8.20164 12.2384H12.2671V20.2657C12.2671 20.671 12.5884 21 12.9843 21C13.3803 21 13.7016 20.671 13.7016 20.2657V12.2384H17.7671C18.0291 12.2384 18.2691 12.0925 18.3944 11.8585C18.5216 11.6245 18.513 11.3386 18.3743 11.1125L13.5916 3.34267C13.4597 3.12924 13.2311 3 12.9843 3C12.7376 3 12.509 3.12924 12.3771 3.34267L7.59436 11.1125C7.52167 11.2319 7.48438 11.368 7.48438 11.5041C7.48438 11.6255 7.51498 11.7479 7.57427 11.8585Z" fill="#777E90" />
                    </svg>
                    {translate.H24Low}
                </div>
                <span className="bold">0.060069</span>
            </div>
            <div className="crypto-info-box__item">
                <div className="label">
                    <svg style={{ rotate: "180deg" }} width="25" height="24" viewBox="0 0 25 24" fill={theme !== "dark" ? "#777E90" : "#B1B5C3"} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.57427 11.8585C7.70051 12.0925 7.94055 12.2384 8.20164 12.2384H12.2671V20.2657C12.2671 20.671 12.5884 21 12.9843 21C13.3803 21 13.7016 20.671 13.7016 20.2657V12.2384H17.7671C18.0291 12.2384 18.2691 12.0925 18.3944 11.8585C18.5216 11.6245 18.513 11.3386 18.3743 11.1125L13.5916 3.34267C13.4597 3.12924 13.2311 3 12.9843 3C12.7376 3 12.509 3.12924 12.3771 3.34267L7.59436 11.1125C7.52167 11.2319 7.48438 11.368 7.48438 11.5041C7.48438 11.6255 7.51498 11.7479 7.57427 11.8585Z" fill="#777E90" />
                    </svg>                     {translate.H24Change}
                </div>
                <span className="bold">0.056864</span>
            </div>
            <div className="crypto-info-box__item">
                <div className="label">
                    <svg fill={theme !== "dark" ? "#777E90" : "#B1B5C3"} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.436 1C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436ZM16.436 2.5H7.064C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5ZM7.1211 9.2025C7.5351 9.2025 7.8711 9.5385 7.8711 9.9525V16.8125C7.8711 17.2265 7.5351 17.5625 7.1211 17.5625C6.7071 17.5625 6.3711 17.2265 6.3711 16.8125V9.9525C6.3711 9.5385 6.7071 9.2025 7.1211 9.2025ZM11.7881 5.9185C12.2021 5.9185 12.5381 6.2545 12.5381 6.6685V16.8115C12.5381 17.2255 12.2021 17.5615 11.7881 17.5615C11.3741 17.5615 11.0381 17.2255 11.0381 16.8115V6.6685C11.0381 6.2545 11.3741 5.9185 11.7881 5.9185ZM16.3784 12.8275C16.7924 12.8275 17.1284 13.1635 17.1284 13.5775V16.8115C17.1284 17.2255 16.7924 17.5615 16.3784 17.5615C15.9644 17.5615 15.6284 17.2255 15.6284 16.8115V13.5775C15.6284 13.1635 15.9644 12.8275 16.3784 12.8275Z" fill="#777E90" />
                    </svg>
                    {translate.H24Vol}
                </div>
                <span className="bold">8,532.12 BTC</span>
            </div>
        </div>
    )
}

export default CryptoInfo