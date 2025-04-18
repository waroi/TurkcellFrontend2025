import { useState } from "react";

export function useCurrencyExchange(initialPayAmount, initialReceiveAmount, initialPayCurrency, initialReceiveCurrency) {
    const [payAmount, setPayAmount] = useState(initialPayAmount)
    const [receiveAmount, setReceiveAmount] = useState(initialReceiveAmount)
    const [payCurrency, setPayCurrency] = useState(initialPayCurrency)
    const [receiveCurrency, setReceiveCurrency] = useState(initialReceiveCurrency)

    const handleSwap = () => {
        setPayAmount(receiveAmount)
        setReceiveAmount(payAmount)
        setPayCurrency(receiveCurrency)
        setReceiveCurrency(payCurrency)
    }

    return {
        payAmount,
        setPayAmount,
        receiveAmount,
        setReceiveAmount,
        payCurrency,
        setPayCurrency,
        receiveCurrency,
        setReceiveCurrency,
        handleSwap,
    }
}