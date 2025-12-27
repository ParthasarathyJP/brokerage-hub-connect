import { cn } from "@/lib/utils";
import {
  Home,
  Briefcase,
  ShoppingCart,
  Layers,
  ArrowRight,
  Database,
  Search,
  Zap,
  Cloud,
  MapPin,
  CreditCard,
} from "lucide-react";

const ArchitectureFlow = ({ className }: { className?: string }) => {
  const inputNodes = [
    { icon: Home, label: "Real Estate", color: "from-blue-500 to-blue-600" },
    { icon: Briefcase, label: "Services", color: "from-indigo-500 to-indigo-600" },
    { icon: ShoppingCart, label: "Wholesale", color: "from-violet-500 to-violet-600" },
    { icon: Layers, label: "Raw Materials", color: "from-purple-500 to-purple-600" },
  ];

  const coreModules = [
    "User Management & Auth",
    "GraphQL API Gateway",
    "Real-time Matching",
    "Escrow Logic",
  ];

  const microservices = [
    "Real Estate Service",
    "Marketplace",
    "Wholesale Platform",
    "Materials Exchange",
  ];

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8", className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative">
        <h3 className="mb-8 text-center text-xl font-bold text-foreground">
          System Architecture
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Input Nodes */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 text-center">
              Demand Input
            </p>
            {inputNodes.map((node, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 px-4 py-3 transition-all duration-300 hover:border-primary/50 hover:shadow-soft"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-primary-foreground",
                    node.color
                  )}
                >
                  <node.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {node.label}
                </span>
              </div>
            ))}
          </div>

          {/* Flow Arrow */}
          <div className="flex items-center">
            <ArrowRight className="h-8 w-8 text-primary animate-pulse-slow" />
          </div>

          {/* Core Engine */}
          <div className="flex-1 max-w-md">
            <div className="rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">
                  Brokerage Hub Core Engine
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {coreModules.map((module, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg bg-background/80 px-3 py-2 text-xs font-medium text-foreground border border-border/30"
                  >
                    {module}
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-border/50 bg-background/50 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    Microservices Layer
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {microservices.map((service, idx) => (
                    <div
                      key={idx}
                      className="rounded-md bg-accent/10 px-2 py-1.5 text-xs text-accent-foreground border border-accent/20"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Layer */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/80 px-3 py-2">
                <Database className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">
                  PostgreSQL
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/80 px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">
                  Elasticsearch
                </span>
              </div>
            </div>
          </div>

          {/* Flow Arrow */}
          <div className="flex items-center">
            <ArrowRight className="h-8 w-8 text-primary animate-pulse-slow" />
          </div>

          {/* Output */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 text-center">
              Supply Output
            </p>
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-lg border border-success/30 bg-success/5 px-4 py-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/20 text-success">
                  <ShoppingCart className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Supply Pool {idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="mt-8 flex justify-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 py-2">
            <MapPin className="h-4 w-4 text-info" />
            <span className="text-sm text-muted-foreground">Mapping Services</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 py-2">
            <CreditCard className="h-4 w-4 text-info" />
            <span className="text-sm text-muted-foreground">Payment Gateway</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureFlow;
