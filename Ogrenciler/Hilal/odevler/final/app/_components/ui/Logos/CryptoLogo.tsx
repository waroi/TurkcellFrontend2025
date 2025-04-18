import Image from "next/image";
const CryptoLogo = ({
  coinId,
  coinSymbol,
}: {
  coinId: number;
  coinSymbol: string;
}) => {
  return (
    <span className="rounded-circle crypto-icon d-inline overflow-hidden bg-secondary2 d-flex justify-content-center align-items-center">
      <Image
        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`}
        alt={`${coinSymbol} logo`}
        width={24}
        height={24}
        className="w-100 h-100"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </span>
  );
};

export default CryptoLogo;
