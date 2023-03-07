import { FlatList, Text, TextInput, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { ButtonComponent } from '../../components/button';
import { IParticipant } from './props';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #131016;
  padding: ${RFValue(24)}px;
`;

export const EventTitle = styled(Text)`
  margin-top: ${RFValue(48)}px;
  font-weight: bold;
  color: #ffffff;
  font-size: ${RFValue(24)}px;
`;

export const EventDateLabel = styled(Text)`
  color: #6b6b6b;
  font-size: ${RFValue(16)}px;
`;

export const Input = styled(TextInput).attrs({
  placeholderTextColor: '#6b6b6b',
})`
  flex: 1;
  background: #1f1f25;
  border-radius: 5px;
  color: #ffffff;
  height: ${RFValue(56)}px;
  padding: ${RFValue(16)}px;
  font-size: ${RFValue(16)}px;
  margin-right: ${RFValue(12)}px;
`;

export const FormContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  margin-top: ${RFValue(36)}px;
  margin-bottom: ${RFValue(42)}px;
`;

export const ButtonAddComponent = styled(ButtonComponent)``;

export const ParticipantsList = styled(
  FlatList as new () => FlatList<IParticipant>
).attrs({
  showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;

export const Section = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const Label = styled(Text)`
  color: #ffffff;
  font-size: ${RFValue(14)}px;
`;
