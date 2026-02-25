"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());

    // normalize value
    const statusValue = text.toLowerCase();
    params.set("status", statusValue);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:border-primary/40 flex flex-col items-center justify-items-center p-4 rounded-lg"
    >
      <span className="text-sm sm:text-lg md:text-xl text-center">{count}</span>
      <span className="text-xs sm:text-base md:text-lg font-bold text-center">
        {text === "In-progress" ? "Open" : text}
      </span>
    </div>
  );
};

export default SummaryCard;
