"use client";

import { useEffect, useRef } from "react";

import styles from "./styles.module.css";
import { isMouseAvailable } from "@/utils";

const TracingBlob = () => {
  const blobRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!blobRef.current) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!blobRef.current) return;

      const { clientX, clientY } = e;

      blobRef.current.animate(
        {
          transform: `translate(${clientX}px, ${clientY}px)`,
        },
        { duration: 300, fill: "forwards" }
      );
    };

    document.addEventListener("pointermove", handlePointerMove);

    return () => document.removeEventListener("pointermove", handlePointerMove);
  }, [blobRef]);

  if (isMouseAvailable()) {
    return <></>;
  }

  return (
    <div className={styles.main}>
      <span className={styles.blur} />
      <span ref={blobRef} className={styles.blobWrapper}>
        <span className={styles.blob} />
      </span>
    </div>
  );
};

export default TracingBlob;
