import { Text, Pressable, StyleSheet } from "react-native";
import React, { FC } from "react";

interface Props {
  text: string;
  onPress: () => void;
  containerStyles?: Object;
}
const Button: FC<Props> = ({ text, onPress, containerStyles }) => {
  return (
    <Pressable style={[styles.root, containerStyles]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

export default Button;


const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#a15e1b',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontStyle: "italic",
  }
})