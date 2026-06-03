"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function BuyInvestment() {
  const [Loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const handleClick = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Order Reviewed");
      setLoading(false);
    } catch (error) {
      console.error("Error reviewing order:", error);
      setLoading(false);
    }
  };

  return (
   <Card className="w-full h-full max-w-sm  sm:max-w-md md:max-w-lg shadow-md rounded-xl">
  <CardHeader>
    <CardTitle className="text-xl font-semibold">
      Buy Investment
    </CardTitle>

    <CardDescription>
      Purchase additional shares in your portfolio.
    </CardDescription>
  </CardHeader>

  <CardContent className="space-y-5">
    <div className="grid gap-2">
      <Label htmlFor="amount" className="font-medium">
        Amount to Invest
      </Label>

      <Input
        id="amount"
        placeholder="$10,000.00"
        className="h-11"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} 
      />
    </div>

    <div className="space-y-2">
      <Label className="font-medium">
        Order Type
      </Label>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Market Order" />
        </SelectTrigger>

        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectItem value="market">
              Market Order
            </SelectItem>

            <SelectItem value="limit">
              Limit Order
            </SelectItem>

            <SelectItem value="stop">
              Stop Order
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <p className="text-xs text-gray-500">
        Market orders execute at the current price.
      </p>
    </div>

    <div className="rounded-lg bg-gray-50 p-4 space-y-3 border">
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">
          Estimated Shares
        </span>

        <span className="font-semibold">
          1.95
        </span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-500">
          Buying Power
        </span>

        <span className="font-semibold">
          $12,450.00
        </span>
      </div>
    </div>
  </CardContent>

  <CardFooter className="flex-col gap-3">
    <Button className="w-full rounded-lg bg-black text-white hover:bg-gray-800" onClick={handleClick} disabled={Loading || amount.trim() === ""} >
      {Loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}  
      Review Order
    </Button>

    <p className="text-center text-xs text-gray-500">
      Trades are typically executed within minutes during market hours.
    </p>
  </CardFooter>
</Card>
  );
}
