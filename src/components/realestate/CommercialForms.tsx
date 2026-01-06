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

// -------------------- Lease Application (Commercial) --------------------
const leaseAppSchema = z.object({
  businessName: z.string().min(2),
  contactPerson: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal("")),
  premisesAddress: z.string().min(5),
  businessType: z.string().min(2),
  annualRevenue: z.string().min(1),
  intendedUse: z.string().min(3),
  leaseTermMonths: z.string().min(1),
});

type LeaseAppData = z.infer<typeof leaseAppSchema>;

export function LeaseApplicationForm() {
  const { toast } = useToast();
  const form = useForm<LeaseAppData>({
    resolver: zodResolver(leaseAppSchema),
    defaultValues: {
      businessName: "",
      contactPerson: "",
      phone: "",
      email: "",
      premisesAddress: "",
      businessType: "",
      annualRevenue: "",
      intendedUse: "",
      leaseTermMonths: "36",
    },
  });

  const onSubmit = (data: LeaseAppData) => {
    console.log("LeaseApplication", data);
    toast({ title: "Lease application submitted", description: "Commercial tenant details captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Lease Application Form" description="Business tenant details and financials.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="businessName" render={({ field }) => (
              <FormItem>
                <FormLabel>Business name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="contactPerson" render={({ field }) => (
              <FormItem>
                <FormLabel>Contact person</FormLabel>
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
          </div>

          <FormField control={form.control} name="premisesAddress" render={({ field }) => (
            <FormItem>
              <FormLabel>Premises address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="businessType" render={({ field }) => (
              <FormItem>
                <FormLabel>Business type</FormLabel>
                <FormControl><Input placeholder="Retail, office, restaurant..." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="annualRevenue" render={({ field }) => (
              <FormItem>
                <FormLabel>Annual revenue</FormLabel>
                <FormControl><Input placeholder="e.g., 2 Cr" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="leaseTermMonths" render={({ field }) => (
              <FormItem>
                <FormLabel>Lease term (months)</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="intendedUse" render={({ field }) => (
            <FormItem>
              <FormLabel>Intended use</FormLabel>
              <FormControl><Textarea placeholder="Describe how you will use the space" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- LOI --------------------
const loiSchema = z.object({
  partyA: z.string().min(2),
  partyB: z.string().min(2),
  propertyAddress: z.string().min(5),
  proposedRent: z.string().min(1),
  deposit: z.string().min(1),
  termMonths: z.string().min(1),
  exclusivityDays: z.string().min(1),
  notes: z.string().max(3000).optional().or(z.literal("")),
});

type LoiData = z.infer<typeof loiSchema>;

export function LetterOfIntentForm() {
  const { toast } = useToast();
  const form = useForm<LoiData>({
    resolver: zodResolver(loiSchema),
    defaultValues: {
      partyA: "",
      partyB: "",
      propertyAddress: "",
      proposedRent: "",
      deposit: "",
      termMonths: "36",
      exclusivityDays: "15",
      notes: "",
    },
  });

  const onSubmit = (data: LoiData) => {
    console.log("LOI", data);
    toast({ title: "LOI captured", description: "Pre-contract negotiation terms saved." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Letter of Intent (LOI) Form" description="Pre-contract negotiation terms.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="partyA" render={({ field }) => (
              <FormItem>
                <FormLabel>Party A</FormLabel>
                <FormControl><Input placeholder="Tenant / Buyer" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="partyB" render={({ field }) => (
              <FormItem>
                <FormLabel>Party B</FormLabel>
                <FormControl><Input placeholder="Landlord / Seller" {...field} /></FormControl>
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
            <FormField control={form.control} name="proposedRent" render={({ field }) => (
              <FormItem>
                <FormLabel>Proposed rent</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="deposit" render={({ field }) => (
              <FormItem>
                <FormLabel>Deposit</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="termMonths" render={({ field }) => (
              <FormItem>
                <FormLabel>Term (months)</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="exclusivityDays" render={({ field }) => (
              <FormItem>
                <FormLabel>Exclusivity (days)</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="notes" render={({ field }) => (
            <FormItem>
              <FormLabel>Notes (optional)</FormLabel>
              <FormControl><Textarea {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-2">
            <Button type="submit">Save LOI</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Assignment / Sublease --------------------
const assignmentSchema = z.object({
  currentTenant: z.string().min(2),
  proposedAssignee: z.string().min(2),
  propertyAddress: z.string().min(5),
  requestType: z.enum(["assignment", "sublease"]),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  reason: z.string().min(5).max(2000),
});

type AssignmentData = z.infer<typeof assignmentSchema>;

export function AssignmentSubleaseRequestForm() {
  const { toast } = useToast();
  const form = useForm<AssignmentData>({
    resolver: zodResolver(assignmentSchema),
    defaultValues: {
      currentTenant: "",
      proposedAssignee: "",
      propertyAddress: "",
      requestType: "sublease",
      startDate: "",
      endDate: "",
      reason: "",
    },
  });

  const onSubmit = (data: AssignmentData) => {
    console.log("AssignmentSublease", data);
    toast({ title: "Request submitted", description: "Lease transfer request captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Assignment/Sublease Request Form" description="Transfer of lease rights request.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="currentTenant" render={({ field }) => (
              <FormItem>
                <FormLabel>Current tenant</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="proposedAssignee" render={({ field }) => (
              <FormItem>
                <FormLabel>Proposed assignee / sub-tenant</FormLabel>
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

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="requestType" render={({ field }) => (
              <FormItem>
                <FormLabel>Request type</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="assignment">Assignment</SelectItem>
                    <SelectItem value="sublease">Sublease</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
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
          </div>

          <FormField control={form.control} name="reason" render={({ field }) => (
            <FormItem>
              <FormLabel>Reason</FormLabel>
              <FormControl><Textarea {...field} /></FormControl>
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

// -------------------- Build-to-Suit --------------------
const btsSchema = z.object({
  companyName: z.string().min(2),
  contactPerson: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal("")),
  preferredLocation: z.string().min(2),
  areaRequiredSqft: z.string().min(1),
  timeline: z.string().min(2),
  requirements: z.string().min(10).max(3000),
});

type BtsData = z.infer<typeof btsSchema>;

export function BuildToSuitRequestForm() {
  const { toast } = useToast();
  const form = useForm<BtsData>({
    resolver: zodResolver(btsSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      preferredLocation: "",
      areaRequiredSqft: "",
      timeline: "",
      requirements: "",
    },
  });

  const onSubmit = (data: BtsData) => {
    console.log("BuildToSuit", data);
    toast({ title: "Build-to-suit request submitted", description: "Custom development proposal captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Build-to-Suit Request Form" description="Custom development proposal.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="companyName" render={({ field }) => (
              <FormItem>
                <FormLabel>Company name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="contactPerson" render={({ field }) => (
              <FormItem>
                <FormLabel>Contact person</FormLabel>
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
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="preferredLocation" render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred location</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="areaRequiredSqft" render={({ field }) => (
              <FormItem>
                <FormLabel>Area required (sq ft)</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="timeline" render={({ field }) => (
              <FormItem>
                <FormLabel>Timeline</FormLabel>
                <FormControl><Input placeholder="e.g., 6 months" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="requirements" render={({ field }) => (
            <FormItem>
              <FormLabel>Requirements</FormLabel>
              <FormControl><Textarea placeholder="Layout, parking, power, approvals..." {...field} /></FormControl>
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

// -------------------- Co-working Membership --------------------
const coworkSchema = z.object({
  companyOrIndividual: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  location: z.string().min(2),
  membershipPlan: z.enum(["hot-desk", "dedicated-desk", "private-office"]),
  startDate: z.string().min(1),
  notes: z.string().max(2000).optional().or(z.literal("")),
});

type CoworkData = z.infer<typeof coworkSchema>;

export function CoWorkingMembershipForm() {
  const { toast } = useToast();
  const form = useForm<CoworkData>({
    resolver: zodResolver(coworkSchema),
    defaultValues: {
      companyOrIndividual: "",
      contactName: "",
      email: "",
      phone: "",
      location: "",
      membershipPlan: "hot-desk",
      startDate: "",
      notes: "",
    },
  });

  const onSubmit = (data: CoworkData) => {
    console.log("CoWorkingMembership", data);
    toast({ title: "Membership request submitted", description: "Co-working onboarding captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Co-Working Membership Form" description="Shared office onboarding.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="companyOrIndividual" render={({ field }) => (
              <FormItem>
                <FormLabel>Company / Individual</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="contactName" render={({ field }) => (
              <FormItem>
                <FormLabel>Contact name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="location" render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl><Input placeholder="City / Area" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="membershipPlan" render={({ field }) => (
              <FormItem>
                <FormLabel>Plan</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="hot-desk">Hot desk</SelectItem>
                    <SelectItem value="dedicated-desk">Dedicated desk</SelectItem>
                    <SelectItem value="private-office">Private office</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="startDate" render={({ field }) => (
              <FormItem>
                <FormLabel>Start date</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="notes" render={({ field }) => (
            <FormItem>
              <FormLabel>Notes (optional)</FormLabel>
              <FormControl><Textarea {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}
