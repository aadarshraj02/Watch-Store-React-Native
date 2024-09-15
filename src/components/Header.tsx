import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {iconSize} from '../constants/dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.iconWrapper}>
          <Ionicons name="arrow-back" size={iconSize.md} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.iconWrapper}>
          <AntDesign name="hearto" size={iconSize.md} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  iconWrapper: {
    marginHorizontal: 10,
  },
});
