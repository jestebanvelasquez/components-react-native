import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import {FlatListHeader} from '../components/FlatListHeader';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo Alerta',
      ' Alerta Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true, // para que se puedar dar click por fuera y cerrar solo en android
        onDismiss: () => console.log('dismiss'),
      },
    );
  };
  //solo ios
  const showPrompt = () => {
    Alert.prompt(
      '¿Estas Ahí?',
      'esta accion no se puede revertir',
      (valor: string) => console.log('info :', valor),
      'plain-text', // tipo de texto:
      'Hola mundo', // testo en campo por default
      'number-pad', //teclado numerico
    );
  };

  return (
    <View style={styles.container}>
      <FlatListHeader title="Alerts" color="#c5c5c5" />
      <Button title="Mostrar alerta" onPress={showAlert} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
