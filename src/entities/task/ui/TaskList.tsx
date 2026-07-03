import type { Task } from "../model";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (taskId: number) => void;
  onRenameTask: (taskId: number, title: string) => void;
};

export const TaskList = ({
  tasks,
  onToggleTask,
  onRenameTask,
}: TaskListProps) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onRenameTask={onRenameTask}
        />
      ))}
    </ul>
  );
};
