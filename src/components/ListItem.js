import React, { useEffect } from "react";
import { CardSection } from "./common";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../actions";
import { LayoutAnimation, UIManager } from "react-native";

const Touch = styled.TouchableWithoutFeedback``;

const View = styled.View``;

const TitleText = styled.Text`
  font-size: 18px;
  padding-left: 15px;
  color: #000;
  flex: 1;
`;

const ListItem = ({ library, selectLibrary, expanded, selected }) => {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

  const { id, title, description } = library.item;

  useEffect(() => {
    console.log("aqui");
    LayoutAnimation.spring();
  }, []);

  const renderDescription = () => {
    if (expanded) {
      return (
        <CardSection>
          <TitleText>{description}</TitleText>
        </CardSection>
      );
    }
  };

  return (
    <Touch onPress={() => selectLibrary(id)}>
      <View>
        <CardSection>
          <TitleText>{title}</TitleText>
        </CardSection>

        {renderDescription()}
      </View>
    </Touch>
  );
};

const mapStateToPros = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToPros,
  actions
)(ListItem);
