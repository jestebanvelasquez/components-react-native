/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListHeader} from '../components/FlatListHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/theme/ThemeContext';

const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState('');

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos la carga');
      setRefreshing(false);
      setData('hola mundo');
    }, 1000);
  };
  const {theme} = useContext(ThemeContext);

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor="#ffffff" //solo android
          colors={['#17abdf', '#f78ae0', '#ffe112']} //solo android
          //   style={{backgroundColor: '#ffffff'}} //ios
          tintColor={theme.colors.primary}
          title={'refreshing'}
          titleColor={theme.colors.primary}
        />
      }>
      <View style={styles.globalMargin}>
        <FlatListHeader title="Pull To Refresh" />
        {data && <FlatListHeader title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
