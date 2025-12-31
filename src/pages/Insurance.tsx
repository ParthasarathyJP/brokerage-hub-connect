import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Car, Home, Briefcase, Plane, Shield } from "lucide-react";

const categories = [
  { title: "Health Insurance", description: "Medical and healthcare coverage", icon: Heart },
  { title: "Vehicle Insurance", description: "Auto, bike, and commercial vehicles", icon: Car },
  { title: "Property Insurance", description: "Home and commercial property", icon: Home },
  { title: "Business Insurance", description: "Liability and commercial coverage", icon: Briefcase },
  { title: "Travel Insurance", description: "Trip protection and coverage", icon: Plane },
  { title: "Life Insurance", description: "Term and whole life policies", icon: Shield },
];

const Insurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Insurance</h1>
          <p className="text-muted-foreground">Browse and manage insurance policies and claims</p>
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

export default Insurance;
