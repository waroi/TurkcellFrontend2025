'use client'

import Button from "@/components/atoms/Buttons/Buttons"
import Paragraph from "@/components/atoms/Paragraph/Paragraph"
import Title from "@/components/atoms/Title/Title"
import { useRouter } from "next/navigation";
import { Image } from "react-bootstrap"
import './Success.scss'
import { useTranslations } from "next-intl";


const Success = ({ sell = false }: { sell?: boolean }) => {
    const translate = useTranslations("Wallet").raw("buy")
    const translateSell = useTranslations("Wallet").raw("sell")

    const step3 = translate.data.step3
    const sellStep4 = translateSell.step4
    const data = {
        btc: "1.356 BTC",
        transactionId: "0msx836930...87r398 ID",
        status: step3.paymentDetails.title,
        accountDetails: [
            { label: step3.paymentDetails.accName, value: "Veum Cecilia" },
            { label: step3.paymentDetails.accNumber, value: "548422222221" },
            { label: step3.paymentDetails.address, value: "079 Dariana Knoll, CA" },
            { label: step3.paymentDetails.switftCode, value: "UI8" },
            { label: step3.paymentDetails.bankAddress, value: "55416 Powlowski Spring, CA" },
        ],
    };

    const router = useRouter()
    return (
        <>
            <div className="success-box">
                <Title as="h2" className="success-title text-success">
                    {step3.title} <Image src="/images/wallet/step3/check.png" width={30} height={30} loading="lazy" />
                </Title>
                <Paragraph className="success-message">
                    {sell ? sellStep4.sold : step3.text} <strong className="text-success">{data.btc}</strong> for Rockie!
                </Paragraph>

                <div className="status-box">
                    <div className="state-box d-flex justify-content-between align-items-center">
                        <span className="label">{step3.status}</span>
                        <span className="value green">
                            {step3.statusText}
                        </span>
                    </div>
                    <div className="state-box d-flex justify-content-between align-items-center border-bottom-0">
                        <span className="label">{step3.transactionText}</span>
                        <span className="value">{data.transactionId}</span>
                    </div>
                </div>
            </div>

            <div className="payment-box">
                <Title as="h3" className="payment-title">{step3.paymentDetails.title}</Title>
                <p className="sub-title">{step3.paymentDetails.subTitle}</p>
                {data.accountDetails.map((item, index) => (
                    <div key={index} className="state-box">
                        <span className="label">{item.label}</span>
                        <span className="value with-icon">
                            {item.value}
                            <span className="copy-icon">
                                <Image src="/images/wallet/step3/copy.png" width={24} height={24} loading="lazy" />
                            </span>
                        </span>
                    </div>
                ))}
                <Title as="h6" className="refference-title">
                    {step3.paymentDetails.refCode}
                </Title>
                <Paragraph className="refference-description">
                    {step3.paymentDetails.refText} <br />
                    {step3.paymentDetails.refSub}
                </Paragraph>
                <div className="refference-code d-flex justify-content-center align-items-center">
                    <Paragraph className="mb-0">
                        BLUTUKHY34PB
                    </Paragraph>
                </div>
                <div className="buttons d-flex gap-3 mt-5">
                    <Button variant="cancel-button"
                        fontSize="md"
                        className="border-1 px-4 w-50 hero-button cancel-button"
                        height={48}
                        onClick={() => history.back()}>
                        <span className='px-2'>
                            {step3.buttons.trade}
                        </span>
                    </Button>
                    <Button variant="primary-button"
                        fontSize="md"
                        className="border-1 px-4 w-50 hero-button"
                        height={48}
                        onClick={() => router.push("/wallet")}>
                        <span className='px-2'>
                            {step3.buttons.wallet}
                        </span>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Success