import {CryptoCoin} from '../models/CryptoCoin';

export function normalizeCrypto(data: any): CryptoCoin {
  const movie: CryptoCoin = {
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    image: data.image,
    current_price: data.current_price,
    market_cap: data.market_cap,
    market_cap_rank: data.market_cap_rank,
    last_updated: data.last_updated,
    price_change: data.price_change_percentage_24h,
  };

  return movie;
}

export function normalizeCryptoList(data: any): CryptoCoin[] {
  const cryptoList = data.map((event: any) => normalizeCrypto(event));
  return cryptoList;
}
