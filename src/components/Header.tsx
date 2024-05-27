import { TodoTitle } from "../types";
import { CreateTodo } from "./CreateTodo";
import TSlogo from "../assets/ts_logo.jpeg";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <>
      <header className="header" />
      <h1>
        TODO
        <img style={{ width: "60px", height: "auto" }} src={TSlogo} />
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </>
  );
};
