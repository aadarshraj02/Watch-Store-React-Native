import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {iconSize} from '../constants/dimensions';

const ProductDetailsScreen = (): JSX.Element => {
  const item = useRoute().params.item;
  return (
    <View>
      <Ionicons name={'arrow-back'} size={iconSize.md} color="black" />
      <Text>ProductDetailsScreen</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
