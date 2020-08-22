import React from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import VoteCard from "../components/Vote/VoteCard";

const VOTES = [
  {
    id: "1",
    title: "The best instructor of August 2020?",
    author: "Sufiyan Saboowala",
  },
  {
    id: "2",
    title: "Features to be implemented in August 2020?",
    author: "Sufiyan Saboowala",
  },
  {
    id: "3",
    title: "Best projects in 2020?",
    author: "Sufiyan Saboowala",
  },
  {
    id: "4",
    title: "The best instructor of August 2020?",
    author: "Sufiyan Saboowala",
  },
  {
    id: "5",
    title: "Features to be implemented in August 2020?",
    author: "Sufiyan Saboowala",
  },
  {
    id: "6",
    title: "Best projects in 2020?",
    author: "Sufiyan Saboowala",
  },
];

const VotingScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={VOTES}
        renderItem={({ item }) => (
          <VoteCard title={item.title} author={item.author} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default VotingScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: "20%",
  },
});
