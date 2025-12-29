import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Home,
  Truck,
  PartyPopper,
  BarChart3,
  Building2,
  ClipboardList,
  UserPlus,
  CalendarClock,
  Shield,
  MessageSquare,
  RotateCcw,
  FileCheck,
} from "lucide-react";
import ServiceRequestForm from "@/components/services/ServiceRequestForm";
import VendorRegistrationForm from "@/components/services/VendorRegistrationForm";
import BookingSchedulingForm from "@/components/services/BookingSchedulingForm";
import EscrowAgreementForm from "@/components/services/EscrowAgreementForm";
import FeedbackRatingForm from "@/components/services/FeedbackRatingForm";
import CancellationRefundForm from "@/components/services/CancellationRefundForm";
import ComplianceLicenseForm from "@/components/services/ComplianceLicenseForm";

const serviceCategories = [
  {
    id: "professional",
    title: "Professional & Skilled",
    icon: Briefcase,
    color: "bg-blue-500",
    services: [
      { name: "Consulting", types: ["Legal", "Financial", "IT", "HR", "Marketing"] },
      { name: "Freelancing", types: ["Design", "Development", "Writing", "Analytics"] },
      { name: "Education & Training", types: ["Tutors", "Coaches", "Certification Providers"] },
      { name: "Healthcare Services", types: ["Telemedicine", "Diagnostics", "Therapy"] },
    ],
  },
  {
    id: "home",
    title: "Home & Maintenance",
    icon: Home,
    color: "bg-green-500",
    services: [
      { name: "Plumbing", types: ["Repairs", "Installation", "Emergency"] },
      { name: "Electrical", types: ["Wiring", "Repairs", "Installation"] },
      { name: "Carpentry", types: ["Furniture", "Repairs", "Custom Work"] },
      { name: "Cleaning & Pest Control", types: ["Residential", "Commercial", "Deep Cleaning"] },
      { name: "Appliance Repair", types: ["AC", "Refrigerator", "Washing Machine"] },
    ],
  },
  {
    id: "logistics",
    title: "Logistics & Delivery",
    icon: Truck,
    color: "bg-orange-500",
    services: [
      { name: "Courier & Parcel", types: ["Local", "Intercity", "Express"] },
      { name: "Packers & Movers", types: ["Household", "Office", "Vehicle"] },
      { name: "Fleet Booking", types: ["Trucks", "Vans", "Two-wheelers"] },
    ],
  },
  {
    id: "events",
    title: "Event & Lifestyle",
    icon: PartyPopper,
    color: "bg-purple-500",
    services: [
      { name: "Photography & Videography", types: ["Weddings", "Corporate", "Portraits"] },
      { name: "Catering & Decor", types: ["Events", "Parties", "Corporate"] },
      { name: "Beauty & Wellness", types: ["Salon", "Spa", "Fitness Trainers"] },
    ],
  },
  {
    id: "business",
    title: "Business Support",
    icon: BarChart3,
    color: "bg-teal-500",
    services: [
      { name: "Accounting & Bookkeeping", types: ["GST Filing", "Audits", "Payroll"] },
      { name: "Digital Marketing", types: ["SEO", "Social Media", "Ads"] },
      { name: "Customer Support", types: ["Call Center", "Chat Support", "Outsourcing"] },
    ],
  },
  {
    id: "facility",
    title: "Facility & Infrastructure",
    icon: Building2,
    color: "bg-red-500",
    services: [
      { name: "Security Services", types: ["Guards", "Surveillance", "Access Control"] },
      { name: "IT Infrastructure", types: ["Networking", "Cloud", "Hardware"] },
      { name: "Office Maintenance", types: ["AMC", "Janitorial", "Repairs"] },
    ],
  },
];

const formTabs = [
  { id: "request", label: "Service Request", icon: ClipboardList },
  { id: "vendor", label: "Vendor Registration", icon: UserPlus },
  { id: "booking", label: "Booking & Scheduling", icon: CalendarClock },
  { id: "escrow", label: "Escrow Agreement", icon: Shield },
  { id: "feedback", label: "Feedback & Rating", icon: MessageSquare },
  { id: "cancellation", label: "Cancellation/Refund", icon: RotateCcw },
  { id: "compliance", label: "Compliance & License", icon: FileCheck },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Services Hub</h1>
          <p className="text-muted-foreground">
            Browse service categories, submit requests, and manage bookings
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {serviceCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <div key={service.name}>
                      <p className="font-medium text-sm text-foreground">{service.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {service.types.map((type) => (
                          <Badge key={type} variant="secondary" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Forms Section */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Service Forms</h2>
          <Tabs defaultValue="request" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent mb-6">
              {formTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="request">
              <ServiceRequestForm />
            </TabsContent>
            <TabsContent value="vendor">
              <VendorRegistrationForm />
            </TabsContent>
            <TabsContent value="booking">
              <BookingSchedulingForm />
            </TabsContent>
            <TabsContent value="escrow">
              <EscrowAgreementForm />
            </TabsContent>
            <TabsContent value="feedback">
              <FeedbackRatingForm />
            </TabsContent>
            <TabsContent value="cancellation">
              <CancellationRefundForm />
            </TabsContent>
            <TabsContent value="compliance">
              <ComplianceLicenseForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Services;
