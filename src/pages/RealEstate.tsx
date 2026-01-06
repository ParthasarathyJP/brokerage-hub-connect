import { useMemo, useState } from "react";
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
  FileText,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

import {
  BuyerInquiryForm,
  MaintenanceRequestForm,
  OfferToPurchaseForm,
  RentToOwnAgreementForm,
  RentalAgreementForm,
  TenantApplicationForm,
} from "@/components/realestate/ResidentialForms";
import {
  AssignmentSubleaseRequestForm,
  BuildToSuitRequestForm,
  CoWorkingMembershipForm,
  LeaseApplicationForm,
  LetterOfIntentForm,
} from "@/components/realestate/CommercialForms";
import {
  IndustrialPropertyPurchaseForm,
  JointVentureAgreementForm,
  SafetyComplianceForm,
  WarehouseLeaseForm,
} from "@/components/realestate/IndustrialForms";
import {
  AuctionRegistrationForm,
  ExchangeSwapAgreementForm,
  LandDevelopmentRightsForm,
  LandSaleAgreementForm,
  LeaseForFarmingForm,
} from "@/components/realestate/LandForms";
import {
  BrokerageAgreementForm,
  DisclosureForm,
  FeedbackComplaintForm,
  KYCVerificationForm,
  PaymentEscrowInstructionForm,
} from "@/components/realestate/GeneralForms";

type ActiveTab = "listings" | "post" | "forms" | "search" | "analytics";

type FormKey =
  | "buyer-inquiry"
  | "tenant-application"
  | "offer-to-purchase"
  | "rental-agreement"
  | "rent-to-own"
  | "maintenance"
  | "lease-application"
  | "loi"
  | "assignment-sublease"
  | "build-to-suit"
  | "coworking"
  | "warehouse-lease"
  | "industrial-purchase"
  | "safety-compliance"
  | "joint-venture"
  | "land-sale"
  | "lease-for-farming"
  | "auction-registration"
  | "development-rights"
  | "exchange-swap"
  | "kyc"
  | "brokerage"
  | "disclosure"
  | "escrow"
  | "feedback";

