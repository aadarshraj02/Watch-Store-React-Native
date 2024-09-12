import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import {colors} from '../constants/colors';

const Category = (): JSX.Element => {
  return (
    <TouchableOpacity>
      <Text style={styles.categoryText}>Smart Watch</Text>
      <View style={styles.underline}></View>
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
  underline: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: '70%',
    marginTop: spacing.sm,
  },
});
