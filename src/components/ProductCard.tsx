import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import {useNavigation} from '@react-navigation/native';

type SmartWatch = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  images: string[];
  details: string;
  review: string;
};

type ProductCardProps = {
  item: SmartWatch;
};

const ProductCard = ({item}: ProductCardProps): JSX.Element => {
  const navigation = useNavigation();

  const handleProductDetailsScreen = () => {
    navigation.navigate('PRODUCT_DETAILS', {item});
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleProductDetailsScreen}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: item.image}} style={styles.productImage} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>
          <Text style={styles.priceLabel}>Price: </Text>
          <Text style={styles.priceValue}>${item.price}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    elevation: 5,
    backgroundColor: colors.background,
    borderRadius: 12,
    marginVertical: spacing.md,
  },
  imageWrapper: {
    backgroundColor: '#ffc8b7',
    borderRadius: 12,
    margin: spacing.sm,
  },
  productImage: {
    height: 130,
    width: '100%',
    resizeMode: 'center',
  },
  contentContainer: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  name: {
    color: colors.black,
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
  },
  brand: {
    color: colors.gray,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    paddingVertical: spacing.xs,
  },
  price: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  priceLabel: {
    color: colors.purple,
  },
  priceValue: {
    color: colors.black,
    textAlign: 'center',
  },
});
