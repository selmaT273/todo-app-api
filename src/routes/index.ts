import { Router } from 'express';
import { getTodos, addTodo } from '../controllers/todos';

const router: Router = Router();

router.get("/todos", getTodos);
router.post("/add-todo", addTodo);

export default router