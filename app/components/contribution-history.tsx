"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const data = [
  { month: "Dec", value: 50 },
  { month: "Jan", value: 70 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 85 },
  { month: "Apr", value: 47 },
  { month: "May", value: 92 },
];

export default function ContributionHistory() {

  const [Loading, setLoading ] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Report Loaded");
      setLoading(false);
    } catch (error) {
      console.error("Error loading report:", error);
      setLoading(false);
    }
  };


  
  return (
    <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-zinc-950 border-zinc-800 p-4 sm:p-5 md:p-6 rounded-2xl">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
        Contribution History
      </h2>

      <p className="text-xs sm:text-sm text-zinc-400 mt-1">
        Last 6 months of activity
      </p>

      <div className="mt-6 w-full h-45 sm:h-50">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="month"
              tick={{ fill: "#a1a1aa", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#71717a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        <div className="rounded-xl bg-zinc-900 p-2 sm:p-3 md:p-4">
          <p className="text-[10px] text-zinc-500 uppercase">Upcoming</p>

          <h3 className="text-lg font-semibold text-white mt-1">
            May 25, 2024
          </h3>

          <p className="text-xs text-zinc-400">$1,000 scheduled</p>
        </div>

        <div className="rounded-xl bg-zinc-900 p-3">
          <p className="text-[10px] text-zinc-500 uppercase">Auto Save Plan</p>

          <h3 className="text-lg font-semibold text-white mt-1">Accelerated</h3>

          <p className="text-xs text-zinc-400">Recurring weekly</p>
        </div>
      </div>
      <Button  className="w-full mt-4 sm:mt-5 bg-zinc-800 hover:bg-zinc-700 text-white cursor-pointer" onClick={handleClick} disabled={Loading} >
        {Loading ? "Loading Report..." : "View Detailed Report"}
      </Button>
   
    </Card>
  );
}
