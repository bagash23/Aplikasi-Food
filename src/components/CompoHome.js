import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import StarRating from './StarRating';

const CompoHome = ({produk, namaProduk, deskProduk, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image source={produk} resizeMode="cover" style={styles.cardImg} />
        </View>
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{namaProduk}</Text>
        <StarRating ratings={4} reviews={99} />
        <Text style={styles.cardDetails}>{deskProduk}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CompoHome;

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 50,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '150%',
    width: '100%',
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
