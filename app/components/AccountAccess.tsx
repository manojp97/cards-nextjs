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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
// import { Spinner } from "@/components/ui/spinner"

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

// Main AccountAccess component
export default function AccountAccess() {
  const [Loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 


  // Simulate an async operation for updating credentials
  const handleClick = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Credentials Updated");
      setLoading(false);
    } catch (error) {
      console.error("Error updating credentials:", error);
      setLoading(false);
    }
  };

  return (
    // Main card container
    <Card className="w-full h-full max-w-sm  sm:max-w-md md:max-w-lg rounded-xl shadow ">
      
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Account Access</CardTitle>

        <CardDescription className="text-gray-500">
          Update your credentials or re-authenticate.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email" className="font-medium">
                Email Address
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="h-11 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="font-medium">
                  Current Password
                </Label>

                <a
                  href="#"
                  className="ml-auto text-sm text-blue-600 hover:underline"
                >
                  Forgot?
                </a>
              </div>

              <Input
                id="password"
                type="password"
                placeholder="*********"
                required
                className="h-11 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <Button
          type="submit"
          className="w-full rounded-lg bg-black text-white hover:bg-gray-800"
          onClick={handleClick}
          disabled={Loading || email.trim() === "" || password.trim() === "" }
        >
          {Loading ? (
            <Spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "🔒Update Security"
          )}
        
        </Button>

        <Card className="w-full cursor-pointer border-red-200 bg-red-50 hover:bg-red-100 transition-all duration-200">
          <div className="flex items-center justify-between p-4">
            <div>
              <h3 className="font-semibold text-red-600">Danger Zone</h3>

              <p className="text-xs text-gray-600 mt-1">
                Archive Account and remove catalog
              </p>
            </div>

            <span className="text-xl font-bold text-red-600">→</span>
          </div>
        </Card>
      </CardFooter>
    </Card>
  );
}
