import { Badge } from "@/components/ui/badge";

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge className="rounded-md px-2.5 py-0.5 text-xs font-medium bg-slate-200 text-slate-700 border border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
      {status}
    </Badge>
  );
}
