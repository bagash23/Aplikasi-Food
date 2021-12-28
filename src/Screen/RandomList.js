import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card';
import axios from 'axios';

const RandomList = ({navigation}) => {
  const [random, setRandom] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => {
        console.log(res.data);
        setRandom(res.data.meals);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <View style={styles.cardsWrapper}>
      <FlatList
        data={random}
        keyExtractor={item => item.idMeal}
        renderItem={({item}) => {
          return (
            <Card
              produkCategory={{uri: item.strMealThumb}}
              namaCategory={item.strMeal}
              deskProduk={item.strInstructions}
              onPress={() =>
                navigation.navigate('CardItemDetails', {id: item.idMeal})
              }
            />
          );
        }}
      />
    </View>
  );
};

export default RandomList;

const styles = StyleSheet.create({
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
});
