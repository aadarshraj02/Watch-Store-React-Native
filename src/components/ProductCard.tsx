import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';

const imageUrl =
  'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694713456/Croma%20Assets/Communication/Wearable%20Devices/Images/300693_0_pkladv.png';

const ProductCard = (): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: imageUrl}} style={styles.productImage} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={1}>
          Apple Watch SE2
        </Text>
        <Text style={styles.brand}>Apple</Text>
        <Text style={styles.price}>Price:</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    // height: 150,
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
    color: colors.purple,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
});
