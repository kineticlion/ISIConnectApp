import React, { useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Modal, Portal, Provider, Text, Button } from "react-native-paper";

import StudentCard from "../components/Student/StudentCard";
import Api from "../api/Api";
import config from "../../config";
const StudentScreen = ({
  students,
  removeAdmin,
  fetchStudents,
  saveStudents,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [studentDeleted, setStudentDeleted] = useState(false);

  const fetchStudentsFromServer = async () => {
    const studentsData = await Api.fetchUsersByType(3);
    saveStudents(studentsData);
  };

  useEffect(() => {
    fetchStudents();
    fetchStudentsFromServer();
    setIsLoading(false);
    if (studentDeleted) setStudentDeleted(false);
  }, [studentDeleted]);

  const getUri = (uri) => {
    if (uri === "undefined" || uri === "null") {
      return config.images.profile.uri;
    }
    return uri;
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
        numColumns={2}
        data={students}
        renderItem={({ item }) => (
          <StudentCard
            studentDeleted={setStudentDeleted}
            id={item.id}
            uri={getUri(item.uri)}
            firstName={item.f_name}
            lastName={item.l_name}
            displayCard={setModalVisible}
            isCardVisible={modalVisible}
            removeAdmin={removeAdmin}
            userType={item.u_type}
            phone={item.phone}
            email={item.email}
            zip={item.zip}
          />
        )}
        keyExtractor={(item) => item.id}
        initialNumToRender={8}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setIsFetching(true);
              setTimeout(async () => {
                fetchStudents();
                await fetchStudentsFromServer();
                setIsFetching(false);
              }, 500);
            }}
            title="Pull to refresh"
            tintColor="red"
            titleColor="#FF0000"
            colors={["#FF0000"]}
            refreshing={isFetching}
          />
        }
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.entities.student,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () =>
    dispatch({
      type: "student/studentsRequested",
    }),
  saveStudents: (data) => {
    dispatch({
      type: "student/studentsReceived",
      payload: {
        data,
      },
    });
  },
  removeAdmin: (id) =>
    dispatch({
      type: "student/studentRemoved",
      payload: {
        id,
      },
    }),
});

const styles = StyleSheet.create({
  container: {
    marginTop: "21%",
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentScreen);
