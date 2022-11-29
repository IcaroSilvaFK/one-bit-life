import {
  Container,
  Heading,
  ContainerExplanation,
  Image,
  Flex,
  Description,
  DescriptionContent,
} from './styles';

export function ExplanationCard() {
  return (
    <Container>
      <Heading>
        Através deste APP você vai consolidar {'\n'} 4 hábitos de áreas
        fundamentais:
      </Heading>
      <ContainerExplanation>
        <Flex>
          <Image source={require('../../assets/icons/educationIcon.png')} />
          <Description type='mind'>
            Mente :
            <DescriptionContent>
              {'  '}Hábitos para melhorar sua inteligência/sabedoria
            </DescriptionContent>
          </Description>
        </Flex>
        <Flex>
          <Image source={require('../../assets/icons/moneyIcon.png')} />
          <Description type='finance'>
            Financeiro :
            <DescriptionContent>
              {'  '}Hábitos para te ajudar com controle financeiro
            </DescriptionContent>
          </Description>
        </Flex>
        <Flex>
          <Image source={require('../../assets/icons/bodyIcon.png')} />
          <Description type='body'>
            Corpo :
            <DescriptionContent>
              {'  '}Hábitos para te deixar mais {'\n'} saudável e forte.
            </DescriptionContent>
          </Description>
        </Flex>
        <Flex>
          <Image source={require('../../assets/icons/funIcon.png')} />
          <Description type='fun'>
            Humor:
            <DescriptionContent>
              {'  '}Hábitos para controlar o stress {'\n'} e aumentar felicidade
            </DescriptionContent>
          </Description>
        </Flex>
      </ContainerExplanation>
    </Container>
  );
}
