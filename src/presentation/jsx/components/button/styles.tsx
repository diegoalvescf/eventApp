import { TouchableOpacity, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';

export const Container = styled(View)`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  border-radius: 5px;
  background: #31cf67;
`;

export const ButtonContainer = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  color: #ffffff;
  font-size: ${RFValue(24)}px;
`;
