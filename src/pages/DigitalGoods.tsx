import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, FileText, Music, Video, Gamepad2, BookOpen } from "lucide-react";

const categories = [
  { title: "Software & Apps", description: "Applications and SaaS products", icon: Code },
  { title: "Digital Documents", description: "Templates, contracts, eBooks", icon: FileText },
  { title: "Music & Audio", description: "Tracks, podcasts, sound effects", icon: Music },
  { title: "Video Content", description: "Courses, stock footage, films", icon: Video },
  { title: "Gaming Assets", description: "Games, mods, in-game items", icon: Gamepad2 },
  { title: "Educational Content", description: "Courses, tutorials, certifications", icon: BookOpen },
];

const DigitalGoods = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Digital Goods</h1>
          <p className="text-muted-foreground">Marketplace for software, content, and digital assets</p>
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

export default DigitalGoods;
