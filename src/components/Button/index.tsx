import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}

export function Button({ children, ...rest }: IButtonProps) {
  return <Container {...rest}>{children}</Container>;
}
