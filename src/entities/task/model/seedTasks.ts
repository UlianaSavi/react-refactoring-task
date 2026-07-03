import type { Task } from "./types";

const priorities: Task["priority"][] = ["low", "medium", "high"];

export const createSeedTasks = (size: number): Task[] => {
  return Array.from({ length: size }, (_, index) => ({
    id: index + 1,
    title: `Task #${index + 1}`,
    done: index % 5 === 0,
    priority: priorities[index % priorities.length],
  }));
};
