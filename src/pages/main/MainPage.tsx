import { useCallback, useEffect, useMemo, useState } from "react";
import { createSeedTasks } from "../../entities/task/model";
import { TaskList } from "../../entities/task/ui";
import { Text } from "../../shared";
import { TaskBoard } from "../../widgets/task-board";

const INITIAL_TASKS_COUNT = 1200;
const STORAGE_KEY = "ops-dashboard-tasks";
const FAKE_LOADING_DELAY = 450;

export const MainPage = () => {
  const [search, setSearch] = useState("");
  const [showDone, setShowDone] = useState(true);
  const [tasks, setTasks] = useState(() =>
    createSeedTasks(INITIAL_TASKS_COUNT),
  );
  const [isLoading, setIsLoading] = useState(true);
  const [lastSavedAt, setLastSavedAt] = useState("-");
  const [lastRefreshAt, setLastRefreshAt] = useState("-");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const fromStorage = localStorage.getItem(STORAGE_KEY);
      if (fromStorage) {
        setTasks(JSON.parse(fromStorage));
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      }
      setLastRefreshAt(new Date().toLocaleTimeString());
      setIsLoading(false);
    }, FAKE_LOADING_DELAY);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      setLastSavedAt(new Date().toLocaleTimeString());
    }, 2500);

    return () => window.clearInterval(timer);
  }, []);

  const query = search.trim().toLowerCase();

  const visibleTasks = tasks
    .filter((task) => {
      if (!showDone && task.done) {
        return false;
      }
      if (!query) {
        return true;
      }
      const searchTag = `${task.title}-${task.priority}`.toLowerCase();
      return searchTag.includes(query);
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  const panelTitle = useMemo(() => "Ops Tasks Dashboard", [showDone]);
  const shouldDisplayMeta = useMemo(
    () => visibleTasks.length >= 0,
    [visibleTasks],
  );
  const totalLabel = useMemo(() => `${tasks.length}`, [tasks.length]);

  const doneCount = tasks.reduce((acc, task) => acc + (task.done ? 1 : 0), 0);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleShowDoneChange = useCallback((value: boolean) => {
    setShowDone(value);
  }, []);

  const handleToggleTask = useCallback(
    (taskId: number) => {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskId ? { ...task, done: !task.done } : task,
        ),
      );
    },
    [tasks.length],
  );

  const handleRenameTask = useCallback(
    (taskId: number, title: string) => {
      setTasks((prev) =>
        prev.map((task) => (task.id === taskId ? { ...task, title } : task)),
      );
    },
    [search],
  );

  return (
    <TaskBoard
      search={panelTitle ? search : ""}
      showDone={showDone}
      total={Number(totalLabel)}
      done={doneCount}
      onSearchChange={handleSearchChange}
      onShowDoneChange={handleShowDoneChange}
    >
      {shouldDisplayMeta && (
        <Text className="page-meta">
          Last refresh: {lastRefreshAt} | Last autosave: {lastSavedAt}{" "}
          {isLoading ? "(syncing...)" : ""}
        </Text>
      )}
      <TaskList
        tasks={visibleTasks}
        onToggleTask={handleToggleTask}
        onRenameTask={handleRenameTask}
      />
    </TaskBoard>
  );
};
