import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find your suitable Watch now.</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
  },
});
