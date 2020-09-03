import * as React from "react";
import { Modal, View, StyleSheet } from "react-native";
import {
  Card,
  Title,
  Button,
  Paragraph,
  Caption,
  Surface,
  IconButton,
  Text,
  Badge,
  ProgressBar,
} from "react-native-paper";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

const VoteCard = ({
  title,
  author,
  date,
  options,
  totalVotes,
  saveSelection,
  userType,
}) => {
  const option1 = options[0];
  const option2 = options[1];
  const option3 = options[2];
  const option4 = options[3];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [progressVisible, setProgressVisible] = useState(
    userType === 1 ? true : false
  );
  const [selected, setSelected] = useState("");
  const renderCard = () => {
    return (
      <Card style={styles.cardContainer}>
        <Card.Content>
          {/* QUESTION CONTAINER */}
          <Card style={{ borderWidth: 1 }}>
            <Card.Content>
              <Title>{title}</Title>
              <Caption>Created By : {author}</Caption>
              <Caption>Date : {date}</Caption>
            </Card.Content>
          </Card>
          {/* OPTIONS CONTAINER */}
          <View style={styles.optionContainer}>
            <TouchableOpacity
              disabled={progressVisible}
              onPress={() => {
                if (progressVisible) return;
                setSelected("option1");
                saveSelection(title, option1.id);
                setProgressVisible(true);
              }}
            >
              <Card style={styles.option}>
                <Card.Content
                  style={{
                    backgroundColor:
                      selected === "option1" ? "#CCFFCC" : "transparent",
                  }}
                >
                  <View style={styles.progressContainer}>
                    <Text>{option1.name}</Text>
                    <Badge size={25} visible={progressVisible}>
                      {totalVotes
                        ? ((option1.count / totalVotes) * 100).toFixed(2)
                        : 0}
                      %
                    </Badge>
                  </View>
                  <ProgressBar
                    progress={(option1.count / totalVotes).toFixed(2)}
                    visible={progressVisible}
                  ></ProgressBar>
                </Card.Content>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={progressVisible}
              onPress={() => {
                if (progressVisible) return;
                setSelected("option2");
                saveSelection(title, option2.id);
                setProgressVisible(true);
              }}
            >
              <Card style={styles.option}>
                <Card.Content
                  style={{
                    backgroundColor:
                      selected === "option2" ? "#CCFFCC" : "transparent",
                  }}
                >
                  <View style={styles.progressContainer}>
                    <Text>{option2.name}</Text>
                    <Badge size={25} visible={progressVisible}>
                      {totalVotes
                        ? ((option2.count / totalVotes) * 100).toFixed(2)
                        : 0}
                      %
                    </Badge>
                  </View>
                  <ProgressBar
                    visible={progressVisible}
                    progress={(option2.count / totalVotes).toFixed(2)}
                  />
                </Card.Content>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={progressVisible}
              onPress={() => {
                if (progressVisible) return;
                setSelected("option3");
                saveSelection(title, option3.id);
                setProgressVisible(true);
              }}
            >
              <Card style={styles.option}>
                <Card.Content
                  style={{
                    backgroundColor:
                      selected === "option3" ? "#CCFFCC" : "transparent",
                  }}
                >
                  <View style={styles.progressContainer}>
                    <Text>{option3.name}</Text>
                    <Badge size={25} visible={progressVisible}>
                      {totalVotes
                        ? ((option3.count / totalVotes) * 100).toFixed(2)
                        : 0}
                      %
                    </Badge>
                  </View>
                  <ProgressBar
                    visible={progressVisible}
                    progress={(option3.count / totalVotes).toFixed(2)}
                  />
                </Card.Content>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={progressVisible}
              onPress={() => {
                if (progressVisible) return;
                setSelected("option4");
                saveSelection(title, option4.id);
                setProgressVisible(true);
              }}
            >
              <Card style={styles.option}>
                <Card.Content
                  style={{
                    backgroundColor:
                      selected === "option4" ? "#CCFFCC" : "transparent",
                  }}
                >
                  <View style={styles.progressContainer}>
                    <Text>{option4.name}</Text>
                    <Badge size={25} visible={progressVisible}>
                      {totalVotes
                        ? ((option4.count / totalVotes) * 100).toFixed(2)
                        : 0}
                      %
                    </Badge>
                  </View>
                  <ProgressBar
                    visible={progressVisible}
                    progress={(option4.count / totalVotes).toFixed(2)}
                  />
                </Card.Content>
              </Card>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Badge size={30} visible={userType === 1}>
              Votes Received : {totalVotes}
            </Badge>
          </View>
        </Card.Content>
        <View style={styles.btnContainer}>
          <IconButton
            icon="close"
            color="red"
            size={50}
            onPress={() => setIsModalVisible(!isModalVisible)}
          />
        </View>
      </Card>
    );
  };

  const renderCards = () => {
    return (
      <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
        <Card style={{ marginTop: "3%" }}>
          <Card.Content>
            <Title>{title}</Title>
            <Caption>Created By : {author}</Caption>
            <Caption>Date : {date}</Caption>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Modal visible={isModalVisible} transparent={false}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {renderCard()}
        </View>
      </Modal>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {renderCards()}
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userType: state.entities.user.data.u_type,
  };
};

export default connect(mapStateToProps)(VoteCard);

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    margin: "5%",
  },
  option: {
    borderWidth: 1,
    margin: "5%",
    marginTop: 0,
    justifyContent: "center",
  },
  optionContainer: {
    marginTop: "10%",
  },
  btnContainer: {
    alignItems: "center",
    margin: "5%",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 5,
  },
});
