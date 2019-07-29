import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const StyledTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  align-self: stretch;
  background-color: #fff;
  border-radius: 5;
  border-width: 1;
  border-color: #007aff;
`;

const StyledText = styled.Text`
  align-self: center;
  color: #007aff;
  font-size: 16;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
`;

Button = ({ onPress, children }) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <StyledText>{children}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
