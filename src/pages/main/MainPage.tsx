import { useMemo, useState } from "react";
import { createSeedTasks } from "../../entities/task/model";
import { TaskList } from "../../entities/task/ui";
import { TaskBoard } from "../../widgets/task-board";

export const MainPage = () => {
  const [search, setSearch] = useState("");
  const [showDone, setShowDone] = useState(true);
  const [tasks, setTasks] = useState(() => createSeedTasks(1200));

  const visibleTasks = useMemo(() => {
    const query = search.trim().toLowerCase();
    return tasks.filter((task) => {
      if (!showDone && task.done) {
        return false;
      }
      if (!query) {
        return true;
      }
      return task.title.toLowerCase().includes(query);
    });
  }, [search, showDone, tasks]);

  const doneCount = useMemo(
    () => tasks.reduce((acc, task) => acc + (task.done ? 1 : 0), 0),
    [tasks],
  );

  const handleToggleTask = (taskId: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const handleRenameTask = (taskId: number, title: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, title } : task)),
    );
  };

  return (
    <TaskBoard
      search={search}
      showDone={showDone}
      total={tasks.length}
      done={doneCount}
      onSearchChange={setSearch}
      onShowDoneChange={setShowDone}
    >
      <TaskList
        tasks={visibleTasks}
        onToggleTask={handleToggleTask}
        onRenameTask={handleRenameTask}
      />
    </TaskBoard>
  );
};
