import {useEffect, useState} from 'react';
import {CryptoCoin} from '../../models/CryptoCoin';
import {useRoute} from '@react-navigation/native';
import {convertToUSD} from '../../services/findCrypto';

export function useCryptoDetail() {
  const {params} = useRoute();
  const query = params as any;
  const [cryptoData, setCryptoData] = useState<CryptoCoin>();
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState('0');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query?.data) {
      setCryptoData(query.data);
    }
  }, []);

  const onChange = (value: string) => {
    setAmount(Number(value));
  };

  const onSubmit = async () => {
    setError(false);

    try {
      if (cryptoData) {
        const data = await convertToUSD(cryptoData?.id, amount);

        if (data) {
          setPrice(data.toLocaleString());
        } else {
          setError(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    data: cryptoData,
    amount,
    price,
    error,
    onChange,
    onSubmit,
  };
}
