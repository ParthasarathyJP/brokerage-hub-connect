import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Tractor, Sprout, Bug, Droplet, Warehouse, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Storage & Logistics Forms
import WDRAWarehouseRegistrationForm from "@/components/agriculture/WDRAWarehouseRegistrationForm";
import NegotiableWarehouseReceiptForm from "@/components/agriculture/NegotiableWarehouseReceiptForm";
import ColdStorageDataSheetForm from "@/components/agriculture/ColdStorageDataSheetForm";
import ColdStorageSubsidyForm from "@/components/agriculture/ColdStorageSubsidyForm";
import FSSAILicenseForm from "@/components/agriculture/FSSAILicenseForm";
import TransportPermitForm from "@/components/agriculture/TransportPermitForm";
import WarehouseReceiptFinancingForm from "@/components/agriculture/WarehouseReceiptFinancingForm";

// Irrigation Systems Forms
import FarmerRegistrationForm from "@/components/agriculture/FarmerRegistrationForm";
import IrrigationVendorRegistrationForm from "@/components/agriculture/IrrigationVendorRegistrationForm";
import WaterResourceBrokerageForm from "@/components/agriculture/WaterResourceBrokerageForm";
import IrrigationServiceRequestForm from "@/components/agriculture/IrrigationServiceRequestForm";
import BrokerageContractForm from "@/components/agriculture/BrokerageContractForm";
import IrrigationSubsidyForm from "@/components/agriculture/IrrigationSubsidyForm";
import MaintenanceServiceLogForm from "@/components/agriculture/MaintenanceServiceLogForm";
import FeedbackDisputeForm from "@/components/agriculture/FeedbackDisputeForm";
import IoTSensorDataForm from "@/components/agriculture/IoTSensorDataForm";
import IrrigationInsuranceClaimForm from "@/components/agriculture/IrrigationInsuranceClaimForm";
import IrrigationMarketplaceListingForm from "@/components/agriculture/IrrigationMarketplaceListingForm";

const categories = [
  { title: "Crops & Grains", description: "Wheat, rice, corn, and cereals", icon: Wheat },
  { title: "Farm Equipment", description: "Tractors, harvesters, implements", icon: Tractor },
  { title: "Seeds & Fertilizers", description: "Agricultural inputs and nutrients", icon: Sprout },
  { title: "Pest Control", description: "Pesticides and crop protection", icon: Bug },
  { title: "Irrigation Systems", description: "Water management solutions", icon: Droplet, hasSubItems: true },
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

const irrigationSystemsForms = [
  { 
    id: "farmer-registration",
    title: "Farmer / Landowner Registration",
    description: "Personal details, land details, crop type & irrigation needs, water source availability",
    authority: "Agriculture Department",
    component: FarmerRegistrationForm
  },
  { 
    id: "vendor-registration",
    title: "Irrigation Equipment Vendor Registration",
    description: "Vendor details, product catalog, pricing & warranty, service/maintenance offerings",
    authority: "Commerce Department",
    component: IrrigationVendorRegistrationForm
  },
  { 
    id: "water-brokerage",
    title: "Water Resource Brokerage Form",
    description: "Source type, water rights/licensing, seasonal availability, pricing per unit",
    authority: "Water Resources Department",
    component: WaterResourceBrokerageForm
  },
  { 
    id: "service-request",
    title: "Irrigation Service Request Form",
    description: "Farmer ID, type of irrigation required, duration & frequency, budget constraints",
    authority: "Irrigation Department",
    component: IrrigationServiceRequestForm
  },
  { 
    id: "brokerage-contract",
    title: "Brokerage Contract / Agreement Form",
    description: "Broker details, parties involved, terms & conditions, payment schedule, digital signature",
    authority: "Legal Authority",
    component: BrokerageContractForm
  },
  { 
    id: "subsidy-application",
    title: "Subsidy / Government Scheme Application",
    description: "Farmer eligibility, scheme type (PMKSY, state subsidy), required documents, approval workflow",
    authority: "PMKSY / State Govt",
    component: IrrigationSubsidyForm
  },
  { 
    id: "maintenance-log",
    title: "Maintenance & Service Log Form",
    description: "Equipment ID, service date & type, technician/vendor details, cost, warranty claims",
    authority: "Service Provider",
    component: MaintenanceServiceLogForm
  },
  { 
    id: "feedback-dispute",
    title: "Feedback & Dispute Resolution Form",
    description: "Farmer/vendor feedback, issue type, resolution status, broker mediation notes",
    authority: "Grievance Cell",
    component: FeedbackDisputeForm
  },
  { 
    id: "iot-sensor-data",
    title: "IoT Sensor Data Form",
    description: "Smart irrigation tracking: soil moisture, water flow, pump status monitoring",
    authority: "Technology Partner",
    component: IoTSensorDataForm
  },
  { 
    id: "insurance-claim",
    title: "Insurance Claim Form",
    description: "Crop loss due to irrigation failure - claim submission and processing",
    authority: "Insurance Provider",
    component: IrrigationInsuranceClaimForm
  },
  { 
    id: "marketplace-listing",
    title: "Marketplace Listing Form",
    description: "Resale of used irrigation equipment - listing and pricing",
    authority: "Marketplace",
    component: IrrigationMarketplaceListingForm
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

  const getFormsForCategory = () => {
    if (selectedCategory === "Storage & Logistics") {
      return storageLogisticsForms;
    }
    if (selectedCategory === "Irrigation Systems") {
      return irrigationSystemsForms;
    }
    return [];
  };

  const renderFormComponent = () => {
    const allForms = [...storageLogisticsForms, ...irrigationSystemsForms];
    const form = allForms.find(f => f.id === selectedForm);
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

        {/* Category Forms List */}
        {selectedCategory && !selectedForm && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">{selectedCategory} Forms</h1>
              <p className="text-muted-foreground">
                {selectedCategory === "Storage & Logistics" 
                  ? "Warehousing, cold storage, and transport documentation"
                  : "Water management, equipment, and irrigation services"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getFormsForCategory().map((form) => (
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
