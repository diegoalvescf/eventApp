import styled from 'styled-components/native';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonComponent } from '../button';

export const Container = styled.View`
  width: 100%;
  background: #1f1e25;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(10)}px;
`;

export const NameText = styled(Text)`
  flex: 1;
  font-size: ${RFValue(16)}px;
  color: #ffffff;
  margin-left: ${RFValue(16)}px;
`;

export const ButtonDeleteComponent = styled(ButtonComponent).attrs({
  elements: {
    containerProps: {
      style: {
        backgroundColor: '#e23c44',
      },
    },
  },
})``;
