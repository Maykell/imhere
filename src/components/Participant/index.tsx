import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../Button';
import colors from '../../styles/colors';

type ParticipantProps = {
  name: string;
  onRemove: () => void;
};

export default function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Button backgroundColor={colors.red} onPress={onRemove}>
        -
      </Button>
    </View>
  );
}
