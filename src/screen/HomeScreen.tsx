import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Find the suitable WATCH for you now.</Text>
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
});
