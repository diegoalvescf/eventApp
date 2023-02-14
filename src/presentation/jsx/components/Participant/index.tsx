import React from 'react';

import { ParticipantProps } from './props';

import { ButtonDeleteComponent, Container, NameText } from './styles';

export function ParticipantComponent({
  title: title,
  elements,
  ...rest
}: ParticipantProps) {
  return (
    <Container {...elements?.containerProps}>
      <NameText {...elements?.titleProps}>{title}</NameText>
      <ButtonDeleteComponent title="-" {...rest} />
    </Container>
  );
}
