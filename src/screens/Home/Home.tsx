import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import useHome from './useHome';
import CryptoItem from '../../components/CryptoItem';

const Home = () => {
  const {cryptoList: data, loading, fetch} = useHome();

  if (loading) {
    return (
      <View style={styles.emptyContainer}>
        <ActivityIndicator color={'#FFFFFF'} size={'large'} />
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetch} />
      }>
      <Text style={styles.title}>Crypto App</Text>
      {data?.length > 0 ? (
        data.map((item, index) => (
          <CryptoItem data={item} key={index}></CryptoItem>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Image source={require('../../assets/images/search.png')} />
          <Text style={styles.emptyText}>
            La lista de criptomonedas está vacía. Vuelve a intentarlo más tarde.
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: '#161B21',
    alignItems: 'center',
    gap: 16,
  },

  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 12,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 14,
    backgroundColor: '#161B21',
    alignItems: 'center',
    gap: 16,
  },

  emptyText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});
