import styled, { css } from 'styled-components/native';

type HeadingDescriptionType = {
  type: 'mind' | 'finance' | 'fun' | 'body';
};

export const Container = styled.View`
  background: #151515;
  width: 350px;
  max-height: 350px;
  border-radius: 25px;
  padding: 20px;
  flex: 1;
`;

export const Heading = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

export const ContainerExplanation = styled.View`
  margin-top: 30px;
  flex: 1;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Description = styled.Text<HeadingDescriptionType>`
  font-weight: bold;
  ${({ type }) =>
    type === 'finance' &&
    css`
      color: #85bb65;
    `}
  ${({ type }) =>
    type === 'mind' &&
    css`
      color: #90b7f3;
    `}
    ${({ type }) =>
    type === 'body' &&
    css`
      color: #ff0044;
    `}
    ${({ type }) =>
    type === 'fun' &&
    css`
      color: #fe7f23;
    `}
    margin-right: 6px;
  flex: 1;
`;

export const DescriptionContent = styled.Text`
  color: #fff;
  flex: 1;
  margin-left: 6px;
`;
