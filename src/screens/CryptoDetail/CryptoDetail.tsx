import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useCryptoDetail} from './useCryptoDetail';

const CryptoDetail = () => {
  const {data, price, loading, error, onChange, onSubmit} = useCryptoDetail();
  return (
    <ScrollView style={styles.container}>
      {data?.image && (
        <Image source={{uri: data?.image}} style={styles.image} />
      )}
      <Text style={styles.title}>{data?.name}</Text>

      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.bold}>Nombre:</Text>
          <Text style={styles.text}>{data?.name}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.bold}>Precio actual:</Text>
          <Text style={styles.text}>{data?.current_price + ' USD'}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.bold}>Capitalización de mercado:</Text>
          <Text style={styles.text}>{data?.market_cap}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.bold}>Posición en el mercado:</Text>
          <Text style={styles.text}>{data?.market_cap_rank}</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.bold}>Cantidad en pesos Colombianos:</Text>
      </View>

      <TextInput
        style={[styles.input, error && {borderColor: '#FF1E62'}]}
        textAlign="center"
        keyboardType="numeric"
        placeholder={'Ingrese la cantidad a convertir'}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
      />
      {error && (
        <Text style={styles.error}>
          Ha ocurrido un error. Intente nuevamente
        </Text>
      )}
      <Text style={styles.priceInCOP}>$ {price ? price : '0'} COP</Text>
      <TouchableOpacity
        disabled={loading}
        onPress={onSubmit}
        style={styles.btn}>
        {loading ? (
          <ActivityIndicator color={'#161B21'} size={'small'} />
        ) : (
          <Text style={styles.btnText}>Convertir</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CryptoDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161B21',
    padding: 14,
  },

  image: {
    marginTop: 42,
    width: 120,
    height: 120,
    alignSelf: 'center',
  },

  title: {
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFFFFF',
    alignSelf: 'center',
  },

  content: {
    padding: 12,
    gap: 12,
    marginVertical: 24,
    backgroundColor: '#252C36',
    borderRadius: 14,
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
  },

  text: {
    fontSize: 18,
    fontWeight: '300',
    color: '#FFFFFF',
  },

  error: {
    marginLeft: 6,
    marginTop: 8,
    color: '#FF1E62',
  },

  input: {
    color: '#000',
    marginTop: 24,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    fontSize: 18,
  },

  priceInCOP: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
  },

  btn: {
    minWidth: 180,
    marginTop: 24,
    backgroundColor: '#EFC432',
    alignSelf: 'center',
    padding: 8,
    borderRadius: 18,
  },

  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161B21',
    textAlign: 'center',
  },
});
