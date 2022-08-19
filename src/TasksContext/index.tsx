import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  name: string;
  concluded: boolean;
}

interface TasksContextData {
  tasks: Task[];
  addTask: (newTask: string) => void;
  deleteTask: (taskId: string) => void;
  updateTaskStatus: (taskId: string) => void;
  amoutOfConcludedTasks: number;
}

interface TasksContextProps {
  children: ReactNode;
}

const TasksContext = createContext({} as TasksContextData);

export const TasksContextProvider = ({ children }: TasksContextProps) => {
  const [tasks, setTasks] = useState([] as Task[]);
  const [amoutOfConcludedTasks, setAmoutOfConcludedTasks] = useState(0);

  const addTask = (newTask: string) => {
    setTasks([{ id: uuidv4(), name: newTask, concluded: false }, ...tasks]);
    setAmoutOfConcludedTasks(getAmoutOfConcludedTasks());
  };

  const deleteTask = (taskId: string) => {
    const newTasksSet = tasks.filter((task) => task.id != taskId);
    setTasks(newTasksSet);
    setAmoutOfConcludedTasks(
      newTasksSet.filter((task) => task.concluded == true).length
    );
  };

  const updateTaskStatus = (taskId: string) => {
    const newTasksSet = tasks.map((task) => {
      if (task.id == taskId) {
        task.concluded = !task.concluded;
      }
      return task;
    });
    setTasks(sortTasks(newTasksSet));
    setAmoutOfConcludedTasks(getAmoutOfConcludedTasks());
  };

  const getAmoutOfConcludedTasks = () => {
    return tasks.filter((task) => task.concluded == true).length;
  };

  const sortTasks = (newTasksSet: Task[]) => {
    return newTasksSet.sort((a, b) => {
      if (a.concluded == b.concluded) {
        return 0;
      } else if (a.concluded) {
        return 1;
      } else {
        return -1;
      }
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTaskStatus,
        amoutOfConcludedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TasksContext);
};
