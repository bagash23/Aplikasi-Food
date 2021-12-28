import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Card from '../components/Card';
import axios from 'axios';

const CardListScreen = ({navigation}) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => {
        console.log(res.data);
        setCategory(res.data.categories);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <Card
        produkCategory={{uri: item.strCategoryThumb}}
        namaCategory={item.strCategory}
        deskProduk={item.strCategoryDescription}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        renderItem={renderItem}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
});
