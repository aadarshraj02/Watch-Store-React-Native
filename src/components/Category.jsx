import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontSize} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import {colors} from '../constants/colors';

const Category = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.categoryText}>Smart Watch</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.gray,
  },
});
