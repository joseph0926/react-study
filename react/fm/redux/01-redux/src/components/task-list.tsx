import { useContext } from "react";
import ApplicationContext from "../context";
import Task from "./task";
import { useSelector } from "react-redux";
import { ApplicationState } from "../store";

const TaskList = () => {
  const { entites } = useSelector((state: ApplicationState) => state.tasks);

  const { tasks } = useContext(ApplicationContext);

  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
