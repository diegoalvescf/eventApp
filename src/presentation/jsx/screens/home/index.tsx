import React from 'react';
import { ParticipantComponent } from '../../components/Participant';
import {
  ButtonAddComponent,
  Container,
  EventDateLabel,
  EventTitle,
  FormContainer,
  Input,
} from './styles';

export function Home() {
  function handleParticipantAdd() {
    console.log('💩 -> add');
  }
  return (
    <Container>
      <EventTitle>Nome do evento</EventTitle>
      <EventDateLabel>Sexta, 4 de Novembro de 2022.</EventDateLabel>

      <FormContainer>
        <Input placeholder="Nome do participante" />

        <ButtonAddComponent title="+" onPress={handleParticipantAdd} />
      </FormContainer>

      <ParticipantComponent
        title="Diego de Souza Alves"
        onPress={() => console.log('💩 -> del 1')}
      />
      <ParticipantComponent
        title="Diego de Souza Alves"
        onPress={() => console.log('💩 -> del 2')}
      />
    </Container>
  );
}
