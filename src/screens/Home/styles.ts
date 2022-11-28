import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: #000;
`;

export const Heading = styled.Text`
  color: #fff;
  font-size: 32px;
`;
