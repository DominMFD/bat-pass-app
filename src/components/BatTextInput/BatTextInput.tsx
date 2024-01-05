import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
  pass: string
  placeholder?: string
  event?: (e:any) => void
}

export function BatTextInput(props: BatTextInputProps) {
  return (
        <TextInput
        style={styles.inputer}
        placeholder={props.placeholder}
        value={props.pass}
        onChange={props.event}>
        </TextInput>
  );
}