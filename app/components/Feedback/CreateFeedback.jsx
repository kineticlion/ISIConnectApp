import { useState } from "react";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput, Button, RadioButton } from "react-native-paper";
import { connect } from "react-redux";
import Api from "../../api/Api";
import { asyncAlert } from "../../utils/device";

const CreateFeedback = ({
  firstName,
  lastName,
  createFeedback,
  navigation,
}) => {
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const handleVoteCreation = async () => {
    if (!feedbackTitle) return;
    const author = firstName + " " + lastName;
    createFeedback(Date.now() + "", feedbackTitle, author, [
      { id: "1", name: option1 },
      { id: "2", name: option2 },
      { id: "3", name: option3 },
      { id: "4", name: option4 },
    ]);
    asyncAlert("Feedback", "Feedback Submitted Successfully.");
    navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TextInput
        mode="outlined"
        value={feedbackTitle}
        placeholder="Title"
        style={styles.input}
        onChangeText={(title) => setFeedbackTitle(title)}
      />
      <View style={styles.optionContainer}>
        <TextInput
          mode="outlined"
          value={option1}
          placeholder="Option 1"
          style={styles.optionInput}
          onChangeText={(option) => setOption1(option)}
        />
        <TextInput
          mode="outlined"
          value={option2}
          placeholder="Option 2"
          style={styles.optionInput}
          onChangeText={(option) => setOption2(option)}
        />
        <TextInput
          mode="outlined"
          value={option3}
          placeholder="Option 3"
          style={styles.optionInput}
          onChangeText={(option) => setOption3(option)}
        />
        <TextInput
          mode="outlined"
          value={option4}
          placeholder="Option 4"
          style={styles.optionInput}
          onChangeText={(option) => setOption4(option)}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Button
          dark={true}
          style={styles.saveBtn}
          color="red"
          mode="contained"
          onPress={handleVoteCreation}
          disabled={
            !feedbackTitle || !option1 || !option2 || !option3 || !option4
          }
        >
          Create
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    firstName: state.entities.user.data.f_name,
    lastName: state.entities.user.data.l_name,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createFeedback: (id, title, author, options) =>
    dispatch({
      type: "feedback/feedbackCreated",
      payload: {
        id,
        title,
        author,
        options,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateFeedback);

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
  optionInput: {
    marginTop: 10,
  },
  optionContainer: {
    margin: "10%",
  },
});
