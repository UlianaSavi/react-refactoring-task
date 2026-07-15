import { useState } from "react";
import { createSeedTasks, type Task } from "../../entities/task/model";
import { TaskList } from "../../entities/task/ui";
import { Heading, Input } from "../../shared";

const INITIAL_TASKS_COUNT = 300;

export const MainPage = () => {
  const [tasks, setTasks] = useState<Task[]>(() =>
    createSeedTasks(INITIAL_TASKS_COUNT),
  );
  const [search, setSearch] = useState("");

  const visibleTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(search.trim().toLowerCase()),
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <section>
      <Heading variant="h1">Tasks ({visibleTasks.length})</Heading>

      <Input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search tasks"
      />

      <TaskList
        tasks={visibleTasks}
        onToggleTask={(taskId) =>
          setTasks((prev) =>
            prev.map((task) =>
              task.id === taskId ? { ...task, done: !task.done } : task,
            ),
          )
        }
        onRenameTask={(taskId, title) =>
          setTasks((prev) =>
            prev.map((task) =>
              task.id === taskId ? { ...task, title } : task,
            ),
          )
        }
      />
    </section>
  );
};
