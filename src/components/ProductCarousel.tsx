import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {spacing} from '../constants/dimensions';

const screenWidth = Dimensions.get('window').width;

const ProductCarousel = ({images}) => {
  return (
    <>
      <FlatList
        data={images}
        renderItem={({item}) => {
          return (
            <View style={styles.productImageWrapper}>
              <Image style={styles.productImage} source={{uri: item}} />
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={screenWidth}
        decelerationRate={'fast'}
      />
    </>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  productImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    paddingTop: spacing.sm,
  },
  productImage: {
    height: 350,
    width: 350,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
