import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {iconSize} from '../constants/dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View>
      <Ionicons name={'arrow-back'} size={iconSize.md} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
