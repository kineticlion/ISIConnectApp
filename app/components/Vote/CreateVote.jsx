import React from "react";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput, Button } from "react-native-paper";
import { connect } from "react-redux";
import { useState } from "react";

const CreateVote = ({ firstName, lastName, createVote, navigation }) => {
  const [voteTitle, setVoteTitle] = useState("");

  const handleVoteCreation = async () => {
    if (!voteTitle) return;
    await createVote(firstName, lastName, voteTitle);
    navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TextInput
        mode="outlined"
        value={voteTitle}
        placeholder="Title"
        style={styles.input}
        onChangeText={(title) => setVoteTitle(title)}
      />
      <View style={{ alignItems: "center" }}>
        <Button
          dark={true}
          style={styles.saveBtn}
          color="red"
          mode="contained"
          onPress={handleVoteCreation}
          disabled={!voteTitle}
        >
          Create
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    firstName: state.entities.user.data.firstName,
    lastName: state.entities.user.data.lastName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createVote: (firstName, lastName, title) =>
    dispatch({
      type: "user/userCreatedVote",
      payload: {
        id: Date.now().toString(),
        title,
        author: `${firstName} ${lastName}`,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateVote);

const styles = StyleSheet.create({
  container: {
    margin: "20%",
    justifyContent: "center",
  },
  input: {
    marginTop: "20%",
  },
  infoText: {
    marginLeft: 10,
  },
  saveBtn: {
    marginTop: 30,
    height: 50,
    width: 100,
    justifyContent: "center",
  },
});
