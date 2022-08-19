import { FormEvent, useLayoutEffect, useRef, useState } from "react";
import { InputTask, NewTaskContainer, SubmitNewTask } from "./styles";
import PlusIcon from "../../assets/plus.svg";
import { useTasksContext } from "../TasksContext";

const NewTaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTasksContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {});

  const newTask = (e: FormEvent) => {
    e.preventDefault();
    addTask(task);
    setTask("");
    if (inputRef != null) {
      inputRef.current?.focus();
    }
  };

  return (
    <NewTaskContainer onSubmit={(e) => newTask(e)}>
      <InputTask
        value={task}
        onChange={(e) => setTask(e.target.value)}
        ref={inputRef}
      />
      <SubmitNewTask type="submit" disabled={task.length == 0 ? true : false}>
        Criar
        <img src={PlusIcon}></img>
      </SubmitNewTask>
    </NewTaskContainer>
  );
};

export default NewTaskForm;
