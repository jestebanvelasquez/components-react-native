/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatListHeader} from '../components/FlatListHeader';
import {
  ActivityIndicator,
  FlatList,
  Text,
  //   Image,
  //   StyleSheet,
  View,
} from 'react-native';
import {CustomFadeImage} from '../components/CustomFadeImage';

export const InfinityScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);

  const loadMore = () => {
    const arr: number[] = [];
    for (let i = 0; i < 5; i++) {
      arr[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...arr]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <CustomFadeImage
        uri={`https://picsum.photos/id/${item}/400/400`}
        style={{
          width: '95%',
          height: 400,
          backgroundColor: 'gray',
          margin: 10,
          borderRadius: 15,
        }}
      />
    );
    //   <Image
    //     source={{uri: `https://picsum.photos/id/${item}/500/400`}}
    //     style={{
    //       //   width: ,
    //       height: 400,
    //       margin: 20,
    //       borderRadius: 20,
    //     }}
    //   />
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => `${item}` + `${index}`}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <FlatListHeader title="Infinity Scroll" />
          </View>
        )}
        // propiedades para aplicar el infinity:
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5} // desde que punto de la vista debe empezar: 0.5 === mitad
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={25} color={'#f5d716'} />
            <Text style={{fontSize: 15, fontWeight: '300', color: '#f5d716'}}>
              Cargando Imagenes....
            </Text>
          </View>
        )}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   textItem: {
//     backgroundColor: 'green',
//     height: 150,
//   },
// });
