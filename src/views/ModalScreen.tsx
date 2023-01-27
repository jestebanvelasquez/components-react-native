/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Modal, View, Text} from 'react-native';
import {FlatListHeader} from '../components/FlatListHeader';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <FlatListHeader title="Modal Screen" />

      <Button title="Abrir Modal" onPress={() => setVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            // width: 250,
            // height: 300,
            backgroundColor: '#6d6d6dba',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* contenido del modal */}
          <View
            style={{
              backgroundColor: '#17abdf',
              padding: 10,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 3,
                height: 15,
              },
              shadowColor: '#000000',
              shadowOpacity: 0.25,
              elevation: 20,
            }}>
            <FlatListHeader
              title="contenido Modal"
              color="#323232"
              marginTop={0}
            />
            <Text
              style={{
                color: '#323232',
                fontSize: 20,
                fontWeight: '300',
                marginBottom: 20,
              }}>
              cuerpo del modal
            </Text>
            <View style={{backgroundColor: '#ffde08', borderRadius: 10}}>
              <Button
                color={'#323232'}
                title="Cerrar Modal"
                onPress={() => setVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
