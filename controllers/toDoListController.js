"use strict";
var mongoose = require("mongoose"),
  Task = mongoose.model("Tasks");
exports.listAllTasks = function (req, res) {
  Task.find({})
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.createTask = function (req, res) {
  var new_task = new Task(req.body);
  new_task
    .save()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.readTask = function (req, res) {
  Task.findOne({ _id: req.params.taskId })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.updateTask = function (req, res) {
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.deleteTask = function (req, res) {
  Task.deleteOne({ _id: req.params.taskId })
    .then(() => {
      res.json({ message: "Task successfully deleted" });
    })
    .catch((err) => {
      res.send(err);
    });
};
