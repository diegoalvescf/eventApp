import { TextProps, TouchableOpacityProps, ViewProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  elements?: {
    containerProps?: ViewProps;
    textProps?: TextProps;
  };
}
