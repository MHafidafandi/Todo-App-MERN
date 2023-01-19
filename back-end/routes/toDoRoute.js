const { Router } = require("express");
const router = Router();
const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/toDoController");

router.get("/", getTodo);
router.post("/todo", saveTodo);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

module.exports = router;
