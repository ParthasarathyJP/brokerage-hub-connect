import { useState } from "react";
import Header from "@/components/Header";
import PropertyPostingForm from "@/components/PropertyPostingForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  Building2,
  Factory,
  Mountain,
  Plus,
  List,
  Search,
  TrendingUp,
} from "lucide-react";

const RealEstate = () => {
  const [activeTab, setActiveTab] = useState<"listings" | "post" | "search" | "analytics">("listings");

  const menuItems = [
    { id: "listings" as const, label: "My Listings", icon: List },
    { id: "post" as const, label: "Post Property", icon: Plus },
    { id: "search" as const, label: "Search", icon: Search },
    { id: "analytics" as const, label: "Analytics", icon: TrendingUp },
  ];

  const propertyStats = [
    { type: "Residential", count: 1247, icon: Home, color: "text-primary" },
    { type: "Commercial", count: 456, icon: Building2, color: "text-accent" },
    { type: "Industrial", count: 123, icon: Factory, color: "text-warning" },
    { type: "Land", count: 289, icon: Mountain, color: "text-success" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8 space-y-8">
        {/* Page Header */}
        <section className="relative overflow-hidden rounded-2xl gradient-hero p-8 text-primary-foreground animate-fade-in">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-8 w-8" />
              <h1 className="text-3xl font-bold">Real Estate Marketplace</h1>
            </div>
            <p className="text-primary-foreground/80 max-w-2xl">
              List, discover, and manage properties across residential, commercial, industrial, and land categories.
            </p>
          </div>
        </section>

        {/* Property Type Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {propertyStats.map((stat, idx) => (
            <Card key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <CardContent className="p-4 flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.count.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">{stat.type}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Navigation Menu */}
        <section className="flex flex-wrap gap-2 border-b border-border pb-4">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "outline"}
              onClick={() => setActiveTab(item.id)}
              className="gap-2"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </section>

        {/* Content Area */}
        <section className="animate-fade-in">
          {activeTab === "post" && (
            <PropertyPostingForm />
          )}

          {activeTab === "listings" && (
            <Card>
              <CardHeader>
                <CardTitle>My Property Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <List className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No properties listed yet.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setActiveTab("post")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Post Your First Property
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "search" && (
            <Card>
              <CardHeader>
                <CardTitle>Search Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Property search coming soon.</p>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "analytics" && (
            <Card>
              <CardHeader>
                <CardTitle>Property Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Analytics dashboard coming soon.</p>
                </div>
              </CardContent>
            </Card>
          )}
        </section>
      </main>
    </div>
  );
};

export default RealEstate;
