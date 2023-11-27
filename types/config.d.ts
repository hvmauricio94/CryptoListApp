declare module 'react-native-config' {
  export interface NativeConfig {
    /** Get CRYPTO URL */
    readonly CRYPTO_URL: string;

    /** Get COIN GECKO API URL */
    readonly COIN_GECKO_URL: string;

    /** Get EXCHANGE RATE URL API URL */
    readonly EXCHANGE_RATE_URL: string;

    /** Get COIN GECKO API KEY */
    readonly COIN_GECKO_API_KEY: string;

    /** Get OPEN EXCHANGES RATES APP ID */
    readonly OPEN_EXCHANGES_APP_ID: string;

    readonly [key: string]: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
