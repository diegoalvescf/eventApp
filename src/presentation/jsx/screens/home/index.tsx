import React, { useState } from 'react';
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
  const [participants, setParticipants] =
    useState<IParticipant[]>(PARTICIPANTS);

  function handleParticipantAdd() {
    const isParticipantAlreadyExists = PARTICIPANTS.some(
      (participant) => participant.name === 'Disadaego'
    );

    if (isParticipantAlreadyExists)
      return Alert.alert(
        'Nome já cadastrado',
        'Esse nome já esta inscrito no evento!'
      );

    setParticipants((prevState) => [...prevState, { id: 123, name: 'Ana' }]);

    console.log('💩 ->', PARTICIPANTS);
  }

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
        data={participants}
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
