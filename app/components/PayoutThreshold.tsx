"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";

<Slider defaultValue={[30]} max={100} step={1} />;

export default function PayoutThreshold() {
  const [Loading, setLoading] = useState(false);
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState(75);
  
  // Simulate an async operation for saving the threshold
  const handleClick = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Threshold saved");
      setLoading(false);
    } catch (error) {
      console.error("Error saving threshold:", error);
      setLoading(false);
    }
  };

  return (
    // Card container with styling
  <Card className="w-full h-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl border border-sky-300 bg-sky-200 p-4 ms:p-5 md:p-6 shadow-md">
  <div className="space-y-5">
    {/* Header */}
    <div>
      <h2 className="text-xl font-semibold text-black">
        Payout Threshold
      </h2>

      <p className="mt-1 text-sm text-sky-700">
        Set the minimum balance required before a payout is triggered.
      </p>
    </div>

    {/* Currency */}
    <div className="space-y-2">
      <h3 className="font-medium text-black">
        Preferred Currency
      </h3>

      <Select>
        <SelectTrigger className="w-full border-sky-300 bg-sky-100">
          <SelectValue placeholder="USD - United States Dollar" />
        </SelectTrigger>

        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectItem value="usd">USD - United States Dollar</SelectItem>
            <SelectItem value="eur">EUR - Euro</SelectItem>
            <SelectItem value="gbp">GBP - British Pound</SelectItem>
            <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    {/* Amount */}
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-black">
          Minimum Payout Amount
        </h4>

        <span className="text-xl font-bold text-sky-600">
          ${amount * 50}.00
        </span>
      </div>

      <Slider
        value={[amount]}
        onValueChange={(value) => setAmount(value[0])}
        defaultValue={[75]}
        max={100}
        step={1}
        className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md relative flex h-1 sm:h-2 items-center rounded-full bg-sky-700"
      />

      <div className="flex justify-between text-xs text-sky-700">
        <span>$0</span>
        <span>$5000</span>
      </div>
    </div>

    {/* Notes */}
    <div className="space-y-2">
      <h4 className="font-medium text-black">
        Notes
      </h4>

      <Textarea

        placeholder="Add notes here..."
        className="min-h-[120px] resize-none border-sky-300 bg-sky-100"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}

      />
    </div>

    {/* Button */}
    <Button className="w-full bg-sky-600 text-white hover:bg-sky-700 cursor-pointer" onClick={handleClick} disabled={Loading || notes.trim() === ""} >
      {Loading ?(<Loader2 className="mr-2 h-4 w-4 animate-spin" />) :( "Save Threshold")}
    </Button>
  </div>
</Card>
  );
}
