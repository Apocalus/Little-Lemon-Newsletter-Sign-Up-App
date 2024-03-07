import * as React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import Button from '../components/button';

const WelcomeScreen = ({navigation}) => {
  //welcome screen code
  
  return (
    <View style={styles.view}>
      <Image
        source={require('../assets/little-lemon-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Button onPress={()=> {navigation.navigate('Subscribe')}} text="Newsletter" disabled={false}/>
      {/* <Pressable
        onPress={() => {
          navigation.navigate('Subscribe');
        }}
        style={styles.button} width= {width - 50}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable> */}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 50,
    textAlign: 'center',
  },
  // button: {
  //   backgroundColor: '#333333',
  //   // width: 300,
  //   alignItems: 'center',
  //   padding: 10,
  //   borderRadius: 10
  // },
  // buttonText: {
  //   color: 'white',
  //   fontWeight: 'bold',
  // },
});
