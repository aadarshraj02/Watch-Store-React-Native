import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {iconSize} from '../constants/dimensions';
import Header from '../components/Header';

const ProductDetailsScreen = (): JSX.Element => {
  const item = useRoute().params.item;
  return (
    <View>
      <Header />
      <Text>ProductDetailsScreen</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
