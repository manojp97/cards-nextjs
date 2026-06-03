"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";


export default function savingTargets() {
  const [Loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Goal Created");
      setLoading(false);
    } catch (error) {
      console.error("Error creating goal:", error);
      setLoading(false);
    }
  };

  return (
    // Main card container
    <Card className="w-full h-full max-w-sm sm:max-w-md md:max-w-lg shadow-md rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Savings Targets</CardTitle>

        <CardDescription className="text-gray-500">
          Active milestones for 2024
        </CardDescription>

        <CardAction>
          <Button
            className="bg-black hover:bg-gray-800 text-white rounded-lg px-4 py-2 font-medium shadow-sm"
            onClick={handleClick}
            disabled={Loading}
          >
            {Loading ? "Creating..." : "New Goal"}
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Retirement */}
        <Card className="border shadow-sm">
          <CardHeader className="pb-3">
            <p className="text-sm text-gray-500">Retirement</p>

            <h1 className="text-2xl font-bold">$425,000</h1>
          </CardHeader>

          <CardContent className="space-y-3">
            <Progress value={65} className="h-2 bg-gray-200 [&>div]:bg-black" />
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">65% Achieved</span>

              <span className="text-gray-500">$273,000</span>
            </div>
          </CardContent>
        </Card>

        {/* Real Estate */}
        <Card className="border shadow-sm">
          <CardHeader className="pb-3">
            <p className="text-sm text-gray-500">Real Estate</p>

            <h1 className="text-2xl font-bold">$85,000</h1>
          </CardHeader>

          <CardContent className="space-y-3">
            <Progress value={32} className="h-2 bg-gray-200 [&>div]:bg-black" />
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">32% Achieved</span>

              <span className="text-gray-500">$27,000</span>
            </div>
          </CardContent>
        </Card>
      </CardContent>

      <CardFooter className="flex items-center justify-center ">
        <div className="text-sm text-black  ">
          You have not met your targets for this year.
        </div>
      </CardFooter>
    </Card>
  );
}
