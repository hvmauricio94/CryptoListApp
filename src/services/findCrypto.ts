import axios from 'axios';
import Config from 'react-native-config';
import {normalizeCryptoList} from '../providers/normalizer';

export async function listCrypto() {
  const res = await axios({
    method: 'GET',
    url: Config.CRYPTO_URL,
  });

  if (Array.isArray(res.data)) {
    return normalizeCryptoList(res.data);
  }

  return [];
}

export async function convertCrypto(amount: number) {
  const res = await axios({
    method: 'GET',
    url: Config.EXCHANGE_RATE_URL + `/USD`,
  });

  if (res) {
    const amountInCop = Number(amount) * res.data.rates['COP'];
    return amountInCop;
  }

  return 0;
}

export async function convertToUSD(id: string, amount: number) {
  const res = await axios({
    method: 'GET',
    url: Config.COIN_GECKO_URL + `/simple/price`,
    params: {
      ids: id,
      vs_currencies: 'usd',
    },
  });

  if (res.data) {
    const amountInUSD = res.data[id].usd;

    const usdToCop = await convertCrypto(amountInUSD * amount);

    return usdToCop;
  }

  return null;
}
