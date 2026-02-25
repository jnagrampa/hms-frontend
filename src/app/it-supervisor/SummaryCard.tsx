"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

type TicketStatuses =
  | "Not Started"
  | "In-progress"
  | "Hold"
  | "Purchasing"
  | "Escalation"
  | "Invalid"
  | "Closed";

interface SummaryCardProps {
  count: number;
  text: TicketStatuses;
}

const SummaryCard = ({ count, text }: SummaryCardProps) => {
  return (
    // <Card className="w-full cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
    //   <CardContent className="text-center text-xs sm:text-4xl m-0">
    //     {count}
    //   </CardContent>
    //   <CardTitle className="text-center text-xs sm:text-lg m-0">
    //     {text === "In-progress" ? "Open" : text}
    //   </CardTitle>
    // </Card>
    <div className="w-full cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:border-primary/40 flex flex-col items-center justify-items-center p-4 rounded-lg">
      <span className="text-sm text-center">{count}</span>
      <span className="text-xs font-bold text-center">
        {text === "In-progress" ? "Open" : text}
      </span>
    </div>
  );
};

export default SummaryCard;
