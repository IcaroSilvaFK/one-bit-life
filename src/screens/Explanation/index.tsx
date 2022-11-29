import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { ExplanationCard } from '../../components/ExplanationCard';
import {
  Container,
  Description,
  Heading,
  TextButton,
  ContainerButton,
  ContainerContent,
} from './styles';

export function Explanation() {
  const navigator = useNavigation();

  function handlePushFromMain() {
    navigator.navigate('main');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ContainerContent>
          <Heading>Antes, deixa {'\n'} eu te explicar...</Heading>
          <Description>Pronto(a) para subir de nível na vida</Description>
          <Description>
            Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de
            forma indivídual
          </Description>
        </ContainerContent>
        <ExplanationCard />
        <ContainerButton>
          <Button onPress={handlePushFromMain}>
            <TextButton>Continuar</TextButton>
          </Button>
        </ContainerButton>
      </Container>
    </SafeAreaView>
  );
}
