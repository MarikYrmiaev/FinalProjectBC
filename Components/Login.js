import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './Loader';

const LoginScreen = ({navigation}) => {
  const [Email, setUserEmail] = useState('');
  const [Password, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!Email) {
      alert('Please fill Email');
      return;
    }
    if (!Password) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {Email: Email, Password: Password};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://ruppinmobile.tempdomain.co.il/site06/api/Users/Login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(async(responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (!(responseJson.status === 'success')) {
         if(responseJson.ID >0) 
        {
         await AsyncStorage.setItem('UserID',JSON.stringify(responseJson.ID));
         console.log(responseJson);
         navigation.replace('HomePage');
        }
        } 
       //  else {
       //    setErrortext(responseJson.msg);
       //    console.log('Please check your email id or password');
       //  }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image source={require('../assets/Images/Bchef.png')}
                style={{
                  width: 250,
                  height: 350,
                  resizeMode: 'contain',
                  marginTop: -65
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('HomePage')}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('Register')}>

              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
   mainBody: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: 'white',
     alignContent: 'center',
   },
   SectionStyle: {
     flexDirection: 'row',
     height: 40,
     marginTop: 20,
     marginLeft: 35,
     marginRight: 35,
     margin: 10,
   },
   buttonStyle: {
     backgroundColor: '#7DE24E',
     borderWidth: 0,
     color: '#FFFFFF',
     borderColor: '#7DE24E',
     height: 40,
     alignItems: 'center',
     borderRadius: 30,
     marginLeft: 35,
     marginRight: 35,
     marginTop: 20,
     marginBottom: 25,
   },
   buttonTextStyle: {
     color: '#FFFFFF',
     paddingVertical: 10,
     fontSize: 16,
   },
   inputStyle: {
     backgroundColor: 'white',
     flex: 1,
     color: 'black',
     paddingLeft: 15,
     paddingRight: 15,
     borderWidth: 1,
     borderRadius: 30,
     borderColor: 'blue',
   },
   registerTextStyle: {
     color: 'black',
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 14,
     alignSelf: 'center',
     padding: 10,
   },
   errorTextStyle: {
     color: 'red',
     textAlign: 'center',
     fontSize: 14,
   },
 });
export default LoginScreen;