"use client";

import { useState, useEffect } from "react";

import { getCurrentTime } from "@/utils";

const CurrentTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const currTime = getCurrentTime();
    setTime(currTime);

    const intervalInMs = 1000;
    const intervalId = setInterval(() => {
      const currTime = getCurrentTime();
      setTime(currTime);
    }, intervalInMs);

    return () => clearInterval(intervalId);
  }, []);

  return time ? <span className="animate-fade-in">{time}</span> : <span></span>;
};

export default CurrentTime;
