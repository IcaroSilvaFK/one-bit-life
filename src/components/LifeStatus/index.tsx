import { Container, Education, Money, Robot } from './styles';
import Lottie from 'lottie-react-native';
export function LifeStatus() {
  return (
    <Container>
      <Lottie
        source={require('../../assets/education/education-100.json')}
        autoPlay
        loop
        style={{
          width: 100,
          marginTop: 30,
          marginLeft: 5,
          position: 'absolute',
        }}
      />
      <Lottie
        source={require('../../assets/money/money-100.json')}
        autoPlay
        loop
        style={{
          width: 100,
          marginTop: 50,
          marginLeft: 95,
          position: 'absolute',
        }}
      />
      <Lottie
        source={require('../../assets/robot/robot-100-100.json')}
        autoPlay
        loop
        style={{
          width: 190,
          marginTop: 30,
          marginLeft: 25,
        }}
      />
    </Container>
  );
}
