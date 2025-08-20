"use client";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useEffect, useState } from "react";

interface MaturityChartProps {
  toggledCount: number;
  totalTechniques: number;
}

export default function MaturityChart({ toggledCount, totalTechniques }: MaturityChartProps) {
  // Calculate maturity as a percentage
  const maturity = totalTechniques === 0 ? 0 : Math.round((toggledCount / totalTechniques) * 100);
  // Data for the line chart: from 0 to totalTechniques
  const data = Array.from({ length: totalTechniques + 1 }, (_, i) => ({
    techniques: i,
    maturity: totalTechniques === 0 ? 0 : Math.round((i / totalTechniques) * 100),
  }));

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Maturity Level</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="techniques" label={{ value: "Techniques Mitigated", position: "insideBottom", offset: -5 }} allowDecimals={false} domain={[0, totalTechniques]} />
          <YAxis domain={[0, 100]} label={{ value: "Maturity Level", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line
            type="linear"
            dataKey="maturity"
            stroke="transparent"
            strokeWidth={3}
            dot={(props) => {
              // Only show green dot for toggled techniques
              if (props.payload.techniques <= toggledCount && props.payload.techniques !== 0) {
                return <circle key={props.payload.techniques} cx={props.cx} cy={props.cy} r={4} fill="#22c55e" />;
              }
              // Hide dot for untoggled techniques and for zero by rendering a transparent circle
              return <circle key={props.payload.techniques} cx={props.cx} cy={props.cy} r={4} fill="transparent" />;
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center text-lg font-semibold text-green-700">
        Current Maturity: {maturity}%
      </div>
    </div>
  );
}
