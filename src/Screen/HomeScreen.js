import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CompoHome from '../components/CompoHome';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [listData, setListData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => {
        console.log(res.data);
        setData(res.data.meals);
        setListData(res.data.meals);
      })
      .catch(err => {
        console.error(err);
      });
  }, [search, axios]);
  return (
    <View showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Category'})
          }>
          <View style={styles.categoryIcon}>
            <Ionicons name="restaurant" size={25} color="#FF6347" />
            <Text style={styles.categoryBtnTxt}>Makanan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('RandomList', {title: 'Random'})}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="expand-more" size={35} color="#FF6347" />
            <Text style={styles.categoryBtnTxt}>Random</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Populer
        </Text>
        <FlatList
          contentContainerStyle={{marginHorizontal: 10}}
          data={listData}
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 5,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    flexDirection: 'row',
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
    marginLeft: 30,
    fontWeight: 'bold',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
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
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
