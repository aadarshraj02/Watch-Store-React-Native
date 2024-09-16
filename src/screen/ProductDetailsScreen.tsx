import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import ProductCarousel from '../components/ProductCarousel';
import {fontSize, iconSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontFamily} from '../constants/fonts';

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
        <View style={styles.ratingWrapper}>
          <AntDesign name={'star'} color={colors.yellow} size={iconSize.sm} />
          <Text style={styles.productRating}>4.5</Text>
        </View>
      </View>
      <View style={styles.colorsContainer}>
        <Text style={styles.colorsHeading}>Colors</Text>
        <View style={styles.parentSelectColorContainer}>
          <TouchableOpacity
            style={[
              styles.selectColorContainer,
              // {
              //   borderColor: colors.purple,
              // },
            ]}>
            <View style={styles.circleColor} />
            <Text style={styles.colorText}>Silver</Text>
          </TouchableOpacity>
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
  titleContainer: {
    flexDirection: 'row',
  },
  titleWrapper: {
    flex: 1,
  },
  productTitle: {
    fontFamily: fontFamily.Bold,
    fontWeight: 800,
    color: colors.black,
    fontSize: fontSize.lg,
  },
  productBrand: {
    fontFamily: fontFamily.Medium,
    color: colors.gray,
    fontSize: fontSize.sm,
    paddingVertical: spacing.sm,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.lavender,
    borderRadius: spacing.sm,
    padding: spacing.sm,
    height: 50,
    marginTop: spacing.md,
  },
  productRating: {
    color: colors.gray,
    fontSize: fontSize.md,
  },
  colorsContainer: {
    paddingTop: spacing.md,
  },
  colorsHeading: {
    fontSize: fontSize.md,
    color: colors.black,
    paddingBottom: spacing.md,
  },
  parentSelectColorContainer: {},
  selectColorContainer: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    backgroundColor: colors.purple,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    fontSize: fontSize.sm,
    fontWeight: 'medium',
    color: colors.black,
  },
});
