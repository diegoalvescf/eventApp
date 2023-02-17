import React, { useState } from 'react';
import { Alert } from 'react-native';
import { ParticipantComponent } from '../../components/Participant';
import { formatDate } from '../../helpers/format-date';
import { RandomIdGenerator } from '../../helpers/random-id-generator';
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
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] =
    useState<IParticipant[]>(PARTICIPANTS);

  function handleParticipantAdd() {
    const isParticipantAlreadyExists = PARTICIPANTS.some(
      (participant) => participant.name === participantName
    );

    if (isParticipantAlreadyExists)
      return Alert.alert(
        'Nome já cadastrado',
        'Esse nome já esta inscrito no evento!'
      );

    const id = RandomIdGenerator();

    setParticipants((prevState) => [
      ...prevState,
      { id: id, name: participantName },
    ]);

    setParticipantName('');
  }

  function handleParticipantDel(participant: IParticipant) {
    Alert.alert('Remover', `Remover o participante ${participant.name} ?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants((prevState) =>
            prevState.filter((item) => item.id !== participant.id)
          ),
            Alert.alert('removido!');
        },
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
      <EventDateLabel>{formatDate()}</EventDateLabel>
      <FormContainer>
        <Input
          placeholder="Nome do participante"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <ButtonAddComponent title="+" onPress={handleParticipantAdd} />
      </FormContainer>

      <ParticipantsList
        data={participants}
        keyExtractor={(item) => item.id}
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
