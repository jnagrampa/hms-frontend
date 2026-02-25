import { Progress } from "@/components/ui/progress";

const getProgressColor = (value: number) => {
  if (value >= 100) return "bg-red-500";
  if (value >= 75) return "bg-orange-500";
  return "bg-green-500";
};

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="flex flex-col items-center gap-1 w-[50%]">
      <span className="text-xs">{value >= 100 ? ">100%" : `${value}%`}</span>
      <Progress
        value={value > 100 ? 100 : value}
        indicatorClassName={getProgressColor(value)}
      />
    </div>
  );
};

export default ProgressBar;
