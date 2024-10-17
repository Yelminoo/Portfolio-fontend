"use client";

import { useEffect, useState } from "react";

import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";

interface progressProps {
  progressValue?: number;
}

export function CircularProgressBar({ progressValue = 0 }: progressProps) {
  const [value, setValue] = useState(0);
  const [reachEnd, setReachEnd] = useState(false);

  useEffect(() => {
    if (value < progressValue) {
      const handleIncrement = (prev: number) => {
        if (prev < progressValue - 10) {
          return prev + 10;
        } else if (prev > progressValue - 10) {
          return (prev += progressValue - prev);
        } else {
          return (prev = prev);
        }
      };
      setValue(handleIncrement);
      const interval = setInterval(() => setValue(handleIncrement), 2000);
      return () => clearInterval(interval);
    }
  }, [progressValue, value]);

  return (
    <AnimatedCircularProgressBar
      max={100}
      min={0}
      value={value}
      gaugePrimaryColor="rgb(79 70 229)"
      gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
    />
  );
}
