import { useState } from "react";
import { Todo } from "../../types/Todo";
import { Todos } from "../Todos";

export function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: crypto.randomUUID(), text: "Get some eggs" },
    { id: crypto.randomUUID(), text: "Mow lawn" },
    { id: crypto.randomUUID(), text: "Buy gift" },
  ]);

  const todoCreate = (text: string) => {
    setTodos((todos) => [...todos, { id: crypto.randomUUID(), text }]);
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