const RealEstate = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("forms");
  const [activeForm, setActiveForm] = useState<FormKey>("buyer-inquiry");

  const menuItems = [
    { id: "forms" as const, label: "Forms", icon: FileText },
    { id: "post" as const, label: "Post Property", icon: Plus },
    { id: "listings" as const, label: "My Listings", icon: List },
    { id: "search" as const, label: "Search", icon: Search },
    { id: "analytics" as const, label: "Analytics", icon: TrendingUp },
  ];

  const propertyStats = [
    { type: "Residential", count: 1247, icon: Home, color: "text-primary" },
    { type: "Commercial", count: 456, icon: Building2, color: "text-accent" },
    { type: "Industrial", count: 123, icon: Factory, color: "text-warning" },
    { type: "Land", count: 289, icon: Mountain, color: "text-success" },
  ];

  const formGroups = useMemo(
    () => [
      {
        title: "Residential",
        items: [
          { key: "buyer-inquiry" as const, label: "Buyer Inquiry" },
          { key: "tenant-application" as const, label: "Tenant Application" },
          { key: "offer-to-purchase" as const, label: "Offer to Purchase" },
          { key: "rental-agreement" as const, label: "Rental Agreement" },
          { key: "rent-to-own" as const, label: "Rent-to-Own Agreement" },
          { key: "maintenance" as const, label: "Maintenance Request" },
        ],
      },
      {
        title: "Commercial",
        items: [
          { key: "lease-application" as const, label: "Lease Application" },
          { key: "loi" as const, label: "Letter of Intent (LOI)" },
          { key: "assignment-sublease" as const, label: "Assignment/Sublease Request" },
          { key: "build-to-suit" as const, label: "Build-to-Suit Request" },
          { key: "coworking" as const, label: "Co-Working Membership" },
        ],
      },
      {
        title: "Industrial",
        items: [
          { key: "warehouse-lease" as const, label: "Warehouse Lease" },
          { key: "industrial-purchase" as const, label: "Industrial Purchase" },
          { key: "safety-compliance" as const, label: "Safety Compliance" },
          { key: "joint-venture" as const, label: "Joint Venture Agreement" },
        ],
      },
      {
        title: "Agricultural / Land",
        items: [
          { key: "land-sale" as const, label: "Land Sale Agreement" },
          { key: "lease-for-farming" as const, label: "Lease for Farming" },
          { key: "auction-registration" as const, label: "Auction Registration" },
          { key: "development-rights" as const, label: "Land Development Rights" },
          { key: "exchange-swap" as const, label: "Exchange/Swap Agreement" },
        ],
      },
      {
        title: "General",
        items: [
          { key: "kyc" as const, label: "KYC / Identity Verification" },
          { key: "brokerage" as const, label: "Brokerage Agreement" },
          { key: "disclosure" as const, label: "Disclosure" },
          { key: "escrow" as const, label: "Payment / Escrow Instruction" },
          { key: "feedback" as const, label: "Feedback / Complaint" },
        ],
      },
    ],
    []
  );

  const activeFormNode = useMemo(() => {
    switch (activeForm) {
      // Residential
      case "buyer-inquiry":
        return <BuyerInquiryForm />;
      case "tenant-application":
        return <TenantApplicationForm />;
      case "offer-to-purchase":
        return <OfferToPurchaseForm />;
      case "rental-agreement":
        return <RentalAgreementForm />;
      case "rent-to-own":
        return <RentToOwnAgreementForm />;
      case "maintenance":
        return <MaintenanceRequestForm />;

      // Commercial
      case "lease-application":
        return <LeaseApplicationForm />;
      case "loi":
        return <LetterOfIntentForm />;
      case "assignment-sublease":
        return <AssignmentSubleaseRequestForm />;
      case "build-to-suit":
        return <BuildToSuitRequestForm />;
      case "coworking":
        return <CoWorkingMembershipForm />;

      // Industrial
      case "warehouse-lease":
        return <WarehouseLeaseForm />;
      case "industrial-purchase":
        return <IndustrialPropertyPurchaseForm />;
      case "safety-compliance":
        return <SafetyComplianceForm />;
      case "joint-venture":
        return <JointVentureAgreementForm />;

      // Land
      case "land-sale":
        return <LandSaleAgreementForm />;
      case "lease-for-farming":
        return <LeaseForFarmingForm />;
      case "auction-registration":
        return <AuctionRegistrationForm />;
      case "development-rights":
        return <LandDevelopmentRightsForm />;
      case "exchange-swap":
        return <ExchangeSwapAgreementForm />;

      // General
      case "kyc":
        return <KYCVerificationForm />;
      case "brokerage":
        return <BrokerageAgreementForm />;
      case "disclosure":
        return <DisclosureForm />;
      case "escrow":
        return <PaymentEscrowInstructionForm />;
      case "feedback":
        return <FeedbackComplaintForm />;

      default:
        return <BuyerInquiryForm />;
    }
  }, [activeForm]);

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
          {activeTab === "post" && <PropertyPostingForm />}

          {activeTab === "forms" && (
            <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
              <Card>
                <CardHeader>
                  <CardTitle>Real Estate Forms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {formGroups.map((group) => (
                    <div key={group.title} className="space-y-2">
                      <div className="text-sm font-semibold text-foreground">{group.title}</div>
                      <div className="grid gap-2">
                        {group.items.map((item) => (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => setActiveForm(item.key)}
                            className={cn(
                              "w-full rounded-lg border border-border px-3 py-2 text-left text-sm transition-colors",
                              "hover:bg-muted",
                              activeForm === item.key && "bg-muted"
                            )}
                          >
                            <span className="inline-flex items-center justify-between w-full">
                              <span className="inline-flex items-center gap-2">
                                <FileText className="h-4 w-4 text-muted-foreground" />
                                {item.label}
                              </span>
                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="min-w-0">{activeFormNode}</div>
            </div>
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
                  <Button variant="outline" className="mt-4" onClick={() => setActiveTab("post")}>
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

