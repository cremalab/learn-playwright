import { useState } from "react";
import { Todo } from "../../types/Todo";
import { Todo as TodoLi } from "../Todo";

type Props = {
  todos: Todo[];
  todoCreate: (text: string) => void;
  todoDelete: (id: Todo["id"]) => void;
};

export function Todos({ todos, todoCreate, todoDelete }: Props) {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg">Todos</h1>
      <ul className="border rounded divide-y shadow">
        {todos.map((todo) => (
          <TodoLi key={todo.id} todo={todo} onClickDelete={todoDelete} />
        ))}
      </ul>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          todoCreate(text);
          setText("");
        }}
      >
        <input
          className="grow border rounded shadow-inner px-3 py-2"
          type="text"
          placeholder="New Todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="border rounded shadow px-8 py-2 bg-indigo-500 text-white"
          disabled={!text}
        >
          Add
        </button>
      </form>
    </div>
  );
}
