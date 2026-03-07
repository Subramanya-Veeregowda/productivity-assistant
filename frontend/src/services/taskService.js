import API from "./api";

export const getTasks = () => API.get("/tasks");

export const createTask = (task) => API.post("/tasks", task);