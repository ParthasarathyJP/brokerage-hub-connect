import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import RealEstateFormShell from "@/components/realestate/RealEstateFormShell";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// -------------------- Buyer Inquiry --------------------
const buyerInquirySchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
  budgetMin: z.string().min(1, "Budget min required"),
  budgetMax: z.string().min(1, "Budget max required"),
  preferredLocation: z.string().min(2, "Location required"),
  propertyType: z.enum(["apartment", "villa", "plot", "other"]),
  bedrooms: z.enum(["studio", "1", "2", "3", "4+" ]).optional(),
  notes: z.string().max(1000).optional().or(z.literal("")),
});

type BuyerInquiryData = z.infer<typeof buyerInquirySchema>;

export function BuyerInquiryForm() {
  const { toast } = useToast();
  const form = useForm<BuyerInquiryData>({
    resolver: zodResolver(buyerInquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      budgetMin: "",
      budgetMax: "",
      preferredLocation: "",
      propertyType: "apartment",
      bedrooms: "2",
      notes: "",
    },
  });

  const onSubmit = (data: BuyerInquiryData) => {
    console.log("BuyerInquiry", data);
    toast({ title: "Inquiry submitted", description: "We’ll contact you shortly." });
    form.reset();
  };

  return (
    <RealEstateFormShell
      title="Buyer Inquiry Form"
      description="Capture buyer requirements: budget, location, and property type."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl><Input placeholder="e.g., Asha Patel" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl><Input placeholder="e.g., +91..." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (optional)</FormLabel>
                  <FormControl><Input placeholder="name@email.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferredLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred location</FormLabel>
                  <FormControl><Input placeholder="City / Area" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <FormField
              control={form.control}
              name="budgetMin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget min</FormLabel>
                  <FormControl><Input placeholder="e.g., 50,00,000" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budgetMax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget max</FormLabel>
                  <FormControl><Input placeholder="e.g., 80,00,000" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="plot">Plot</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bedrooms</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4+">4+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional notes</FormLabel>
                <FormControl><Textarea placeholder="Timeline, amenities, etc." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2">
            <Button type="submit">Submit inquiry</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Tenant Application --------------------
const tenantAppSchema = z.object({
  applicantName: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal("")),
  propertyAddress: z.string().min(5),
  monthlyIncome: z.string().min(1),
  employerName: z.string().min(2),
  employmentType: z.enum(["salaried", "self-employed", "student", "other"]),
  referenceName: z.string().min(2),
  referencePhone: z.string().min(7),
  consent: z.enum(["yes"]).default("yes"),
});

type TenantAppData = z.infer<typeof tenantAppSchema>;

export function TenantApplicationForm() {
  const { toast } = useToast();
  const form = useForm<TenantAppData>({
    resolver: zodResolver(tenantAppSchema),
    defaultValues: {
      applicantName: "",
      phone: "",
      email: "",
      propertyAddress: "",
      monthlyIncome: "",
      employerName: "",
      employmentType: "salaried",
      referenceName: "",
      referencePhone: "",
      consent: "yes",
    },
  });

  const onSubmit = (data: TenantAppData) => {
    console.log("TenantApplication", data);
    toast({ title: "Application submitted", description: "Rental screening details saved." });
    form.reset();
  };

  return (
    <RealEstateFormShell
      title="Tenant Application Form"
      description="Rental screening: employment, references, and consent."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="applicantName" render={({ field }) => (
              <FormItem>
                <FormLabel>Applicant name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email (optional)</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="propertyAddress" render={({ field }) => (
              <FormItem>
                <FormLabel>Property address</FormLabel>
                <FormControl><Input placeholder="Address you are applying for" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="monthlyIncome" render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly income</FormLabel>
                <FormControl><Input placeholder="e.g., 1,20,000" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="employerName" render={({ field }) => (
              <FormItem>
                <FormLabel>Employer / Business name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField
              control={form.control}
              name="employmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employment type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="salaried">Salaried</SelectItem>
                      <SelectItem value="self-employed">Self-employed</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="referenceName" render={({ field }) => (
              <FormItem>
                <FormLabel>Reference name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="referencePhone" render={({ field }) => (
              <FormItem>
                <FormLabel>Reference phone</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
            By submitting, you confirm you have provided accurate information and consent to verification checks.
          </div>

          <div className="flex gap-2">
            <Button type="submit">Submit application</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Offer to Purchase --------------------
const offerSchema = z.object({
  buyerName: z.string().min(2),
  sellerName: z.string().min(2),
  propertyAddress: z.string().min(5),
  offerPrice: z.string().min(1),
  depositAmount: z.string().min(1),
  closingDate: z.string().min(1, "Closing date required"),
  financingType: z.enum(["cash", "loan", "other"]),
  conditions: z.string().max(2000).optional().or(z.literal("")),
});

type OfferData = z.infer<typeof offerSchema>;

export function OfferToPurchaseForm() {
  const { toast } = useToast();
  const form = useForm<OfferData>({
    resolver: zodResolver(offerSchema),
    defaultValues: {
      buyerName: "",
      sellerName: "",
      propertyAddress: "",
      offerPrice: "",
      depositAmount: "",
      closingDate: "",
      financingType: "loan",
      conditions: "",
    },
  });

  const onSubmit = (data: OfferData) => {
    console.log("OfferToPurchase", data);
    toast({ title: "Offer submitted", description: "Offer details captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Offer to Purchase Form" description="Formal buyer offer submission.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="buyerName" render={({ field }) => (
              <FormItem>
                <FormLabel>Buyer name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="sellerName" render={({ field }) => (
              <FormItem>
                <FormLabel>Seller name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="propertyAddress" render={({ field }) => (
            <FormItem>
              <FormLabel>Property address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-4">
            <FormField control={form.control} name="offerPrice" render={({ field }) => (
              <FormItem>
                <FormLabel>Offer price</FormLabel>
                <FormControl><Input placeholder="e.g., 1,25,00,000" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="depositAmount" render={({ field }) => (
              <FormItem>
                <FormLabel>Deposit</FormLabel>
                <FormControl><Input placeholder="e.g., 5,00,000" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="closingDate" render={({ field }) => (
              <FormItem>
                <FormLabel>Closing date</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="financingType" render={({ field }) => (
              <FormItem>
                <FormLabel>Financing</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="loan">Loan</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="conditions" render={({ field }) => (
            <FormItem>
              <FormLabel>Conditions (optional)</FormLabel>
              <FormControl><Textarea placeholder="Inspection, loan approval, etc." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-2">
            <Button type="submit">Submit offer</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Rental Agreement --------------------
const rentalAgreementSchema = z.object({
  landlordName: z.string().min(2),
  tenantName: z.string().min(2),
  propertyAddress: z.string().min(5),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  monthlyRent: z.string().min(1),
  securityDeposit: z.string().min(1),
  paymentDueDay: z.string().min(1),
  specialTerms: z.string().max(3000).optional().or(z.literal("")),
});

type RentalAgreementData = z.infer<typeof rentalAgreementSchema>;

export function RentalAgreementForm() {
  const { toast } = useToast();
  const form = useForm<RentalAgreementData>({
    resolver: zodResolver(rentalAgreementSchema),
    defaultValues: {
      landlordName: "",
      tenantName: "",
      propertyAddress: "",
      startDate: "",
      endDate: "",
      monthlyRent: "",
      securityDeposit: "",
      paymentDueDay: "5",
      specialTerms: "",
    },
  });

  const onSubmit = (data: RentalAgreementData) => {
    console.log("RentalAgreement", data);
    toast({ title: "Agreement drafted", description: "Rental agreement details captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Rental Agreement Form" description="Standardized tenancy contract inputs.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="landlordName" render={({ field }) => (
              <FormItem>
                <FormLabel>Landlord name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="tenantName" render={({ field }) => (
              <FormItem>
                <FormLabel>Tenant name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="propertyAddress" render={({ field }) => (
            <FormItem>
              <FormLabel>Property address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-4">
            <FormField control={form.control} name="startDate" render={({ field }) => (
              <FormItem>
                <FormLabel>Start date</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="endDate" render={({ field }) => (
              <FormItem>
                <FormLabel>End date</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="monthlyRent" render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly rent</FormLabel>
                <FormControl><Input placeholder="e.g., 25,000" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="securityDeposit" render={({ field }) => (
              <FormItem>
                <FormLabel>Security deposit</FormLabel>
                <FormControl><Input placeholder="e.g., 50,000" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="paymentDueDay" render={({ field }) => (
            <FormItem>
              <FormLabel>Rent due day (1-28)</FormLabel>
              <FormControl><Input placeholder="e.g., 5" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="specialTerms" render={({ field }) => (
            <FormItem>
              <FormLabel>Special terms (optional)</FormLabel>
              <FormControl><Textarea placeholder="Pets, parking, repairs, etc." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-2">
            <Button type="submit">Save agreement</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Rent-to-Own Agreement --------------------
const rentToOwnSchema = z.object({
  tenantBuyerName: z.string().min(2),
  ownerSellerName: z.string().min(2),
  propertyAddress: z.string().min(5),
  monthlyRent: z.string().min(1),
  optionFee: z.string().min(1),
  purchasePrice: z.string().min(1),
  optionExpiryDate: z.string().min(1),
  creditsApplied: z.string().min(1, "Rent credit terms required"),
});

type RentToOwnData = z.infer<typeof rentToOwnSchema>;

export function RentToOwnAgreementForm() {
  const { toast } = useToast();
  const form = useForm<RentToOwnData>({
    resolver: zodResolver(rentToOwnSchema),
    defaultValues: {
      tenantBuyerName: "",
      ownerSellerName: "",
      propertyAddress: "",
      monthlyRent: "",
      optionFee: "",
      purchasePrice: "",
      optionExpiryDate: "",
      creditsApplied: "",
    },
  });

  const onSubmit = (data: RentToOwnData) => {
    console.log("RentToOwn", data);
    toast({ title: "Rent-to-Own captured", description: "Agreement terms saved." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Rent-to-Own Agreement Form" description="Hybrid ownership pathway terms.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="tenantBuyerName" render={({ field }) => (
              <FormItem>
                <FormLabel>Tenant / buyer name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="ownerSellerName" render={({ field }) => (
              <FormItem>
                <FormLabel>Owner / seller name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="propertyAddress" render={({ field }) => (
            <FormItem>
              <FormLabel>Property address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-4">
            <FormField control={form.control} name="monthlyRent" render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly rent</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="optionFee" render={({ field }) => (
              <FormItem>
                <FormLabel>Option fee</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="purchasePrice" render={({ field }) => (
              <FormItem>
                <FormLabel>Purchase price</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="optionExpiryDate" render={({ field }) => (
              <FormItem>
                <FormLabel>Option expiry</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="creditsApplied" render={({ field }) => (
            <FormItem>
              <FormLabel>Rent credits applied towards purchase</FormLabel>
              <FormControl><Textarea placeholder="e.g., 20% of monthly rent credited" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-2">
            <Button type="submit">Save terms</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Maintenance Request --------------------
const maintenanceSchema = z.object({
  tenantName: z.string().min(2),
  unitOrAddress: z.string().min(3),
  issueCategory: z.enum(["plumbing", "electrical", "hvac", "appliance", "general"]),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  description: z.string().min(10).max(2000),
  accessNotes: z.string().max(1000).optional().or(z.literal("")),
  preferredVisitDate: z.string().optional().or(z.literal("")),
});

type MaintenanceData = z.infer<typeof maintenanceSchema>;

export function MaintenanceRequestForm() {
  const { toast } = useToast();
  const form = useForm<MaintenanceData>({
    resolver: zodResolver(maintenanceSchema),
    defaultValues: {
      tenantName: "",
      unitOrAddress: "",
      issueCategory: "general",
      priority: "medium",
      description: "",
      accessNotes: "",
      preferredVisitDate: "",
    },
  });

  const onSubmit = (data: MaintenanceData) => {
    console.log("MaintenanceRequest", data);
    toast({ title: "Request submitted", description: "Maintenance ticket captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Maintenance Request Form" description="Tenants can report issues and request repairs.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="tenantName" render={({ field }) => (
              <FormItem>
                <FormLabel>Tenant name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="unitOrAddress" render={({ field }) => (
              <FormItem>
                <FormLabel>Unit / Address</FormLabel>
                <FormControl><Input placeholder="Flat 402 / Full address" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="issueCategory" render={({ field }) => (
              <FormItem>
                <FormLabel>Issue category</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="hvac">HVAC</SelectItem>
                    <SelectItem value="appliance">Appliance</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="priority" render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="preferredVisitDate" render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred visit date (optional)</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem>
              <FormLabel>Issue description</FormLabel>
              <FormControl><Textarea placeholder="Describe the issue" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="accessNotes" render={({ field }) => (
            <FormItem>
              <FormLabel>Access notes (optional)</FormLabel>
              <FormControl><Textarea placeholder="Best time, key with security, etc." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-2">
            <Button type="submit">Submit request</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}
