/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  Platform,
  Text,
} from 'react-native';
import {FlatListHeader} from '../components/FlatListHeader';
import {styles} from '../theme/appTheme';
import {ScrollView} from 'react-native';
import useForm from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Form {
  name: string;
  email: string;
  phone: string;
  isSuscribed: boolean;
}

export const TextInputsScreen = () => {
  const {onChange, isSuscribed, name, email, phone, form} = useForm<Form>({
    name: '',
    email: '',
    phone: '',
    isSuscribed: true,
  });
  const {theme} = useContext(ThemeContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <FlatListHeader title="Text Inputs" />
          <TextInput
            style={{
              ...stylesText.inputStyle,
              borderBottomWidth: 2,
              borderColor: theme.dividerColor,
              opacity: 0.4,
              color: theme.secondary,
            }}
            placeholder="User name"
            placeholderTextColor={'white'}
            autoCorrect={false}
            autoCapitalize="words"
            keyboardAppearance="dark"
            value={name}
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={{
              ...stylesText.inputStyle,
              borderBottomWidth: 2,
              borderColor: theme.dividerColor,
              opacity: 0.4,
              color: theme.secondary,
            }}
            placeholder="User Email"
            placeholderTextColor={'white'}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            keyboardAppearance="dark"
            value={email}
            onChangeText={value => onChange(value, 'email')}
          />
          <View style={stylesText.SwitchRow}>
            <Text style={stylesText.switchText}>is Suscribed</Text>
            <CustomSwitch
              isOn={isSuscribed}
              onChange={value => onChange(value, 'isSuscribed')}
            />
          </View>

          <FlatListHeader title={JSON.stringify(form, null, 5)} />
          <FlatListHeader title={JSON.stringify(form, null, 5)} />

          <TextInput
            style={{
              ...stylesText.inputStyle,
              borderBottomWidth: 2,
              borderColor: theme.dividerColor,
              opacity: 0.4,
              color: theme.secondary,
            }}
            placeholder="User Phone"
            placeholderTextColor={'white'}
            autoCorrect={false}
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            value={phone}
            onChangeText={value => onChange(value, 'phone')}
          />
          {/* <FlatListHeader title={JSON.stringify(form, null, 5)} /> */}
        </View>

        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesText = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    // borderColor: '#fbf3f34a',    // 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'white',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
    color: 'white',
  },
  SwitchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
