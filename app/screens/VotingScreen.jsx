import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { connect } from "react-redux";

import VoteCard from "../components/Vote/VoteCard";

const VotingScreen = ({ votes }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <ActivityIndicator
      style={[
        styles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
      size={"large"}
      color="red"
    />
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        initialNumToRender={5}
        data={votes}
        renderItem={({ item }) => (
          <VoteCard
            title={item.title}
            author={item.author}
            date={item.creationDate}
          />
        )}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setIsFetching(true);
              setTimeout(() => {
                setIsFetching(false);
              }, 3000);
            }}
            title="Pull to refresh"
            tintColor="red"
            titleColor="red"
            colors={"red"}
            refreshing={isFetching}
          />
        }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: "21%",
  },
});
