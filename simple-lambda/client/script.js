const axios = require("axios");

const url = "http://localhost:3000/";
const jobName = "send-notifications";

setInterval(async () => {
  const response = await axios.get(url + jobName);
  console.log(response.data);
}, 12000);
