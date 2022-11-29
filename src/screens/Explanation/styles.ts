import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(21, 21, 21, 0.98);
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.Text`
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin: 40px 40px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const ContainerContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  margin-top: 20px;
  padding: 0 60px;
  width: 100%;
  flex: 1;
  max-height: 50px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
