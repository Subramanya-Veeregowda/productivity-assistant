import axios from "axios";

const API = "http://localhost:8080/api/tasks";

export const getTasks = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

export const createTask = async (task) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(API, task, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

export const deleteTask = async (id) => {
  const token = localStorage.getItem("token");

  await axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};