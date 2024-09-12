import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {fontSize, iconSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fonts';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import {smartWatch} from '../data/smartWatch';

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
          <TextInput
            style={styles.textInput}
            placeholder="Search Watches"
            placeholderTextColor={colors.placeholderText}
          />
        </View>
        <View style={styles.categoryContainer}>
          <Image
            source={require('../assets/icons/category.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <Category />
      <FlatList
        data={smartWatch}
        renderItem={({item}) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          paddingBottom: 250,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
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
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md,
  },
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
});
