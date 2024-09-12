import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import {colors} from '../constants/colors';
import {category} from '../data/data';

const Category = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Smart Watch');

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <FlatList
      data={category}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            handleSelectCategory(item.name);
          }}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item.name && {
                color: colors.purple,
              },
            ]}>
            {item.name}
          </Text>
          {selectedCategory === item.name && (
            <View style={styles.underline}></View>
          )}
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal
      ItemSeparatorComponent={() => (
        <View style={{paddingHorizontal: spacing.sm}} />
      )}
    />
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
    width: '60%',
    marginTop: spacing.sm,
  },
});
