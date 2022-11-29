import { useNavigation } from '@react-navigation/native';

import { LifeStatus } from '../../components/LifeStatus';
import { Container, ButtonText, Header, Heading, Pressable } from './styles';

export function Main() {
  const navigator = useNavigation();

  function handleNavDescription() {
    navigator.navigate('explanation');
  }

  return (
    <Container>
      <Header>
        <Heading>❤️ 20 dias - ✔️ 80 checks</Heading>
        <LifeStatus />
      </Header>
      <Pressable onPress={handleNavDescription}>
        <ButtonText>Ver explicação novamente</ButtonText>
      </Pressable>
    </Container>
  );
}
