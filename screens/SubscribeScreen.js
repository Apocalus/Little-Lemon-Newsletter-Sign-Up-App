import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import {validateEmail} from '../utils';
import {useWindowDimensions} from 'react-native';
import Button from '../components/button';

const SubscribeScreen = () => {
  //subscribe screen code

  const [email, setEmail] = useState('');
  const verifyEmail = validateEmail(email);
  const {width, height, fontScale} = useWindowDimensions();

  return (
    <View style={styles.view}>
      <Image
        source={require('../assets/little-lemon-logo-grey.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>

      <TextInput
        placeholder="Type your email"
        style={styles.textbox}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        width={width-50}
      />

      <Button
        onPress={() => {
          console.log(verifyEmail);
          Alert.alert('Thanks for subscribing, stay tuned!');
          setEmail('');
        }}
        text="Subscribe"
        disabled={!verifyEmail}
      />
      {/* <Pressable
        disabled={!verifyEmail}
        onPress={() => {
          console.log(verifyEmail);
          Alert.alert('Thanks for subscribing, stay tuned!');
          setEmail("")
        }}
        style={[styles.buttonActive, !verifyEmail && styles.button]}
        width = {width - 50}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable> */}
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 35,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textbox: {
    margin: 20,
    // marginVertical: 8,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    // width: 300,
    height: 40,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#999090',
    // width: 300,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  buttonActive: {
    backgroundColor: '#333333',
    // width: 300,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
