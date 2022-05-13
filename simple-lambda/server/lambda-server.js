const express = require("express");
const sendNotifications = require("./src/services/send-notifications");
const app = express();
const jobs = [sendNotifications];

app.get("/:name", async (req, res) => {
  const jobName = req.params.name;
  const job = jobs.find((job) => job.name === jobName);
  if (job) {
    await job.action();
  }
  res.send("JOB EXECUTED");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
