"use client";

import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  rx,
  ry,
  className,
  ...otherProps
}: {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <motion.div
      className={cn(
        "relative flex rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900",
        className
      )}
      initial={false}
      animate={{
        x: [0, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
      {...otherProps}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-lg"
        style={{ padding: "1px" }}
      >
        <motion.div
          className="absolute inset-0 h-[200%] w-[200%]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg 340deg, white 360deg)",
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            rotate: 0,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>
      <div
        className="absolute inset-[1px] flex rounded-lg bg-background"
        style={rx && ry ? { borderRadius: `${rx} ${ry}` } : {}}
      >
        {children}
      </div>
    </motion.div>
  );
}
