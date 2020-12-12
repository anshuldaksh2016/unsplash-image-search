import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: "Client-ID 7AaoqWWm5FuW3feAMg8uq0SOT6NeLWyxjtXgH22DwEY"
  }
});
