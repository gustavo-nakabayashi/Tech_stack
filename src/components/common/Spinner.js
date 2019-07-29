import React from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

Spinner = ({ size }) => {
  return (
    <StyledView>
      <ActivityIndicator size={size || "large"} />
    </StyledView>
  );
};

export default Spinner;
