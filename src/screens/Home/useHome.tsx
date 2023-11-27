import {useEffect, useState} from 'react';
import {listCrypto} from '../../services/findCrypto';
import {CryptoCoin} from '../../models/CryptoCoin';

export default function useHome() {
  const [cryptoList, setCryptoList] = useState<CryptoCoin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    setLoading(true);
    try {
      const data = await listCrypto();
      setCryptoList(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  return {
    cryptoList,
    loading,
    setLoading,
    fetch,
  };
}
