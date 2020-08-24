import * as React from "react";
import { Card, Title, Paragraph, Caption } from "react-native-paper";

const VoteCard = ({ title, author, date }) => (
  <Card style={{ margin: "5%" }}>
    <Card.Content>
      <Title>{title}</Title>
      <Caption>Created By : {author}</Caption>
      <Caption>Date : {date}</Caption>
    </Card.Content>
  </Card>
);

export default VoteCard;
