import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import ProductCarousel from '../components/ProductCarousel';
import {spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';

const ProductDetailsScreen = (): JSX.Element => {
  const item = useRoute().params.item;
  return (
    <View style={styles.container}>
      <Header />
      <ProductCarousel images={item.images} />
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.productTitle}>{item.name}</Text>
          <Text style={styles.productBrand}>{item.brand}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.background,
  },
  titleContainer: {},
  titleWrapper: {},
  productTitle: {},
  productBrand: {},
});
