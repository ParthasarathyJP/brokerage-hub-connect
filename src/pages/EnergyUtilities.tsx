import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Flame, Droplets, Sun, Wind, Factory } from "lucide-react";

const categories = [
  { title: "Electricity", description: "Power generation and distribution", icon: Zap },
  { title: "Natural Gas", description: "Gas supply and pipeline services", icon: Flame },
  { title: "Water Services", description: "Water supply and treatment", icon: Droplets },
  { title: "Solar Energy", description: "Photovoltaic and solar thermal", icon: Sun },
  { title: "Wind Energy", description: "Wind farms and turbine services", icon: Wind },
  { title: "Industrial Utilities", description: "Steam, compressed air, cooling", icon: Factory },
];

const EnergyUtilities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Energy & Utilities</h1>
          <p className="text-muted-foreground">Power, water, and utility service management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EnergyUtilities;
