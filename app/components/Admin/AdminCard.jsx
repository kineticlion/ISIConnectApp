import * as React from "react";
import { Card, Title, Paragraph, Caption } from "react-native-paper";

const AdminCard = ({ title, author, date }) => (
  <Card style={{ margin: 30, marginTop: 20, alignItems: "flex-start" }}>
    <Card.Content>
      <Title>{title}</Title>
      <Caption>Created By : {author}</Caption>
      <Caption>Date : {date}</Caption>
    </Card.Content>
  </Card>
);

export default AdminCard;
