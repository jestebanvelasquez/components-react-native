/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useContext} from 'react';
import {SectionList, View, Text} from 'react-native';
import {FlatListHeader} from '../components/FlatListHeader';
import {styles} from '../theme/appTheme';
import {FlatListSeparatorItem} from '../components/FlatListSeparatorItem';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];
export const SectionListScreen = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      {/*  */}
      <SectionList
        ListHeaderComponent={() => (
          <View style={{marginBottom: 100}}>
            <FlatListHeader
              title={'Section List'}
              marginBottom={0}
              marginTop={0}
            />
          </View>
        )} //si se necesita encabezado
        ListFooterComponent={() => (
          <View style={{marginBottom: 100}}>
            <FlatListHeader
              title={'Footer List'}
              marginBottom={0}
              marginTop={0}
            />
          </View>
        )} //si se necesita Footer
        sections={casas}
        stickySectionHeadersEnabled={true} //para que la section se quede quieta en android
        keyExtractor={(item, i) => item + i}
        renderItem={({item}) => (
          <Text style={{color: theme.colors.text}}>{item}</Text>
        )}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: theme.colors.background}}>
            <FlatListHeader title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <View
            style={{
              backgroundColor: theme.colors.background,
              marginBottom: 50,
            }}>
            <FlatListHeader
              title={`Total : ${section.data.length}`}
              marginBottom={10}
              marginTop={5}
            />
          </View>
        )}
        SectionSeparatorComponent={() => <FlatListSeparatorItem />} //separador de secciones
        // ItemSeparatorComponent={() => <FlatListSeparatorItem />} //separador dentro  de secciones
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
