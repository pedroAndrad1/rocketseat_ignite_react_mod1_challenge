import { useTasksContext } from "../TasksContext";
import { NoTasks, TaskListHeader, Ul } from "./styles";
import Clipboard from "../../assets/clipboard.svg";
import TaskItem from "../TaskItem";

const TaskList = () => {
  const { tasks, amoutOfConcludedTasks } = useTasksContext();

  return (
    <section>
      <TaskListHeader>
        <div>
          <p>Tarefas Criadas</p>
          <span>{tasks.length}</span>
        </div>
        {tasks.length > 0 ? (
          <div>
            <p>Concluídas</p>
            <span>
              {amoutOfConcludedTasks} de {tasks.length}
            </span>
          </div>
        ) : (
          <div>
            <p>Concluídas</p>
            <span>0</span>
          </div>
        )}
      </TaskListHeader>
      {tasks.length > 0 ? (
        <Ul>
          {tasks.map((task) => {
            return <TaskItem key={task.id} task={task}></TaskItem>;
          })}
        </Ul>
      ) : (
        <NoTasks>
          <img src={Clipboard} alt="Clipboard" />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </NoTasks>
      )}
    </section>
  );
};

export default TaskList;
