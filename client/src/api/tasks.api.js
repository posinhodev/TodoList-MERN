import axios from "axios";

var API_PATH = "http://localhost:3000";

export const createTaskRequest = async (task) => 
  await axios.post(API_PATH + "/tasks", task);

