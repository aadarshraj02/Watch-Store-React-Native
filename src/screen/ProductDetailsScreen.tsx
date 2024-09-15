import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import ProductCarousel from '../components/ProductCarousel';

const ProductDetailsScreen = (): JSX.Element => {
  const item = useRoute().params.item;
  return (
    <View>
      <Header />
      <ProductCarousel />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
