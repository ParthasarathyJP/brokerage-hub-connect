import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Tractor, Sprout, Bug, Droplet, Warehouse, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

import WDRAWarehouseRegistrationForm from "@/components/agriculture/WDRAWarehouseRegistrationForm";
import NegotiableWarehouseReceiptForm from "@/components/agriculture/NegotiableWarehouseReceiptForm";
import ColdStorageDataSheetForm from "@/components/agriculture/ColdStorageDataSheetForm";
import ColdStorageSubsidyForm from "@/components/agriculture/ColdStorageSubsidyForm";
import FSSAILicenseForm from "@/components/agriculture/FSSAILicenseForm";
import TransportPermitForm from "@/components/agriculture/TransportPermitForm";
import WarehouseReceiptFinancingForm from "@/components/agriculture/WarehouseReceiptFinancingForm";

const categories = [
  { title: "Crops & Grains", description: "Wheat, rice, corn, and cereals", icon: Wheat },
  { title: "Farm Equipment", description: "Tractors, harvesters, implements", icon: Tractor },
  { title: "Seeds & Fertilizers", description: "Agricultural inputs and nutrients", icon: Sprout },
  { title: "Pest Control", description: "Pesticides and crop protection", icon: Bug },
  { title: "Irrigation Systems", description: "Water management solutions", icon: Droplet },
  { title: "Storage & Logistics", description: "Warehousing and cold storage", icon: Warehouse, hasSubItems: true },
];

const storageLogisticsForms = [
  { 
    id: "wdra-registration",
    title: "WDRA Warehouse Registration Form",
    description: "Registers warehouse/cold storage under the Warehousing Development and Regulatory Authority",
    authority: "WDRA",
    component: WDRAWarehouseRegistrationForm
  },
  { 
    id: "nwr-form",
    title: "Negotiable Warehouse Receipt (NWR) Form",
    description: "Enables issuance of electronic receipts for stored goods, facilitating trade and finance",
    authority: "WDRA",
    component: NegotiableWarehouseReceiptForm
  },
  { 
    id: "cold-storage-data-sheet",
    title: "Basic Data Sheet for Cold Storage",
    description: "Captures infrastructure, capacity, and operational details for subsidy eligibility",
    authority: "NHB",
    component: ColdStorageDataSheetForm
  },
  { 
    id: "cold-storage-subsidy",
    title: "Cold Storage Subsidy Application Form",
    description: "Applies for financial assistance under NHB schemes for cold storage setup",
    authority: "NHB",
    component: ColdStorageSubsidyForm
  },
  { 
    id: "fssai-license",
    title: "FSSAI License Application",
    description: "Ensures compliance for storing consumable agricultural produce (for food grains)",
    authority: "FSSAI",
    component: FSSAILicenseForm
  },
  { 
    id: "transport-permit",
    title: "Transport Permit Form",
    description: "Authorizes movement of goods from storage to market",
    authority: "State Transport Authority",
    component: TransportPermitForm
  },
  { 
    id: "warehouse-financing",
    title: "Warehouse Receipt Financing Request",
    description: "Enables farmers/traders to seek loans against stored inventory",
    authority: "Integrated with banks",
    component: WarehouseReceiptFinancingForm
  },
];

const Agriculture = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const handleCategoryClick = (categoryTitle: string, hasSubItems?: boolean) => {
    if (hasSubItems) {
      setSelectedCategory(categoryTitle);
      setSelectedForm(null);
    }
  };

  const handleFormClick = (formId: string) => {
    setSelectedForm(formId);
  };

  const handleBack = () => {
    if (selectedForm) {
      setSelectedForm(null);
    } else {
      setSelectedCategory(null);
    }
  };

  const renderFormComponent = () => {
    const form = storageLogisticsForms.find(f => f.id === selectedForm);
    if (form) {
      const FormComponent = form.component;
      return <FormComponent />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        {/* Back Button */}
        {(selectedCategory || selectedForm) && (
          <Button variant="ghost" onClick={handleBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        )}

        {/* Main Categories View */}
        {!selectedCategory && !selectedForm && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Agriculture</h1>
              <p className="text-muted-foreground">Farm products, equipment, and agricultural services</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card 
                  key={category.title} 
                  className={`hover:shadow-lg transition-shadow ${category.hasSubItems ? 'cursor-pointer' : ''}`}
                  onClick={() => handleCategoryClick(category.title, category.hasSubItems)}
                >
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
                  {category.hasSubItems && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Click to view forms →</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Storage & Logistics Forms List */}
        {selectedCategory === "Storage & Logistics" && !selectedForm && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Storage & Logistics Forms</h1>
              <p className="text-muted-foreground">Warehousing, cold storage, and transport documentation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {storageLogisticsForms.map((form) => (
                <Card 
                  key={form.id} 
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleFormClick(form.id)}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{form.title}</CardTitle>
                        <CardDescription className="mt-1">{form.description}</CardDescription>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                            {form.authority}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Selected Form View */}
        {selectedForm && (
          <div className="py-4">
            {renderFormComponent()}
          </div>
        )}
      </main>
    </div>
  );
};

export default Agriculture;
