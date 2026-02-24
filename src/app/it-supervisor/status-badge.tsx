import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Status =
  | "Not Started"
  | "In-progress"
  | "Hold"
  | "Purchasing"
  | "Escalation"
  | "Invalid"
  | "Closed";

export function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    "Not Started":
      "bg-slate-200 text-slate-700 border border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",

    "In-progress":
      "bg-indigo-600 text-white border border-indigo-600 dark:bg-indigo-500",

    Hold: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-800",

    Purchasing:
      "bg-sky-100 text-sky-800 border border-sky-300 dark:bg-sky-900/40 dark:text-sky-300 dark:border-sky-800",

    Escalation:
      "bg-rose-600 text-white border border-rose-600 dark:bg-rose-500",

    Invalid:
      "bg-zinc-200 text-zinc-600 border border-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700",

    Closed:
      "bg-emerald-600 text-white border border-emerald-600 dark:bg-emerald-500",
  };

  return (
    <Badge
      className={cn(
        "rounded-md px-2.5 py-0.5 text-xs font-medium",
        styles[status],
      )}
    >
      {status}
    </Badge>
  );
}
