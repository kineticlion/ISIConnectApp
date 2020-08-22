import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

const VoteCard = ({ title, author }) => (
  <Card style={{ margin: 30, marginTop: 30, alignItems: "flex-start" }}>
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>- {author}</Paragraph>
    </Card.Content>
  </Card>
);

export default VoteCard;
