const express = require("express");
const todosRouter = express.Router();
const todosController = require("../controllers/todos");
todosRouter.get("/todos", todosController.getTodos);
todosRouter.get("/todos/:id", todosController.getTodo);
todosRouter.post("/todos", todosController.createTodo);
todosRouter.put("/todos/:id", todosController.updateTodo);
todosRouter.delete("/todos/:id", todosController.deleteTodo);
module.exports = todosRouter;