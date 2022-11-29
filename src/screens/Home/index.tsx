import { useNavigation } from '@react-navigation/native';

import { LifeStatus } from '../../components/LifeStatus';
import { Button } from '../../components/Button';

import {
  Container,
  Heading,
  Image,
  TextButton,
  ContainerContent,
} from './styles';

export function Home() {
  const navigator = useNavigation();

  function handleNavigateToExplanation() {
    navigator.navigate('explanation');
  }

  return (
    <Container>
      <Image source={require('../../assets/icons/logo3.png')} />
      <LifeStatus />
      <Heading>
        Vamos transformar sua vida {'\n'} em um jogo, buscando sempre o melhor
        nivel
      </Heading>
      <ContainerContent>
        <Button onPress={handleNavigateToExplanation}>
          <TextButton>Continuar</TextButton>
        </Button>
      </ContainerContent>
    </Container>
  );
}
