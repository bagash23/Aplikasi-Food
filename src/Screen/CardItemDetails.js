import React, {useState, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View, Linking} from 'react-native';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardItemDetails = ({route, navigation}) => {
  const {id} = route.params;
  const [dataDetails, setdataDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => {
        console.log(res.data.meals);
        setdataDetails(res.data.meals);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <Image
            source={{uri: dataDetails[0]?.strMealThumb}}
            style={styles.banner}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
                maxWidth: '80%',
              }}>
              {dataDetails[0]?.strMeal}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons name="tag" size={15} color="#FF6347" />
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: '#FF6347'}}>
                {dataDetails[0]?.strTags}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fdeae7',
              width: 100,
              paddingVertical: 5,
              marginVertical: 10,
            }}>
            <Text style={{color: '#de4f35', alignSelf: 'center'}}>
              {dataDetails[0]?.strCategory}
            </Text>
          </View>
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            {dataDetails[0]?.strArea}
          </Text>
          <Text
            style={{color: 'blue'}}
            onPress={() => Linking.openURL(`${dataDetails[0]?.strYoutube}`)}>
            Youtube
          </Text>
          <View style={{marginVertical: 12}}>
            <Text
              style={{fontSize: 15, fontWeight: 'bold', borderBottomWidth: 1}}>
              Intstructions
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strInstructions}
            </Text>
          </View>
          <View>
            <Text
              style={{fontSize: 15, fontWeight: 'bold', borderBottomWidth: 1}}>
              Gredient
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient1}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient2}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient3}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient4}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient5}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient6}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient7}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient8}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient9}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient9}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient10}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient11}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient12}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient13}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient14}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strIngredient15}
            </Text>
          </View>
          <View style={{marginVertical: 12}}>
            <Text
              style={{fontSize: 15, fontWeight: 'bold', borderBottomWidth: 1}}>
              Measure
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure1}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure2}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure3}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure4}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure5}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure6}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure7}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure8}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure9}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure10}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure11}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure12}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure13}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure14}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600'}}>
              {dataDetails[0]?.strMeasure15}
            </Text>
          </View>
          <Text
            style={{color: 'blue'}}
            onPress={() => Linking.openURL(`${dataDetails[0]?.strSource}`)}>
            Source
          </Text>
          <Text
            style={{color: 'blue'}}
            onPress={() =>
              Linking.openURL(`${dataDetails[0]?.strImageSource}`)
            }>
            Image Source
          </Text>
          <Text style={{fontSize: 12, fontWeight: '600'}}>
            {dataDetails[0]?.strCreativeCommonsConfirmed}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CardItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    height: 150,
    width: '100%',
    borderRadius: 20,
  },
});
