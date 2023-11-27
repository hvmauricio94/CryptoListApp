import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import {CryptoCoin} from '../models/CryptoCoin';
import {useNavigation} from '@react-navigation/native';

interface CryptoItemProps {
  data: CryptoCoin;
}

const CryptoItem = (props: CryptoItemProps) => {
  const navigation = useNavigation<any>();

  const onPress = (data: CryptoCoin) => {
    navigation.navigate('CryptoDetail', {data: data});
  };

  const color = useMemo(() => {
    if (props.data.price_change > 0) {
      return '#42D4B0';
    }
    return '#FF1E62';
  }, [props.data.price_change]);

  const plus = props.data.price_change > 0 && '+';

  return (
    <TouchableOpacity onPress={() => onPress(props.data)} style={styles.item}>
      <Image source={{uri: props.data.image}} style={styles.image} />
      <View style={styles.container}>
        <View>
          <Text style={styles.bold}>{props.data.name}</Text>
          <Text style={styles.name}>{props.data.symbol.toUpperCase()}</Text>
        </View>
        <View>
          <Text style={styles.bold}>
            {props.data.current_price.toFixed(2) + ' USD'}
          </Text>
          <Text style={[styles.bold, {color: color}]}>
            {plus}
            {props.data.price_change + '%'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CryptoItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#252C36',
    width: '100%',
    padding: 14,
    borderRadius: 12,
  },

  image: {
    width: 40,
    height: 40,
    marginRight: 12,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'right',
  },

  change: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  name: {
    color: '#FFFFFF',
  },
});
