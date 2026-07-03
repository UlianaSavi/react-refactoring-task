import { formatNumber, Text } from "../../shared";

type StatsBarProps = {
  total: number;
  done: number;
};

export const StatsBar = ({ total, done }: StatsBarProps) => {
  return (
    <section className="stats">
      <Text>Total: {formatNumber(total)}</Text>
      <Text>Done: {formatNumber(done)}</Text>
      <Text>Open: {formatNumber(total - done)}</Text>
    </section>
  );
};
