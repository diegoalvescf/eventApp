import { TextProps, ViewProps } from 'react-native';
import { ButtonProps } from '../button/props';

export interface ParticipantProps extends ButtonProps {
  title: string;
  elements?: {
    containerProps?: ViewProps;
    titleProps?: TextProps;
  };
}
