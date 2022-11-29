import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: rgba(21, 21, 21, 0.98);
`;

export const Heading = styled.Text`
  color: #ffff;
  font-size: 20px;
  text-align: center;
  margin: 0 60px;
`;

export const Image = styled.Image`
  width: 300px;
  height: 60px;

  margin: 60px auto 20px;
`;

export const ContainerContent = styled.View`
  padding: 32px;
  margin-top: 42px;
  flex: 1;
`;

export const TextButton = styled.Text`
  color: #ffff;
  font-weight: bold;
  font-size: 18px;
`;
