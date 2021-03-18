import React from "react";
import classes from "./BarChart.module.css";
import { BarChart as BChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function BarChart({data}) {
  return (
    <div className={classes.BarChart}>
      <BChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BChart>
    </div>
  );
}

export default BarChart;
