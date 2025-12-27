import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";

interface Transaction {
  id: string;
  type: "real-estate" | "services" | "wholesale" | "materials";
  title: string;
  amount: string;
  status: "completed" | "pending" | "processing";
  timestamp: Date;
}

const transactions: Transaction[] = [
  {
    id: "1",
    type: "real-estate",
    title: "Property Transfer - Downtown Office",
    amount: "$2,450,000",
    status: "completed",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
  },
  {
    id: "2",
    type: "services",
    title: "IT Consulting Contract",
    amount: "$125,000",
    status: "processing",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
  },
  {
    id: "3",
    type: "wholesale",
    title: "Electronics Bulk Order",
    amount: "$89,500",
    status: "pending",
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
  },
  {
    id: "4",
    type: "materials",
    title: "Steel Supply Agreement",
    amount: "$567,000",
    status: "completed",
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
  },
  {
    id: "5",
    type: "real-estate",
    title: "Warehouse Lease Agreement",
    amount: "$45,000/mo",
    status: "completed",
    timestamp: new Date(Date.now() - 1000 * 60 * 240),
  },
];

const typeColors = {
  "real-estate": "bg-blue-500",
  services: "bg-indigo-500",
  wholesale: "bg-violet-500",
  materials: "bg-purple-500",
};

const statusStyles = {
  completed: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  processing: "bg-info/10 text-info",
};

const RecentActivity = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/50 bg-card p-6 shadow-soft",
        className
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Recent Transactions
        </h3>
        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((tx, idx) => (
          <div
            key={tx.id}
            className="group flex items-center gap-4 rounded-lg p-3 transition-all duration-200 hover:bg-secondary/50 animate-fade-in"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div
              className={cn(
                "h-2 w-2 rounded-full shrink-0",
                typeColors[tx.type]
              )}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {tx.title}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(tx.timestamp, { addSuffix: true })}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-semibold text-foreground">
                {tx.amount}
              </p>
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                  statusStyles[tx.status]
                )}
              >
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
