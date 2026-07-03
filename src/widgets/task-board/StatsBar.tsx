import { formatNumber } from "../../shared";

type StatsBarProps = {
  total: number;
  done: number;
};

export const StatsBar = ({ total, done }: StatsBarProps) => {
  return (
    <section className="stats">
      <p>Total: {formatNumber(total)}</p>
      <p>Done: {formatNumber(done)}</p>
      <p>Open: {formatNumber(total - done)}</p>
    </section>
  );
};
