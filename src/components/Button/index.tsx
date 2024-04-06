import { TouchableOpacity, Text } from 'react-native';
import React, { PropsWithChildren } from 'react';
import styles from './styles';
import colors from '../../styles/colors';

type ButtonProps = PropsWithChildren & {
  textColor?: string;
  backgroundColor?: string;
  onPress?: () => void;
};

export default function Button({
  children,
  textColor = colors.white,
  backgroundColor = colors.green,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}
