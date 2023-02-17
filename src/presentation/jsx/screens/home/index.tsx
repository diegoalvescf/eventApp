import React from 'react';
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
  function handleParticipantAdd() {
    console.log('💩 -> add');
  }

  function handleParticipantDel(participant: IParticipant) {
    console.log('💩 -> participant', participant);
  }
  return (
    <Container>
      <EventTitle>Nome do evento</EventTitle>
      <EventDateLabel>Sexta, 4 de Novembro de 2022.</EventDateLabel>
      <FormContainer>
        <Input placeholder="Nome do participante" />

        <ButtonAddComponent title="+" onPress={handleParticipantAdd} />
      </FormContainer>

      <ParticipantsList>
        {PARTICIPANTS.map((item) => (
          <ParticipantComponent
            key={item.id}
            title={item.name}
            onPress={() => handleParticipantDel(item)}
          />
        ))}
      </ParticipantsList>
    </Container>
  );
}
