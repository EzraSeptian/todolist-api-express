"use strict";
module.exports = function (app) {
  var todoList = require("../controllers/toDoListController");
  app.route("/tasks").get(todoList.listAllTasks).post(todoList.createTask);
  app.route("/tasks/:taskId").get(todoList.readTask).put(todoList.updateTask).delete(todoList.deleteTask);
};
