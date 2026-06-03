"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UpcomingPayments() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 second skeleton

    return () => clearTimeout(timer);
  }, []);
  //   const loading = false; // Set to true to show skeleton loaders
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Card className="w-full max-w-lg mx-auto rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold">
          Upcoming Payments
        </CardTitle>

        <CardDescription className="text-sm text-gray-500">
          Select a date to view scheduled payments.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full rounded-xl border p-2"
          captionLayout="dropdown"
          modifiersClassNames={{
            today: "border-2 border-black font-bold",
            selected: "bg-black text-white",
          }}
        />

        {/* Payment Card 1 */}
        {loading ? (
          <Card className="rounded-xl border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-5 w-40 bg-gray-400" />
                <Skeleton className="h-4 w-24 bg-gray-400" />
              </div>

              <Skeleton className="h-9 w-20 rounded-lg bg-gray-400" />
            </CardHeader>
          </Card>
        ) : (
          <Card className="rounded-xl border shadow-sm hover:shadow-md transition">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base sm:text-lg font-semibold">
                  Netflix Subscription
                </CardTitle>

                <CardDescription className="text-sm text-gray-500">
                  Apr 15, 2024
                </CardDescription>
              </div>

              <Button className="bg-black hover:bg-gray-800 text-white rounded-lg">
                $19.99
              </Button>
            </CardHeader>
          </Card>
        )}
        {/* Payment Card 2 */}
        <Card className="rounded-xl border shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base sm:text-lg font-semibold">
                Rent Payment
              </CardTitle>

              <CardDescription className="text-sm text-gray-500">
                Apr 1, 2024
              </CardDescription>
            </div>

            <Button className="bg-black hover:bg-gray-800 text-white rounded-lg">
              $2400.00
            </Button>
          </CardHeader>
        </Card>

        {/* Payment Card 3 */}
        <Card className="rounded-xl border shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base sm:text-lg font-semibold">
                Auto Insurance
              </CardTitle>

              <CardDescription className="text-sm text-gray-500">
                Apr 22, 2024
              </CardDescription>
            </div>

            <Button className="bg-black hover:bg-gray-800 text-white rounded-lg">
              $186.00
            </Button>
          </CardHeader>
        </Card>
      </CardContent>
    </Card>
  );
}
