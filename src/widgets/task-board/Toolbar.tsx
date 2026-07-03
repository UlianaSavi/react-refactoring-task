import { Input, Label } from "../../shared";

type ToolbarProps = {
  search: string;
  showDone: boolean;
  onSearchChange: (value: string) => void;
  onShowDoneChange: (value: boolean) => void;
};

export const Toolbar = ({
  search,
  showDone,
  onSearchChange,
  onShowDoneChange,
}: ToolbarProps) => {
  return (
    <section className="toolbar">
      <Input
        type="text"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search tasks..."
      />
      <Label>
        <Input
          type="checkbox"
          checked={showDone}
          onChange={(event) => onShowDoneChange(event.target.checked)}
        />
        Show done tasks
      </Label>
    </section>
  );
};
