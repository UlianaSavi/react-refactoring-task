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
      <input
        type="text"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search tasks..."
      />
      <label>
        <input
          type="checkbox"
          checked={showDone}
          onChange={(event) => onShowDoneChange(event.target.checked)}
        />
        Show done tasks
      </label>
    </section>
  );
};
