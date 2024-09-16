import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import ProductCarousel from '../components/ProductCarousel';
import {fontSize, iconSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontFamily} from '../constants/fonts';

const colorsData = [
  {
    colorName: 'Silver',
    colorValue: '#F0F2F2',
  },
  {
    colorName: 'Bright Orange',
    colorValue: '#F25745',
  },
  {
    colorName: 'Starlight',
    colorValue: '#FAF6F2',
  },
];

const ProductDetailsScreen = (): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTab, setSelectedTab] = useState('Details');

  const item = useRoute().params.item;
  return (
    <View style={styles.container}>
      <Header />
      <ProductCarousel images={item.images} />
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.productTitle}>{item.name}</Text>
          <Text style={styles.productBrand}>{item.brand}</Text>
        </View>
        <View style={styles.ratingWrapper}>
          <AntDesign name={'star'} color={colors.yellow} size={iconSize.sm} />
          <Text style={styles.productRating}>4.5</Text>
        </View>
      </View>
      <View style={styles.colorsContainer}>
        <Text style={styles.colorsHeading}>Colors</Text>
        <FlatList
          data={colorsData}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.selectColorContainer,
                item.colorValue === selectedColor && {
                  borderColor: colors.purple,
                },
              ]}
              onPress={() => {
                setSelectedColor(item.colorValue);
              }}>
              <View
                style={[styles.circleColor, {backgroundColor: item.colorValue}]}
              />
              <Text style={styles.colorText}>{item.colorName}</Text>
            </TouchableOpacity>
          )}
          horizontal
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: spacing.sm,
              }}></View>
          )}
        />
      </View>
      <View style={styles.detailsReviewTabs}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab('Details');
          }}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Details' && {
                color: colors.purple,
              },
            ]}>
            Details
          </Text>
          {selectedTab === 'Details' && <View style={styles.underline} />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab('Review');
          }}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Review' && {
                color: colors.purple,
              },
            ]}>
            Review
          </Text>
          {selectedTab === 'Review' && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>
      <Text style={styles.detailsContainer}>
        {selectedTab === 'Details' ? item.details : item.review}
      </Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.background,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  titleWrapper: {
    flex: 1,
  },
  productTitle: {
    fontFamily: fontFamily.Bold,
    fontWeight: 800,
    color: colors.black,
    fontSize: fontSize.lg,
  },
  productBrand: {
    fontFamily: fontFamily.Medium,
    color: colors.gray,
    fontSize: fontSize.sm,
    paddingVertical: spacing.sm,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.lavender,
    borderRadius: spacing.sm,
    padding: spacing.sm,
    height: 50,
    marginTop: spacing.md,
  },
  productRating: {
    color: colors.gray,
    fontSize: fontSize.md,
  },
  colorsContainer: {
    paddingTop: spacing.md,
  },
  colorsHeading: {
    fontSize: fontSize.md,
    color: colors.black,
    paddingBottom: spacing.md,
  },
  selectColorContainer: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    backgroundColor: colors.purple,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    fontSize: fontSize.sm,
    fontWeight: 'medium',
    color: colors.black,
  },
  detailsReviewTabs: {
    flexDirection: 'row',
    paddingTop: spacing.lg,
    gap: spacing.lg,
  },
  tabText: {
    fontSize: fontSize.md,
    fontWeight: 'medium',
    color: colors.gray,
  },
  underline: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: '50%',
    marginTop: spacing.xs,
  },
  detailsContainer: {
    color: colors.gray,
    fontSize: fontSize.md,
    paddingVertical: spacing.xs,
  },
});
