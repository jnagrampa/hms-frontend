"use client";

import { useFilterTicketStore } from "@/lib/FilterTicketStore";

interface SummaryCardProps {
  count: number;
  statusType: string;
}

const SummaryCard = ({ count, statusType }: SummaryCardProps) => {
  const setStatus = useFilterTicketStore((state) => state.setStatus);

  const handleClick = () => {
    setStatus(statusType.toLowerCase());
  };

  return (
    <div
      onClick={handleClick}
      className="w-full cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:border-primary/40 flex flex-col items-center justify-items-center p-4 rounded-lg"
    >
      <span className="text-sm sm:text-lg md:text-xl text-center">{count}</span>

      <span className="text-xs sm:text-base md:text-lg font-bold text-center">
        {/* Business Logic: Internally 'In-progress' tickets are displayed as 'Open' tickets */}
        {statusType === "In-progress" ? "Open" : statusType}
      </span>
    </div>
  );
};

export default SummaryCard;
