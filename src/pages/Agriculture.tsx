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

// Pest Control Forms
import PestControlFarmerRegistrationForm from "@/components/agriculture/PestControlFarmerRegistrationForm";
import PestControlVendorRegistrationForm from "@/components/agriculture/PestControlVendorRegistrationForm";
import PestIdentificationForm from "@/components/agriculture/PestIdentificationForm";
import PestControlServiceRequestForm from "@/components/agriculture/PestControlServiceRequestForm";
import PestControlContractForm from "@/components/agriculture/PestControlContractForm";
import PestControlSubsidyForm from "@/components/agriculture/PestControlSubsidyForm";
import TreatmentServiceLogForm from "@/components/agriculture/TreatmentServiceLogForm";
import PestControlFeedbackForm from "@/components/agriculture/PestControlFeedbackForm";
import PestMonitoringIoTForm from "@/components/agriculture/PestMonitoringIoTForm";
import PestInsuranceClaimForm from "@/components/agriculture/PestInsuranceClaimForm";
import PesticideMarketplaceForm from "@/components/agriculture/PesticideMarketplaceForm";

// Seeds & Fertilizers Forms
import SeedProductListingForm from "@/components/agriculture/SeedProductListingForm";
import SeedComplianceCertificationForm from "@/components/agriculture/SeedComplianceCertificationForm";
import SeedBuyerRequestForm from "@/components/agriculture/SeedBuyerRequestForm";
import SeedQuotationForm from "@/components/agriculture/SeedQuotationForm";
import SeedPurchaseOrderForm from "@/components/agriculture/SeedPurchaseOrderForm";
import SeedPaymentInvoiceForm from "@/components/agriculture/SeedPaymentInvoiceForm";
import SeedDeliverySchedulingForm from "@/components/agriculture/SeedDeliverySchedulingForm";
import SeedInventoryTrackingForm from "@/components/agriculture/SeedInventoryTrackingForm";
import SeedReturnReplacementForm from "@/components/agriculture/SeedReturnReplacementForm";
import SeedFarmerCooperativeForm from "@/components/agriculture/SeedFarmerCooperativeForm";
import SeedSupplierOnboardingForm from "@/components/agriculture/SeedSupplierOnboardingForm";
import SeedFeedbackRatingForm from "@/components/agriculture/SeedFeedbackRatingForm";
import SeedDemandForecastForm from "@/components/agriculture/SeedDemandForecastForm";
import SeedComplianceDashboardForm from "@/components/agriculture/SeedComplianceDashboardForm";
import SeedSustainabilityReportForm from "@/components/agriculture/SeedSustainabilityReportForm";

