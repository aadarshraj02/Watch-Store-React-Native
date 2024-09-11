import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {fontSize, iconSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fonts';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find your suitable Watch now.</Text>
      <View style={styles.mainInputContainer}>
        <View style={styles.inputWrapper}>
          <Image
            source={require('../assets/icons/search.png')}
            style={styles.logo}
          />
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.categoryContainer}>
          <Image
            source={require('../assets/icons/category.png')}
            style={styles.logo}
          />
        </View>
      </View>
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
    fontFamily: fontFamily.Bold,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  mainInputContainer: {},
  inputWrapper: {},
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {},
  categoryContainer: {},
});
