import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Tractor, Sprout, Bug, Droplet, Warehouse } from "lucide-react";

const categories = [
  { title: "Crops & Grains", description: "Wheat, rice, corn, and cereals", icon: Wheat },
  { title: "Farm Equipment", description: "Tractors, harvesters, implements", icon: Tractor },
  { title: "Seeds & Fertilizers", description: "Agricultural inputs and nutrients", icon: Sprout },
  { title: "Pest Control", description: "Pesticides and crop protection", icon: Bug },
  { title: "Irrigation Systems", description: "Water management solutions", icon: Droplet },
  { title: "Storage & Logistics", description: "Warehousing and cold storage", icon: Warehouse },
];

const Agriculture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Agriculture</h1>
          <p className="text-muted-foreground">Farm products, equipment, and agricultural services</p>
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

export default Agriculture;
