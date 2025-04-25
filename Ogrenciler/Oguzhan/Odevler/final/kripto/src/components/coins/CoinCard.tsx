import Image from "next/image";

type Props = {
    coin: {
        id: string;
        name: string;
        image: string;
        current_price: number;
        price_change_percentage_24h: number;
    };
};

export default function CoinCard({ coin }: Props) {
    return (
        <div className=" shadow-sm p-3 rounded bg-white d-flex justify-content-between ">
            <div className="d-flex align-items-center gap-3">
                <Image src={coin.image} alt={coin.name} width={32} height={32} />
                <strong>{coin.name}</strong>
            </div>
            <div className="text-end">
                <div>${coin.current_price.toFixed(2)}</div>
                <div className={`text-${coin.price_change_percentage_24h > 0 ? "success" : "danger"}`}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
            </div>
        </div>
    );
}
