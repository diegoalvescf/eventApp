import React from 'react';
import { Alert } from 'react-native';
import { ParticipantComponent } from '../../components/Participant';
import { PARTICIPANTS } from './data';
import { IParticipant } from './props';
import {
  ButtonAddComponent,
  Container,
  EventDateLabel,
  EventTitle,
  FormContainer,
  Input,
  ParticipantsList,
} from './styles';

export function Home() {
  function handleParticipantAdd() {}

  function handleParticipantDel(participant: IParticipant) {
    Alert.alert('Remover', `Remover o participante ${participant.name} ?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }
  return (
    <Container>
      <EventTitle>Nome do evento</EventTitle>
      <EventDateLabel>Sexta, 4 de Novembro de 2022.</EventDateLabel>
      <FormContainer>
        <Input placeholder="Nome do participante" />

        <ButtonAddComponent title="+" onPress={handleParticipantAdd} />
      </FormContainer>

      <ParticipantsList
        data={PARTICIPANTS}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ParticipantComponent
            key={item.id}
            title={item.name}
            onPress={() => handleParticipantDel(item)}
          />
        )}
      />
    </Container>
  );
}
