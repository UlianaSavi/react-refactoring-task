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
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggleTask={() => onToggleTask(task.id)}
          onRenameTask={(title) => onRenameTask(task.id, title)}
        />
      ))}
    </ul>
  );
};
