import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const StyledText = styled.Text`
  color: black;
  font-size: 20px;
`;
const StyledView = styled.View`
  background-color: lightgrey;
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;

const Header = ({ headerText }) => {
  return (
    <StyledView>
      <StyledText>{headerText}!</StyledText>
    </StyledView>
  );
};

export default Header ;
