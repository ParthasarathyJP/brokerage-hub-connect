import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pickaxe,
  Mountain,
  FlaskConical,
  Wheat,
  Ribbon,
  Flame,
  FileText,
  ClipboardCheck,
  Truck,
  TestTube,
  PackageMinus,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import RawMaterialRequestForm from "@/components/rawmaterials/RawMaterialRequestForm";
import RawMaterialPurchaseOrderForm from "@/components/rawmaterials/RawMaterialPurchaseOrderForm";
import SupplierVerificationForm from "@/components/rawmaterials/SupplierVerificationForm";
import GoodsReceiptForm from "@/components/rawmaterials/GoodsReceiptForm";
import QualityControlForm from "@/components/rawmaterials/QualityControlForm";
import RawMaterialInventoryForm from "@/components/rawmaterials/RawMaterialInventoryForm";
import RawMaterialReturnForm from "@/components/rawmaterials/RawMaterialReturnForm";
import ComplianceAuditForm from "@/components/rawmaterials/ComplianceAuditForm";

const materialCategories = [
  {
    name: "Metals",
    icon: Pickaxe,
    description: "Iron, aluminum, copper, steel, zinc",
    examples: "Used in manufacturing, construction, automotive",
    color: "bg-slate-500",
  },
  {
    name: "Minerals",
    icon: Mountain,
    description: "Limestone, clay, silica, gypsum",
    examples: "Used in cement, ceramics, glass production",
    color: "bg-amber-600",
  },
  {
    name: "Chemicals",
    icon: FlaskConical,
    description: "Acids, solvents, polymers, resins",
    examples: "Used in pharma, plastics, paints",
    color: "bg-purple-500",
  },
  {
    name: "Agricultural Products",
    icon: Wheat,
    description: "Grains, cotton, rubber, wood, latex",
    examples: "Used in food, textiles, manufacturing",
    color: "bg-green-600",
  },
  {
    name: "Natural Fibers",
    icon: Ribbon,
    description: "Wool, jute, hemp, silk",
    examples: "Used in textiles, packaging, composites",
    color: "bg-yellow-600",
  },
  {
    name: "Energy-related",
    icon: Flame,
    description: "Coal, crude oil, natural gas",
    examples: "Used in power generation, fuel, petrochemicals",
    color: "bg-orange-600",
  },
];

const RawMaterials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Raw Materials</h1>
          <p className="text-muted-foreground">
            Manage raw material procurement, quality control, and compliance
          </p>
        </div>

        {/* Material Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {materialCategories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-1">
                  {category.description}
                </p>
                <p className="text-xs text-muted-foreground/70">{category.examples}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Forms Tabs */}
        <Tabs defaultValue="request" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto gap-2 bg-transparent p-0">
            <TabsTrigger
              value="request"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex gap-2"
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Request</span>
            </TabsTrigger>
            <TabsTrigger
              value="purchase-order"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Purchase Order</span>
            </TabsTrigger>
            <TabsTrigger
              value="supplier-verification"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex gap-2"
            >
              <ClipboardCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Verification</span>
            </TabsTrigger>
            <TabsTrigger
              value="goods-receipt"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex gap-2"
            >
              <Truck className="h-4 w-4" />
              <span className="hidden sm:inline">Goods Receipt</span>
            </TabsTrigger>
            <TabsTrigger
              value="quality-control"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex gap-2"
            >
              <TestTube className="h-4 w-4" />
              <span className="hidden sm:inline">Quality Control</span>
            </TabsTrigger>
            <TabsTrigger
              value="inventory"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex gap-2"
            >
              <PackageMinus className="h-4 w-4" />
              <span className="hidden sm:inline">Inventory</span>
            </TabsTrigger>
            <TabsTrigger
              value="return"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Return</span>
            </TabsTrigger>
            <TabsTrigger
              value="compliance"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex gap-2"
            >
              <ShieldCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Compliance</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="request">
            <Card>
              <CardHeader>
                <CardTitle>Raw Material Request Form</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Submit a request for raw materials from production teams
                </p>
              </CardHeader>
              <CardContent>
                <RawMaterialRequestForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="purchase-order">
            <Card>
              <CardHeader>
                <CardTitle>Purchase Order</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Generate purchase orders for bulk raw material procurement
                </p>
              </CardHeader>
              <CardContent>
                <RawMaterialPurchaseOrderForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="supplier-verification">
            <Card>
              <CardHeader>
                <CardTitle>Supplier Verification Documents</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Verify supplier certifications, COA, SDS, and compliance documents
                </p>
              </CardHeader>
              <CardContent>
                <SupplierVerificationForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goods-receipt">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Note / Goods Receipt</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Record materials received at warehouse with batch details
                </p>
              </CardHeader>
              <CardContent>
                <GoodsReceiptForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quality-control">
            <Card>
              <CardHeader>
                <CardTitle>Quality Control Form</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Document batch testing, inspection reports, and lab analysis
                </p>
              </CardHeader>
              <CardContent>
                <QualityControlForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Adjustment Form</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Record shrinkage, wastage, expiry, or stock corrections
                </p>
              </CardHeader>
              <CardContent>
                <RawMaterialInventoryForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="return">
            <Card>
              <CardHeader>
                <CardTitle>Return / Replacement Form</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Process returns for defective or non-compliant materials
                </p>
              </CardHeader>
              <CardContent>
                <RawMaterialReturnForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance">
            <Card>
              <CardHeader>
                <CardTitle>Compliance & Audit Form</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Regulatory documentation for pharma, food, or chemical industries
                </p>
              </CardHeader>
              <CardContent>
                <ComplianceAuditForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default RawMaterials;
