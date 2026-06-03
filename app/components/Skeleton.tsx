"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";
export default function SkeletonDemo() {
  return (
   <Card className="p-4 space-y-4 w-full h-full max-w-sm  sm:max-w-md md:max-w-lg rounded-xl shadow ">
  <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-2"></div>
  <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-2"></div>

  <div className="w-full aspect-video bg-gray-200 rounded-xl animate-pulse"></div>

  <div className="space-y-2">
    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
  </div>

  <div className="flex gap-3 w-full justify-between">
    <div className="h-8 w-40 bg-gray-200 rounded-md animate-pulse"></div>
    <div className="h-8 w-40 bg-gray-200 rounded-md animate-pulse"></div>
  </div>
</Card>
  );
}
