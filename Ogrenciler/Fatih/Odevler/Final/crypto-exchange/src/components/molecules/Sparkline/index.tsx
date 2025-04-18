import { Sparklines, SparklinesLine } from "react-sparklines";

const Sparkline = ({ data }: { data: number[] }) => {
  const color = data[data.length - 1] >= data[0] ? "#10B981" : "#EF4444";

  return (
    <div style={{ width: 100, height: 40 }}>
      <Sparklines data={data}>
        <SparklinesLine
          color={color}
          style={{ strokeWidth: 2, fill: "none" }}
        />
      </Sparklines>
    </div>
  );
};

export default Sparkline;
