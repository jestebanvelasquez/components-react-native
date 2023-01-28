/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomButtonFade} from '../components/CustomButtonFade';
import {ThemeContext} from '../context/theme/ThemeContext';
import {Theme} from '@react-navigation/native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const renderItem = (item: Slide, theme: Theme) => {
  // const {theme} = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        padding: 40,
        justifyContent: 'center',
      }}>
      <Image
        source={item.img}
        style={{
          width: 300,
          height: 400,
          resizeMode: 'center',
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.desc}</Text>
    </View>
  );
};

export const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {theme} = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: '#fdd614',
        paddingTop: 50,
      }}>
      {/* <FlatListHeader title="Slides" /> */}
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={items}
        renderItem={({item}) => renderItem(item, theme)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex} //indice de la imagen
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 10,
            backgroundColor: theme.colors.primary,
          }}
        />
        {activeIndex === items.length - 1 && <CustomButtonFade />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2c2a2e',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'justify',
  },
});
