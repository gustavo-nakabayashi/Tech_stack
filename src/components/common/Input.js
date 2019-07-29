import React from "react";
import styled from "styled-components";
import { Text, TextInput } from "react-native";

const Wrapper = styled.View`
  height: 40px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled.TextInput`
  color: #000;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 18px;
  line-height: 23px;
  flex: 2;
`;

const StyleLabel = styled.Text`
  font-size: 18px;
  padding-left: 20px;
  flex: 1;
  color: #000;
`;

Input = ({ label, value, onChangeText, placeHolder, secureTextEntry }) => {
  return (
    <Wrapper>
      <StyleLabel>{label}</StyleLabel>
      <StyledInput
        placeholder={placeHolder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </Wrapper>
  );
};

export default Input;
