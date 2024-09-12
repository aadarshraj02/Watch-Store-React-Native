import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {fontSize, iconSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fonts';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import {smartWatch} from '../data/smartWatch';
import {headphones} from '../data/headphones';

const HomeScreen = (): JSX.Element => {
  const [data, setData] = useState(smartWatch);
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Smart Watch');

  const handleUpdatedCategory = (newCategory: any) => {
    if (newCategory === 'Smart Watch') {
      setData(smartWatch);
    } else if (newCategory === 'Headphones') {
      setData(headphones);
    }
    setSelectedCategory(newCategory);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
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
            <Category
              selectedCategory={selectedCategory}
              handleUpdatedCategory={handleUpdatedCategory}
            />
          </>
        }
        data={data}
        renderItem={({item}) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          padding: spacing.md,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
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
