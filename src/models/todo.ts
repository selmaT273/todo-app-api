import { ITodo } from './../types/todo';
import { model, Schema } from 'mongoose';
import mongoose from 'mongoose';

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;