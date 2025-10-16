import React from "react";
import { Typography } from "../ui/typography";

const CountSummary = ({ count, title }: { count: string; title: string }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-1">
      <Typography variant="h2">{count}</Typography>
      <Typography variant="caption">{title}</Typography>
    </div>
  );
};

export default CountSummary;
