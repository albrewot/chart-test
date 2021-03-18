import React from "react";
import classes from "./AreaChart.module.css";
import { AreaChart as AChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function AreaChart({data}) {
  return (
    <div className={classes.AreaChart}>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <AChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#3884d8" fill="#3884d8" />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        <Legend />
      </AChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}

export default AreaChart;
