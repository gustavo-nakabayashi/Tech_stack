import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const CardView = styled.View`
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  margin: 10px 5px 0px 5px;
  
`;

const Card = props => {
  return <CardView>{props.children}</CardView>;
};

export {Card};
