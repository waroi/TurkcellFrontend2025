import { useTranslations } from 'next-intl';
import './SellSteps.scss';

const SellSteps = ({ step }: { step: number }) => {
    const translate = useTranslations("Wallet").raw("sell").steps

    return (
        <div className="stepper justify-content-center">
            <div className="step">
                <div className={`circle ${step >= 1 ? "active" : ""}`}></div>
                <span className="label">{translate.step1}</span>
            </div>
            <div className={`line ${step >= 2 ? "active-line" : ""}`}></div>
            <div className="step">
                <div className={`circle ${step >= 2 ? "active" : ""}`}></div>
                <span className="label">{translate.step2}</span>
            </div>
            <div className={`line ${step >= 3 ? "active-line" : ""}`}></div>
            <div className="step">
                <div className={`circle ${step >= 3 ? "active" : ""}`}></div>
                <span className="label">{translate.step3}</span>
            </div>
            <div className={`line ${step === 4 ? "active-line" : ""}`}></div>
            <div className="step">
                <div className={`circle ${step == 4 ? "active" : ""}`}></div>
                <span className="label">{translate.step4}</span>
            </div>
        </div>
    )
}

export default SellSteps