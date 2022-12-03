import { useState } from "react";
import { Todo } from "../../types/Todo";
import { Todos } from "../Todos";
import "./App.css";
import { v4 as uuid } from "uuid";

export function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuid(), text: "Get some eggs" },
    { id: uuid(), text: "Mow lawn" },
    { id: uuid(), text: "Buy gift" },
  ]);

  const todoCreate = (text: string) => {
    setTodos((todos) => [...todos, { id: uuid(), text }]);
  };

  const todoDelete = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-6">
      <Todos todos={todos} todoCreate={todoCreate} todoDelete={todoDelete} />
    </div>
  );
}
