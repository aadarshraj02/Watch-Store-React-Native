import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const ProductDetailsScreen = () => {
  const item = useRoute().params.item;
  return (
    <View>
      <Text>ProductDetailsScreen</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
