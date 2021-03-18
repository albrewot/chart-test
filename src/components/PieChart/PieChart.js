import React from "react";
import classes from "./PieChart.module.css";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PChart({ data }) {
  return (
    <div className={classes.PieChart}>
      <PieChart width={400} height={400}>
        <Legend />
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default PChart;
