import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {spacing} from '../constants/dimensions';

const imageUrl =
  'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694713456/Croma%20Assets/Communication/Wearable%20Devices/Images/300693_0_pkladv.png';

const ProductCard = (): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: imageUrl}} style={styles.productImage} />
      </View>
      <view style={styles.contentContainer}>
        <Text style={styles.name}>Apple Watch SE2</Text>
        <Text style={styles.brand}>Apple</Text>
        <Text style={styles.price}>Price:</Text>
      </view>
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
    height: 150,
    width: '100%',
    resizeMode: 'center',
  },
  contentContainer: {},
  name: {},
  brand: {},
  price: {},
});
