import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "student",
  initialState: [],
  reducers: {
    studentCreated: (student, action) => {
      student.push(action.payload);
    },
    studentRemoved: (student, action) => {
      const filteredStudents = student.filter(
        (student) => student.id !== action.payload.id
      );
      student.splice(0, student.length, ...filteredStudents);
    },
    studentsReceived: (student, action) => {
      student.splice(0, student.length, ...action.payload.data);
    },
  },
});

export default slice.reducer;
export const { studentCreated, studentRemoved } = slice.actions;
