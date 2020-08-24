import React from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { connect } from "react-redux";

import VoteCard from "../components/Vote/VoteCard";

const VotingScreen = ({ votes }) => {
  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={votes}
        renderItem={({ item }) => (
          <VoteCard
            title={item.title}
            author={item.author}
            date={item.creationDate}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    votes: state.entities.vote,
  };
};

const mapDispatchToProps = (dispatch) => ({
  //   updateUser: (firstName, lastName, phone, zipcode) =>
  //     dispatch({
  //       type: "user/userUpdated",
  //       payload: { firstName, lastName, phone, zipcode },
  //     }),
  //   saveuri: (uri) => dispatch({ type: "user/uriReceived", payload: { uri } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(VotingScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: "21%",
  },
});
