import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {iconSize} from '../constants/dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons name={'arrow-back'} size={iconSize.md} color="black" />
        <AntDesign name={'hearto'} size={iconSize.md} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
