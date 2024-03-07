import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useWindowDimensions } from 'react-native'; 

const Button = ({onPress, text, disabled}) => {
    const {width, height, fontScale} = useWindowDimensions();
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled]}
      disabled={disabled}
      width={width-50}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: 'white',
  }
});

export default Button;
