import { Todo as TodoType } from "../../types/Todo";

type Props = {
  todo: TodoType;
  onClickDelete: (id: TodoType["id"]) => void;
};

export function Todo({ todo, onClickDelete }: Props) {
  return (
    <li className="flex px-3 py-2">
      <div className="grow">{todo.text}</div>
      <button onClick={() => onClickDelete(todo.id)}>ⓧ</button>
    </li>
  );
}
