import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Category = ({onPress, nameCategory}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.categoryBtn}>
        <View style={styles.categoryIcon}>
          <MaterialCommunityIcons name="food" size={35} color="#FF6347" />
        </View>
        <Text style={styles.categoryBtnTxt}>{nameCategory}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryBtn: {
    flex: 1,
    width: '100%',
    marginHorizontal: 0,
    alignSelf: 'center',
    marginLeft: 20,
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fdeae7',
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    color: '#de4f35',
  },
});
