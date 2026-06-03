"use client";

import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Simple spinner component using lucide-react's LoaderIcon
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export default function payoutPreferences() {
  const [Loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");

  // Simulate an async operation for updating credentials
  const handleClose = async () => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Card Closed");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Payout Settings Saved");

      console.log({
        email,
        account,
      });
    } catch (error) {
      console.error("Error updating credentials:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    //Payout Preferences
    <Card className="w-full h-full max-w-sm  sm:max-w-md md:max-w-lg rounded-xl shadow-md ">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500">Payout Preferences</p>

            <h1 className="text-xl font-semibold mt-1">Receiving Method</h1>
          </div>

          <CardAction>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              disabled={Loading}
              className="rounded-full text-white bg-black hover:bg-gray-700"
            >
              {Loading ? <Spinner /> : "✕"}
            </Button>
          </CardAction>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid gap-2">
          <Label htmlFor="email">Email Address</Label>

          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            className="h-11 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <RadioGroup className="flex gap-4 w-full">
          <Label htmlFor="r1" className="cursor-pointer">
            <div className="rounded-xl border hover:border-black transition-all shadow-sm p-3">
              <div className="flex items-center gap-4">
                <RadioGroupItem value="bank" id="r1" />
                <span className="font-medium text-sm sm:text-base">
                  Bank Transfer
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-500 sm:pl-7">SWIFT / IBAN</p>
            </div>
          </Label>

          <Label htmlFor="r2" className="cursor-pointer ml-auto">
            <div className="rounded-xl border p-3 hover:border-black transition-all shadow-sm">
              <div className="flex items-center gap-4">
                <RadioGroupItem value="paypal" id="r2" />
                <span className="font-medium text-sm sm:text-base">PayPal</span>
              </div>

              <p className="mt-2 text-xs text-gray-500 pl-6 sm:pl-7">
                Instant Payment
              </p>
            </div>
          </Label>
        </RadioGroup>

        <div className="grid gap-2">
          <Label htmlFor="iban">IBAN / Account Number</Label>

          <Input
            id="iban"
            placeholder="DE89 2547 8500..."
            className="h-11 rounded-lg"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleSave}
          disabled={Loading || email.trim() === "" || account.trim() === ""}
          className="w-full rounded-lg text-white bg-black hover:bg-gray-800"
        >
          {Loading ? (
            <>
              <Spinner className="mr-2" />
              Saving...
            </>
          ) : (
            "Save Payout Settings"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
