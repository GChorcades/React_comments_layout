import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/commentDetail/CommentDetail";
import ApprovalCard from "./components/approvalCard/ApprovalCard";

import "./styles.css";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Warning!</ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Gui"
          timeAgo="today at 4:45PM"
          blogPost="My blog post"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alex"
          timeAgo="today at 2:45PM"
          blogPost="Hola que passa"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane"
          timeAgo="today at 6:45PM"
          blogPost="Lorem ipsum"
        />
      </ApprovalCard>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
