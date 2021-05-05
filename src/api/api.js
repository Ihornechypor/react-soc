import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "86d65395-9e70-4bad-b4d5-5566cf826ed1",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userID) {
    return instance.post(`follow/${userID}`).then((response) => response.data);
  },
  unFollow(userID) {
    return instance
      .delete(`follow/${userID}/`)
      .then((response) => response.data);
  },
};
