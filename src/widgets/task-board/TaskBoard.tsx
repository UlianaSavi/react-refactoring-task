import type { PropsWithChildren } from "react";
import { StatsBar } from "./StatsBar";
import { Toolbar } from "./Toolbar";

type TaskBoardProps = PropsWithChildren<{
  search: string;
  showDone: boolean;
  total: number;
  done: number;
  onSearchChange: (value: string) => void;
  onShowDoneChange: (value: boolean) => void;
}>;

export const TaskBoard = ({
  children,
  search,
  showDone,
  total,
  done,
  onSearchChange,
  onShowDoneChange,
}: TaskBoardProps) => {
  return (
    <main className="layout">
      <h1>Ops Tasks Dashboard</h1>
      <StatsBar total={total} done={done} />
      <Toolbar
        search={search}
        showDone={showDone}
        onSearchChange={onSearchChange}
        onShowDoneChange={onShowDoneChange}
      />
      {children}
    </main>
  );
};
