import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import NumericInput from 'react-native-numeric-input'

import { styles } from './BatButtonStyles'
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {

  const[pass,setPass] = useState<string>('')
  const[passLenght, setPassLenght]  = useState<number>(0);

  const handleGeneateButton = () => {
    let generateToken = generatePass(passLenght)
    setPass(generateToken)
  }

  const handleCopyButton = () =>{
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
        <BatTextInput pass={pass} placeholder='password'/>
        <NumericInput 
        onChange={value => setPassLenght(value)}
        rightButtonBackgroundColor="#E5BF3C"
        leftButtonBackgroundColor="#E5BF3C" 
        totalWidth={150} 
        totalHeight={50}
        borderColor="#E5BF3C"
        containerStyle={{
            backgroundColor: 'black',
            }}
        textColor='#E5BF3C'
         />

        <Pressable
        style={styles.button}
        onPress={handleGeneateButton}>
            <Text
            style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable
        style={styles.button}
        onPress={handleCopyButton}>
            <Text
            style={styles.text}>⚡ COPY</Text>
        </Pressable>
        
    </>
  );
}
