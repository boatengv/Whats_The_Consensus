const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/v1/user/getUser", (req, res) => {
  res.send({
    profileImage: "P",
    fullName: "Victor Boateng",
    username: "@vikkboateng",
    bio: "Product enthusiast, coffee lover, building cool things with great people",
  });
});

app.get("/v1/profile/getProfile", (req, res) => {
  res.send({
    profileImage: "P",
    fullName: "Victor Boateng",
    username: "",
    bio: "Product enthusiast, coffee lover, building cool things with great people",
    comments: 42,
    votes: 18,
    likes: 127,
    recentActivity: [
      "Comment on What feature should we build next ?",
      "Liked a comment from topic 2",
      "Replied to a comment about on topic 3",
    ],
  });
});

app.get("/v1/activity/getActivity", (req, res) => {
  res.send({
    activityType: "comments" || "votes" || "likes",
    activity:
      "Commented on 'Topic' " ||
      "Replied to 'username' on 'topic'" ||
      "liked 'topic 1' | 'comment' | 'reply on a comment'",
    timestamp: 1772844780,
  });
});

app.get("/v1/topic/getTopic", (req, res) => {
  res.send({
    title: "Welcome new members! Introduce yourself",
    question:
      "Tell us a bit about yourself - where you're from, what you have and what brings you here",
    timestamp: 1772844895,
    createdBy: "Admin",
    isPoll: false,
    poll: [],
    comments: [],
  });
});

app.get("/v1/comment/getComment", (req, res) => {
  res.send({
    commentor: "Victor Boateng",
    comment:
      "I'd love to see better notification controls! sometimes I miss important updates.",
    timestamp: 1772844895,
    replies: [],
    likes: 2,
  });
});

app.get("/v1/reply/getReply", (req, res) => {
  res.send({
    commentor: "Victor Boateng",
    comment:
      "I'd love to see better notification controls! sometimes I miss important updates.",
    timestamp: 1772844895,
    like: 2,
  });
});

app.get("/v1/notification/getNotification", (req, res) => {
  res.send({
    notificationType: reply || like || topic,
    notificationMessage: "reply || like || topic",
    timestamp: 1772845644,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
