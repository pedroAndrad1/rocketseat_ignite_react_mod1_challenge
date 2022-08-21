import { ChangeEvent, useState } from "react";
import { Task, useTasksContext } from "../TasksContext";
import {
  Checkbox,
  Delete,
  DeleteButton,
  Label,
  TaskContainer,
  TaskContent,
} from "./styles";

interface TaskProps {
  task: Task;
}

const TaskItem = ({ task }: TaskProps) => {
  const [checked, setChecked] = useState(task.concluded);
  const { deleteTask, updateTaskStatus } = useTasksContext();
  const updateTaskStatusItem = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    updateTaskStatus(task.id);
  };

  return (
    <TaskContainer className="animeLeft">
      <Checkbox>
        <input
          type="checkbox"
          id={`toogle_${task.id}`}
          checked={checked}
          onChange={(e) => updateTaskStatusItem(e)}
        />
        <Label htmlFor={`toogle_${task.id}`} checked={checked}></Label>
      </Checkbox>
      <TaskContent checked={checked}>{task.name}</TaskContent>
      <Delete>
        <DeleteButton onClick={() => deleteTask(task.id)}></DeleteButton>
      </Delete>
    </TaskContainer>
  );
};
export default TaskItem;
