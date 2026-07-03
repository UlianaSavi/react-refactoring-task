import { memo } from "react";
import type { Task } from "../model";

type TaskItemProps = {
  task: Task;
  onToggleTask: (taskId: number) => void;
  onRenameTask: (taskId: number, title: string) => void;
};

export const TaskItem = memo(
  ({ task, onToggleTask, onRenameTask }: TaskItemProps) => {
    return (
      <li className="task-item">
        <label className="task-check">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggleTask(task.id)}
          />
          <span>{task.done ? "Done" : "Open"}</span>
        </label>
        <input
          className="task-title"
          value={task.title}
          onChange={(event) => onRenameTask(task.id, event.target.value)}
        />
        <span className={`task-priority task-priority-${task.priority}`}>
          {task.priority}
        </span>
      </li>
    );
  },
);