const categories = [
  { title: "Crops & Grains", description: "Wheat, rice, corn, and cereals", icon: Wheat },
  { title: "Farm Equipment", description: "Tractors, harvesters, implements", icon: Tractor },
  { title: "Seeds & Fertilizers", description: "Agricultural inputs and nutrients", icon: Sprout, hasSubItems: true },
  { title: "Pest Control", description: "Pesticides and crop protection", icon: Bug, hasSubItems: true },
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

const pestControlForms = [
  { 
    id: "pest-farmer-registration",
    title: "Farmer / Landowner Registration",
    description: "Farmer details, land details, pest history, recurring issues & seasonal outbreaks",
    authority: "Agriculture Department",
    component: PestControlFarmerRegistrationForm
  },
  { 
    id: "pest-vendor-registration",
    title: "Pest Control Vendor Registration",
    description: "Vendor details, service catalog, chemicals/biological agents, safety certifications",
    authority: "CIB&RC / State Govt",
    component: PestControlVendorRegistrationForm
  },
  { 
    id: "pest-identification",
    title: "Pest Identification & Diagnosis Form",
    description: "Crop details, pest type, severity level, images/document upload for diagnosis",
    authority: "Plant Protection",
    component: PestIdentificationForm
  },
  { 
    id: "pest-service-request",
    title: "Pest Control Service Request Form",
    description: "Service type, preferred schedule, budget constraints, broker/vendor selection",
    authority: "Service Provider",
    component: PestControlServiceRequestForm
  },
  { 
    id: "pest-brokerage-contract",
    title: "Brokerage Contract / Agreement Form",
    description: "Parties involved, safety protocols, delivery schedule, digital signature/e-stamp",
    authority: "Legal Authority",
    component: PestControlContractForm
  },
  { 
    id: "pest-subsidy-application",
    title: "Government Scheme / Subsidy Application",
    description: "Organic pest control subsidy, crop protection programs, required documents",
    authority: "State/Central Govt",
    component: PestControlSubsidyForm
  },
  { 
    id: "treatment-service-log",
    title: "Treatment & Service Log Form",
    description: "Chemicals/agents used, dosage, batch number, safety compliance notes",
    authority: "Service Provider",
    component: TreatmentServiceLogForm
  },
  { 
    id: "pest-feedback-dispute",
    title: "Feedback & Dispute Resolution Form",
    description: "Issue type, crop damage, safety concerns, resolution status, broker mediation",
    authority: "Grievance Cell",
    component: PestControlFeedbackForm
  },
  { 
    id: "pest-iot-monitoring",
    title: "IoT Monitoring Form",
    description: "Pest traps, drone surveillance, soil sensors data recording",
    authority: "Technology Partner",
    component: PestMonitoringIoTForm
  },
  { 
    id: "pest-insurance-claim",
    title: "Insurance Claim Form",
    description: "Crop loss due to pest outbreak despite treatment - claim submission",
    authority: "Insurance Provider",
    component: PestInsuranceClaimForm
  },
  { 
    id: "pesticide-marketplace",
    title: "Marketplace Listing Form",
    description: "Resale of unused pesticides or organic pest control kits",
    authority: "Marketplace",
    component: PesticideMarketplaceForm
  },
];

const seedsFertilizersForms = [
  { 
    id: "seed-product-listing",
    title: "Seed & Fertilizer Product Listing",
    description: "Seed variety details, fertilizer type, packaging sizes, pricing tiers, and supplier details",
    authority: "Agriculture Department",
    component: SeedProductListingForm
  },
  { 
    id: "seed-compliance-certification",
    title: "Compliance & Certification Form",
    description: "Seed certification, fertilizer license, safety data sheets, and organic certification",
    authority: "Seed Certification Agency",
    component: SeedComplianceCertificationForm
  },
  { 
    id: "seed-buyer-request",
    title: "Buyer Request Form",
    description: "Quantity, delivery location, preferred supplier, and special requirements",
    authority: "Marketplace",
    component: SeedBuyerRequestForm
  },
  { 
    id: "seed-quotation",
    title: "Quotation / Price Negotiation Form",
    description: "Price quotes, volume discounts, payment terms, and validity period",
    authority: "Supplier",
    component: SeedQuotationForm
  },
  { 
    id: "seed-purchase-order",
    title: "Purchase Order Form",
    description: "Auto-generated from buyer request with order details and confirmation",
    authority: "Procurement",
    component: SeedPurchaseOrderForm
  },
  { 
    id: "seed-payment-invoice",
    title: "Payment & Invoice Form",
    description: "Integrated payment processing and invoice generation",
    authority: "Finance",
    component: SeedPaymentInvoiceForm
  },
  { 
    id: "seed-delivery-scheduling",
    title: "Delivery Scheduling Form",
    description: "Warehouse, cold storage, transport mode, and delivery timeline",
    authority: "Logistics",
    component: SeedDeliverySchedulingForm
  },
  { 
    id: "seed-inventory-tracking",
    title: "Inventory Tracking Form",
    description: "Stock levels, batch numbers, expiry dates, and reorder alerts",
    authority: "Warehouse",
    component: SeedInventoryTrackingForm
  },
  { 
    id: "seed-return-replacement",
    title: "Return / Replacement Request Form",
    description: "Handle damaged or expired product returns and replacements",
    authority: "Customer Service",
    component: SeedReturnReplacementForm
  },
  { 
    id: "seed-farmer-cooperative",
    title: "Farmer Cooperative Registration",
    description: "Register farmer cooperatives for bulk purchases and benefits",
    authority: "Cooperative Society",
    component: SeedFarmerCooperativeForm
  },
  { 
    id: "seed-supplier-onboarding",
    title: "Supplier Onboarding Form",
    description: "Register new suppliers with verification and compliance checks",
    authority: "Procurement",
    component: SeedSupplierOnboardingForm
  },
  { 
    id: "seed-feedback-rating",
    title: "Feedback & Rating Form",
    description: "Quality feedback for seeds/fertilizers and delivery experience",
    authority: "Quality Assurance",
    component: SeedFeedbackRatingForm
  },
  { 
    id: "seed-demand-forecast",
    title: "Demand Forecasting Form",
    description: "Crop season and regional demand inputs for planning",
    authority: "Analytics",
    component: SeedDemandForecastForm
  },
  { 
    id: "seed-compliance-dashboard",
    title: "Compliance Dashboard Input Form",
    description: "Audit readiness and regulatory submission tracking",
    authority: "Compliance",
    component: SeedComplianceDashboardForm
  },
  { 
    id: "seed-sustainability-report",
    title: "Sustainability Reporting Form",
    description: "Eco-friendly fertilizers and carbon footprint tracking",
    authority: "Sustainability",
    component: SeedSustainabilityReportForm
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
    if (selectedCategory === "Pest Control") {
      return pestControlForms;
    }
    if (selectedCategory === "Seeds & Fertilizers") {
      return seedsFertilizersForms;
    }
    return [];
  };

  const getCategoryDescription = () => {
    switch (selectedCategory) {
      case "Storage & Logistics":
        return "Warehousing, cold storage, and transport documentation";
      case "Irrigation Systems":
        return "Water management, equipment, and irrigation services";
      case "Pest Control":
        return "Pesticides, crop protection, and pest management services";
      case "Seeds & Fertilizers":
        return "Agricultural inputs, nutrients, and seed management";
      default:
        return "";
    }
  };

  const renderFormComponent = () => {
    const allForms = [...storageLogisticsForms, ...irrigationSystemsForms, ...pestControlForms, ...seedsFertilizersForms];
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
              <p className="text-muted-foreground">{getCategoryDescription()}</p>
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
