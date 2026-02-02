import React from "react";
import clsx from "clsx";

interface PriceChangeProps {
  value: number;
  className?: string;
}

export const PriceChange: React.FC<PriceChangeProps> = ({
  value,
  className,
}) => {
  const isPositive = value >= 0;

  return (
    <div
      className={clsx(
        "px-3 py-1.5 rounded-xl font-bold text-sm flex items-center gap-1",
        isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
        className,
      )}
    >
      <span>{isPositive ? "↗" : "↘"}</span>
      {isPositive ? "+" : ""}
      {value.toFixed(2)}%
    </div>
  );
};
