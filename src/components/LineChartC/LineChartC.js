import React from "react";
import classes from "./LineChartC.module.css";
import { LineChart, Legend, Tooltip, XAxis, YAxis, Line, CartesianGrid } from "recharts";

function LineChartC({ data }) {
  return (
    <div className={classes.LineChart}>
      <LineChart
        width={700}
        height={500}
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
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default LineChartC;
