import { Wrapper } from "./Wrapper";
import { Header } from "./Header";
import { Logo } from "./Logo";
import NewTaskForm from "./NewTaskForm";
import { TasksContextProvider } from "./TasksContext";
import TaskList from "./TaskList";
import { Container } from "./Container";

function App() {
  return (
    <Wrapper>
      <Header>
        <Logo></Logo>
      </Header>
      <TasksContextProvider>
        <main>
          <Container>
            <NewTaskForm></NewTaskForm>
            <TaskList></TaskList>
          </Container>
        </main>
      </TasksContextProvider>
    </Wrapper>
  );
}

export default App;
