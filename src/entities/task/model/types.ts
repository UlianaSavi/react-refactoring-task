export type Task = {
  id: number;
  title: string;
  done: boolean;
  priority: "low" | "medium" | "high";
};
