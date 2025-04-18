export type CoinType = {
    id: string,
    image: string,
    symbol: string,
    current_price: string,
    price_change_percentage_24h: string,
    name: string,
    short: string,
    mon: string,
    market_cap?: number,
    market_cap_rank?: number,
    sparklines?: [] | number[] | any
}