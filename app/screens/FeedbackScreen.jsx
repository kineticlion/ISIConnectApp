import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from "react-native";
import { connect } from "react-redux";
import { Rating, AirbnbRating } from "react-native-ratings";
import { Card, Title, Badge } from "react-native-paper";
import { asyncAlert } from "../utils/device";

const FeedbackScreen = ({ feedback, submitFeedback, userType }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const ratingCompleted = async (id, rating, title) => {
    const response = await asyncAlert(
      "Feedback",
      `Give '${title}' a rating of ${rating}?`,
      {
        text: "Cancel",
        onPress: () => {
          return;
        },
      }
    );
    if (!response) return;
    submitFeedback(id, rating);
  };

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
        data={feedback}
        renderItem={({ item }) => (
          <Card style={{ margin: "3%", marginHorizontal: "5%" }}>
            <Card.Content style={{ alignItems: "center" }}>
              <Title>{item.title}</Title>
              <AirbnbRating
                isDisabled={userType === 1 || userType === 2 ? true : false}
                showRating={userType === 1 || userType === 2 ? false : true}
                count={item.options.length}
                reviews={item.options.map((item) => item.name)}
                defaultRating={
                  userType === 1 || userType === 2
                    ? Math.floor((item.totalRating / item.totalSubmissions) * 1)
                    : item.rating
                }
                size={30}
                onFinishRating={(rating) =>
                  ratingCompleted(item.id, rating, item.title)
                }
              />
              <View style={{ margin: 5 }}>
                <Badge
                  size={30}
                  visible={userType === 1 || userType === 2 ? true : false}
                >
                  Submissions :{" "}
                  {!item.totalSubmissions ? 0 : item.totalSubmissions}
                </Badge>
              </View>
            </Card.Content>
          </Card>
        )}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setIsFetching(true);
              setTimeout(() => {
                setIsFetching(false);
              }, 1000);
            }}
            title="Pull to refresh"
            tintColor="red"
            titleColor="red"
            colors={["red"]}
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
    feedback: state.entities.feedback,
    userType: state.entities.user.data.u_type,
  };
};

const mapDispatchToProps = (dispatch) => ({
  submitFeedback: (id, rating) =>
    dispatch({
      type: "feedback/feedbackSubmitted",
      payload: {
        id: id + "",
        rating,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: "24%",
    margin: "5%",
  },
});
