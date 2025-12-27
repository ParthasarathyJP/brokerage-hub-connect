import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "active" | "pending" | "inactive";
  metrics?: { label: string; value: string }[];
  className?: string;
  onClick?: () => void;
}

const ServiceCard = ({
  title,
  description,
  icon,
  status,
  metrics,
  className,
  onClick,
}: ServiceCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:border-primary/30",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground group-hover:shadow-glow">
          {icon}
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">{title}</h3>
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                status === "active" && "bg-success/10 text-success",
                status === "pending" && "bg-warning/10 text-warning",
                status === "inactive" && "bg-muted text-muted-foreground"
              )}
            >
              {status}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {metrics && metrics.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border/50 pt-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-xs text-muted-foreground">{metric.label}</p>
              <p className="text-sm font-semibold text-foreground">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

export default ServiceCard;
