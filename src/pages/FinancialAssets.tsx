import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Landmark, Coins, BarChart3, PiggyBank, Wallet } from "lucide-react";

const categories = [
  { title: "Stocks & Equities", description: "Public and private equity trading", icon: TrendingUp },
  { title: "Bonds & Securities", description: "Government and corporate bonds", icon: Landmark },
  { title: "Commodities", description: "Gold, silver, and precious metals", icon: Coins },
  { title: "Mutual Funds", description: "Diversified investment portfolios", icon: BarChart3 },
  { title: "Fixed Deposits", description: "Term deposits and savings", icon: PiggyBank },
  { title: "Cryptocurrency", description: "Digital currency trading", icon: Wallet },
];

const FinancialAssets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Financial Assets</h1>
          <p className="text-muted-foreground">Manage investments, securities, and financial instruments</p>
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

export default FinancialAssets;
