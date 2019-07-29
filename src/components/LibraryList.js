import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

const View = styled.View`
  /* ... */
`;

LibraryList = ({ libraries }) => {
  const renderItem = library => {
    return <ListItem library={library} />;
  };

  return (
    <FlatList
      data={libraries}
      renderItem={renderItem}
      keyExtractor={library => library.id.toString()}
    />
  );
};

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
