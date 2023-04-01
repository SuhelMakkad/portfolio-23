"use client";

import { useEffect, useRef } from "react";

import styles from "./styles.module.css";
import { throttle } from "@/utils";

const TracingBlob = () => {
  const blobRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handlePointerMove = throttle((e: PointerEvent) => {
      if (!blobRef.current) return;

      const { clientX, clientY } = e;

      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 300, fill: "forwards" }
      );
    }, 100);

    document.addEventListener("pointermove", handlePointerMove);

    return () => document.removeEventListener("pointermove", handlePointerMove);
  }, [blobRef]);
  return (
    <div className={styles.main}>
      <span className={styles.blur}></span>
      <span ref={blobRef} className={styles.blob}></span>
    </div>
  );
};

export default TracingBlob;
