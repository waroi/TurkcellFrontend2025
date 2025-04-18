'use client'

import Title from "@/components/atoms/Title/Title"
import './SellPageForms.scss'
import Paragraph from "@/components/atoms/Paragraph/Paragraph"
import { Image } from "react-bootstrap"
import FormField from "@/components/molecules/FormField/FormField"
import Input from "@/components/atoms/Input/Input"
import Button from "@/components/atoms/Buttons/Buttons"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"

const SellPageForms = () => {
    const router = useRouter()
    const translate = useTranslations("Wallet").raw("sell").step3


    const informationList = [
        {
            image: "/images/wallet/step2/icon-1.png",
            title: translate.pay,
            amount: "3.000.000 VND"
        },
        {
            image: "/images/wallet/step2/icon-2.png",
            title: translate.get,
            amount: "0.00207026 BTC"
        },
        {
            image: "/images/wallet/step2/icon-3.png",
            title: translate.for,
            amount: "Rockie"
        }
    ]

    return (
        <>
            <div className="buy-step2">
                <Title className="fs-5 title" as="h4">{translate.title}</Title>
                <Paragraph className="description">
                    {translate.text} 1.356 BTC For Bitcloud Bank
                </Paragraph>
                <div className="information-list">
                    <div className="d-flex information-main-box justify-content-between align-items-center">
                        {informationList.map((information: any) => (
                            <div key={information.image} className="d-flex gap-2">
                                <Image src={information.image} width={40} height={40} loading="lazy" />
                                <div className="info-texts">
                                    <Paragraph className="info-title mb-0">
                                        {information.title}
                                    </Paragraph>
                                    <Paragraph className="info-message mt-0">
                                        {information.amount}
                                    </Paragraph>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="buy-step2 buystep-second">
                <Title className="fs-5 title" as="h4">{translate.forms.title}</Title>
                <Title className="fs-6 subtitle mb-0" as="h5">
                    {translate.forms.subTitle}
                </Title>
                <FormField
                    id="account-name"
                    labelClass="buy-label"
                    label={translate.forms.accName}
                    placeholder="Please fill in account name"
                >
                    <Input
                        id="account-name"
                        className="form-control-lg"
                        placeholder="Please fill in account name."
                    />
                </FormField>
                <FormField
                    id="account-number"
                    label={translate.forms.accNumber}
                    labelClass="buy-label"
                    placeholder="Account number"
                >
                    <Input
                        id="account-number"
                        className="form-control-lg"
                        placeholder="V548422222221"
                    />
                </FormField>
                <FormField
                    id="address"
                    labelClass="buy-label"
                    label={translate.forms.address}
                    placeholder="Address"
                >
                    <Input
                        id="address"
                        className="form-control-lg"
                        placeholder="079 Dariana Knoll, CA"
                    />
                </FormField>
                <FormField
                    id="swift-code"
                    labelClass="buy-label"
                    label={translate.forms.switftCode}
                    placeholder="SWIFT Code"
                >
                    <Input
                        id="swift-code"
                        className="form-control-lg"
                        placeholder="UI8"
                    />
                </FormField>
                <FormField
                    id="bank-address"
                    labelClass="buy-label"
                    label={translate.forms.bankAddress}
                    placeholder="Bank Address"
                >
                    <Input
                        id="bank-address"
                        className="form-control-lg"
                        placeholder="55416 Powlowski Spring, CA"
                    />
                </FormField>
                <Title as="h6" className="refference-title">
                    {translate.refCode}
                </Title>
                <Paragraph className="refference-description">
                    {translate.refText} <br />
                    {translate.refSub}
                </Paragraph>
                <div className="refference-code d-flex justify-content-center align-items-center">
                    <Paragraph className="mb-0">
                        BLUTUKHY34PB
                    </Paragraph>
                </div>
                <div className="buttons d-flex gap-3">
                    <Button variant="cancel-button"
                        fontSize="md"
                        className="border-1 px-4 w-50 hero-button cancel-button"
                        height={48}
                        onClick={() => history.back()}>
                        <span className='px-2'>
                            {translate.canceButtonText}
                        </span>
                    </Button>
                    <Button variant="primary-button"
                        fontSize="md"
                        className="border-1 px-4 w-50 hero-button"
                        height={48}
                        onClick={() => router.push("/wallet/sell/step4")}>
                        <span className='px-2'>
                            {translate.goButtonText}
                        </span>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default SellPageForms