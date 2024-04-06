import { View } from 'react-native';
import React from 'react';
import { getStyle } from './styles';

type DividerProps = {
  verticalSpace: number;
};

export default function Divider({ verticalSpace }: DividerProps) {
  return <View style={getStyle(verticalSpace).container} />;
}
