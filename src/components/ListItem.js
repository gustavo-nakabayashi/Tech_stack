import React from "react";
import { CardSection } from "./common";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../actions";

const Touch = styled.TouchableWithoutFeedback``;

const View = styled.View``;

const TitleText = styled.Text`
  font-size: 18px;
  padding-left: 15px;
  color: #000;
`;

const ListItem = ({ library, selectLibrary, selectedLibraryId }) => {
  const { id, title, description } = library.item;

  const renderDescription = () => {
    console.log(id);
    if (id === selectedLibraryId) {
      return <TitleText>{description}</TitleText>;
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

const mapStateToPros = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(
  mapStateToPros,
  actions
)(ListItem);
