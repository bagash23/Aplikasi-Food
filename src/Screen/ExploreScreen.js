import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import axios from 'axios';
import CompoHome from '../components/CompoHome';

const ExploreScreen = ({navigation}) => {
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    // getData();
    console.log(search);
    axios
      .get(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => {
        console.log(res.data);
        setfilterData(res.data.meals);
        setmasterData(res.data.meals);
      })
      .catch(err => {
        console.error(err);
      });
  }, [search, axios]);

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Cari Makanan"
        value={search}
        onChangeText={value => setSearch(value)}
      />
      <FlatList
        contentContainerStyle={{marginHorizontal: 10}}
        data={masterData}
        keyExtractor={item => item.idMeal}
        renderItem={({item}) => {
          return (
            <CompoHome
              produk={{uri: item.strMealThumb}}
              namaProduk={item.strMeal}
              deskProduk={item.strArea}
              onPress={() =>
                navigation.navigate('CardItemDetails', {
                  id: item.idMeal,
                })
              }
            />
          );
        }}
      />
    </View>
    // </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#000',
    backgroundColor: 'white',
  },
});
