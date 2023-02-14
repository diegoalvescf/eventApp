import React from 'react';
import { ButtonProps } from './props';
import { ButtonContainer, ButtonText, Container } from './styles';

export function ButtonComponent({
  title: title,
  elements,
  ...rest
}: ButtonProps) {
  return (
    <Container {...elements?.containerProps}>
      <ButtonContainer {...rest}>
        <ButtonText {...elements?.textProps}>{title}</ButtonText>
      </ButtonContainer>
    </Container>
  );
}
