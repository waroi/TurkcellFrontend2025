import React from "react";
import styles from "./MiniChart.module.scss";
import { Sparklines, SparklinesLine } from "react-sparklines";

const MiniChart = ({ data }: { data: number[] }) => {
  if (!data || data.length === 0) {
    return <div>Veri bulunamadı</div>;
  }

  const lastValue = data[data.length - 1];
  const chartColor = lastValue >= 0 ? "green" : "red"; 
  return (
    <div className={styles.chart}>
      <Sparklines data={data} width={100} height={30} margin={5}>
        <SparklinesLine color={chartColor} />
      </Sparklines>
    </div>
  );
};

export default MiniChart;