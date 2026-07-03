import { memo } from "react";
import { Input, Label } from "../../../shared";
import type { Task } from "../model";

type TaskItemProps = {
  task: Task;
  onToggleTask: VoidFunction;
  onRenameTask: (title: string) => void;
};

export const TaskItem = memo(
  ({ task, onToggleTask, onRenameTask }: TaskItemProps) => {
    return (
      <li className="task-item">
        <Label className="task-check">
          <Input type="checkbox" checked={task.done} onChange={onToggleTask} />
          <span>{task.done ? "Done" : "Open"}</span>
        </Label>
        <Input
          className="task-title"
          value={task.title}
          onChange={(event) => onRenameTask(event.target.value)}
        />
        <span className={`task-priority task-priority-${task.priority}`}>
          {task.priority}
        </span>
      </li>
    );
  },
);
