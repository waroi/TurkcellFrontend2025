import { useTranslations } from 'next-intl';
import './WalletSteps.scss';

const WalletSteps = ({ step }: { step: number }) => {
    const translate = useTranslations("Wallet").raw("buy")
    return (
        <div className="stepper justify-content-center">
            <div className="step">
                <div className={`circle ${step >= 1 ? "active" : ""}`}></div>
                <span className="label">{translate.steps.step1}</span>
            </div>
            <div className={`line ${step >= 2 ? "active-line" : ""}`}></div>
            <div className="step">
                <div className={`circle ${step >= 2 ? "active" : ""}`}></div>
                <span className="label">{translate.steps.step2}</span>
            </div>
            <div className={`line ${step === 3 ? "active-line" : ""}`}></div>
            <div className="step">
                <div className={`circle ${step == 3 ? "active" : ""}`}></div>
                <span className="label">{translate.steps.step3}</span>
            </div>
        </div>
    )
}

export default WalletSteps