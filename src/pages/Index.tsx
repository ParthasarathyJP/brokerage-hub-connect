import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import ServiceCard from "@/components/ServiceCard";
import RecentActivity from "@/components/RecentActivity";
import { Button } from "@/components/ui/button";
import {
  Home,
  Briefcase,
  ShoppingCart,
  Layers,
  TrendingUp,
  Users,
  ArrowUpRight,
  GitBranch,
  Activity,
  DollarSign,
} from "lucide-react";

const Index = () => {
  const stats = [
    {
      title: "Total Transactions",
      value: "12,847",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: <Activity className="h-5 w-5" />,
      description: "vs last month",
    },
    {
      title: "Active Users",
      value: "3,429",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: <Users className="h-5 w-5" />,
      description: "vs last month",
    },
    {
      title: "Total Volume",
      value: "$48.2M",
      change: "+23.1%",
      changeType: "positive" as const,
      icon: <DollarSign className="h-5 w-5" />,
      description: "vs last month",
    },
    {
      title: "Growth Rate",
      value: "18.3%",
      change: "-2.4%",
      changeType: "negative" as const,
      icon: <TrendingUp className="h-5 w-5" />,
      description: "vs last month",
    },
  ];

  const services = [
    {
      title: "Real Estate Service",
      description:
        "Property listings, valuations, and transaction management for residential and commercial real estate.",
      icon: <Home className="h-6 w-6" />,
      status: "active" as const,
      metrics: [
        { label: "Active Listings", value: "2,847" },
        { label: "Closed Deals", value: "156" },
      ],
    },
    {
      title: "Marketplace",
      description:
        "Connect service providers with businesses seeking professional services across industries.",
      icon: <Briefcase className="h-6 w-6" />,
      status: "active" as const,
      metrics: [
        { label: "Active Providers", value: "892" },
        { label: "Contracts", value: "234" },
      ],
    },
    {
      title: "Wholesale Platform",
      description:
        "B2B wholesale trading platform for bulk purchases and inventory management.",
      icon: <ShoppingCart className="h-6 w-6" />,
      status: "pending" as const,
      metrics: [
        { label: "Products", value: "15,420" },
        { label: "Orders", value: "1,205" },
      ],
    },
    {
      title: "Raw Materials Exchange",
      description:
        "Commodities trading and supply chain management for raw materials and resources.",
      icon: <Layers className="h-6 w-6" />,
      status: "active" as const,
      metrics: [
        { label: "Commodities", value: "342" },
        { label: "Trades", value: "89" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8 space-y-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl gradient-hero p-8 md:p-12 text-primary-foreground animate-fade-in">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                <GitBranch className="h-3.5 w-3.5" />
                Open Source
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/20 px-3 py-1 text-sm font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                All Systems Online
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Brokerage Hub Platform
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-6">
              An open-source multi-vertical marketplace connecting buyers and
              sellers across real estate, services, wholesale, and raw materials
              markets with real-time matching and secure escrow.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg">
                Explore Markets
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <StatCard {...stat} />
            </div>
          ))}
        </section>

        {/* Services Grid */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Microservices
              </h2>
              <p className="text-muted-foreground">
                Core platform services and their current status
              </p>
            </div>
            <Button variant="outline">
              Manage Services
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <RecentActivity className="animate-fade-in" />
        </section>

        {/* Footer CTA */}
        <section className="rounded-xl border border-border/50 bg-card p-8 text-center animate-fade-in">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Ready to build with us?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Contribute to the open-source platform, integrate with our APIs, or
            deploy your own instance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="default" size="lg">
              <GitBranch className="h-4 w-4" />
              View on GitHub
            </Button>
            <Button variant="outline" size="lg">
              Read the Docs
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
