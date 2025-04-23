import { useState,useEffect } from "react";
import useGetCryptos from "./useGetCryptos";
const useSetDropdown = () => {
    const { cryptos } = useGetCryptos();
    const [coin, setCoin] = useState("BTC/USDT");
    const handleCoinChange = (symbol) => {
      setCoin(symbol);
    };
    useEffect(() => {
        import ("bootstrap/dist/js/bootstrap.bundle.min.js");
      if (cryptos.length > 0) {
        setCoin(cryptos[0].symbol);
      }
    }, [cryptos]);  
    
    return {coin,handleCoinChange};
}

export default useSetDropdown