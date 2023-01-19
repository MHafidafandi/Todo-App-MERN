const ToDo = require("../models/toDoModel");

module.exports.getTodo = async (req, res) => {
  const todo = await ToDo.find();
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  try {
    const todo = await ToDo.insertMany(req.body);
    res.send({ message: "Add task successfully", todo });
  } catch (error) {
    res.status(501).send({ error_message: "Internal Server Error" });
  }
};

module.exports.updateTodo = async (req, res) => {
  const todo = await ToDo.findOne({ _id: req.params.id });

  if (!todo) {
    res.status(400).send({ error_message: "Id is not listed" });
  }
  try {
    await ToDo.updateOne(todo, {
      $set: req.body,
    });
    res.send({ message: "Update task successfully" });
  } catch (error) {
    res.status(501).send({ error_message: "Internal Server Error" });
  }
};

module.exports.deleteTodo = async (req, res) => {
  const todo = await ToDo.findOne({ _id: req.params.id });
  if (!todo) {
    res.status(400).send({ error_message: "Id is not listed" });
  }
  try {
    await ToDo.deleteOne(todo);
    res.send({ message: "Delete task successfully" });
  } catch (error) {
    res.status(501).send({ error_message: "Internal Server Error" });
  }
};
