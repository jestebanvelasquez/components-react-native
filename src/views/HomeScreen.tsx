/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {FlatListHeader} from '../components/FlatListHeader';
import {FlatListSeparatorItem} from '../components/FlatListSeparatorItem';
import {menuItems} from '../data/menuItems';

const HomeScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <FlatListHeader title="Opciones de Menu" />
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={FlatListHeader}
        ItemSeparatorComponent={FlatListSeparatorItem}
      />
    </View>
  );
};

export default HomeScreen;
