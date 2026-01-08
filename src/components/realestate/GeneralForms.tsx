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

// -------------------- KYC / Identity Verification --------------------
const kycSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal("")),
  idType: z.enum(["aadhaar", "passport", "driving-license", "pan", "other"]),
  idNumber: z.string().min(4),
  address: z.string().min(5),
  purpose: z.enum(["buy", "sell", "rent", "lease", "other"]),
});

type KYCData = z.infer<typeof kycSchema>;

export function KYCVerificationForm() {
  const { toast } = useToast();
  const form = useForm<KYCData>({
    resolver: zodResolver(kycSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      idType: "aadhaar",
      idNumber: "",
      address: "",
      purpose: "buy",
    },
  });

  const onSubmit = (data: KYCData) => {
    console.log("KYC", data);
    toast({ title: "KYC submitted", description: "Identity verification details captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="KYC / Identity Verification Form" description="Mandatory compliance capture.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="fullName" render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
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
            <FormField control={form.control} name="purpose" render={({ field }) => (
              <FormItem>
                <FormLabel>Purpose</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="sell">Sell</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                    <SelectItem value="lease">Lease</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="idType" render={({ field }) => (
              <FormItem>
                <FormLabel>ID type</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="aadhaar">Aadhaar</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="driving-license">Driving license</SelectItem>
                    <SelectItem value="pan">PAN</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="idNumber" render={({ field }) => (
              <FormItem>
                <FormLabel>ID number</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="address" render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl><Textarea {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-2">
            <Button type="submit">Submit KYC</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Brokerage Agreement --------------------
const brokerageSchema = z.object({
  agentName: z.string().min(2),
  clientName: z.string().min(2),
  clientType: z.enum(["buyer", "seller", "landlord", "tenant"]),
  propertyScope: z.string().min(5),
  commissionType: z.enum(["percentage", "flat"]),
  commissionValue: z.string().min(1),
  term: z.string().min(2),
});

type BrokerageData = z.infer<typeof brokerageSchema>;

export function BrokerageAgreementForm() {
  const { toast } = useToast();
  const form = useForm<BrokerageData>({
    resolver: zodResolver(brokerageSchema),
    defaultValues: {
      agentName: "",
      clientName: "",
      clientType: "buyer",
      propertyScope: "",
      commissionType: "percentage",
      commissionValue: "",
      term: "",
    },
  });

  const onSubmit = (data: BrokerageData) => {
    console.log("BrokerageAgreement", data);
    toast({ title: "Agreement saved", description: "Brokerage agreement details captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Brokerage Agreement Form" description="Agreement between agent and client.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="agentName" render={({ field }) => (
              <FormItem>
                <FormLabel>Agent name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="clientName" render={({ field }) => (
              <FormItem>
                <FormLabel>Client name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="clientType" render={({ field }) => (
              <FormItem>
                <FormLabel>Client type</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="buyer">Buyer</SelectItem>
                    <SelectItem value="seller">Seller</SelectItem>
                    <SelectItem value="landlord">Landlord</SelectItem>
                    <SelectItem value="tenant">Tenant</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="commissionType" render={({ field }) => (
              <FormItem>
                <FormLabel>Commission type</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage</SelectItem>
                    <SelectItem value="flat">Flat</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="commissionValue" render={({ field }) => (
              <FormItem>
                <FormLabel>Commission value</FormLabel>
                <FormControl><Input placeholder="e.g., 2% or 50,000" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="propertyScope" render={({ field }) => (
            <FormItem>
              <FormLabel>Property scope</FormLabel>
              <FormControl><Textarea placeholder="Property address/type, scope of services..." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="term" render={({ field }) => (
            <FormItem>
              <FormLabel>Term</FormLabel>
              <FormControl><Input placeholder="e.g., 90 days" {...field} /></FormControl>
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

// -------------------- Disclosure Forms --------------------
const disclosureSchema = z.object({
  propertyAddress: z.string().min(5),
  disclosingParty: z.string().min(2),
  disclosureType: z.enum(["condition", "encumbrances", "legal-compliance", "other"]),
  details: z.string().min(10).max(4000),
});

type DisclosureData = z.infer<typeof disclosureSchema>;

export function DisclosureForm() {
  const { toast } = useToast();
  const form = useForm<DisclosureData>({
    resolver: zodResolver(disclosureSchema),
    defaultValues: {
      propertyAddress: "",
      disclosingParty: "",
      disclosureType: "condition",
      details: "",
    },
  });

  const onSubmit = (data: DisclosureData) => {
    console.log("Disclosure", data);
    toast({ title: "Disclosure saved", description: "Property disclosure captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Disclosure Forms" description="Property condition, encumbrances, and legal compliance.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField control={form.control} name="propertyAddress" render={({ field }) => (
            <FormItem>
              <FormLabel>Property address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="disclosingParty" render={({ field }) => (
              <FormItem>
                <FormLabel>Disclosing party</FormLabel>
                <FormControl><Input placeholder="Owner / Agent" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="disclosureType" render={({ field }) => (
              <FormItem>
                <FormLabel>Disclosure type</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="condition">Property condition</SelectItem>
                    <SelectItem value="encumbrances">Encumbrances</SelectItem>
                    <SelectItem value="legal-compliance">Legal compliance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="details" render={({ field }) => (
            <FormItem>
              <FormLabel>Details</FormLabel>
              <FormControl><Textarea placeholder="Describe disclosures" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-2">
            <Button type="submit">Save</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Payment / Escrow Instructions --------------------
const escrowSchema = z.object({
  payerName: z.string().min(2),
  payeeName: z.string().min(2),
  transactionType: z.enum(["booking", "deposit", "rent", "purchase"]),
  amount: z.string().min(1),
  escrowAgent: z.string().min(2),
  releaseConditions: z.string().min(10).max(3000),
});

type EscrowData = z.infer<typeof escrowSchema>;

export function PaymentEscrowInstructionForm() {
  const { toast } = useToast();
  const form = useForm<EscrowData>({
    resolver: zodResolver(escrowSchema),
    defaultValues: {
      payerName: "",
      payeeName: "",
      transactionType: "deposit",
      amount: "",
      escrowAgent: "",
      releaseConditions: "",
    },
  });

  const onSubmit = (data: EscrowData) => {
    console.log("Escrow", data);
    toast({ title: "Escrow instructions saved", description: "Payment handling details captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Payment / Escrow Instruction Form" description="Handling deposits and transfers.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="payerName" render={({ field }) => (
              <FormItem>
                <FormLabel>Payer</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="payeeName" render={({ field }) => (
              <FormItem>
                <FormLabel>Payee</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="transactionType" render={({ field }) => (
              <FormItem>
                <FormLabel>Transaction type</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="booking">Booking</SelectItem>
                    <SelectItem value="deposit">Deposit</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                    <SelectItem value="purchase">Purchase</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="amount" render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="escrowAgent" render={({ field }) => (
              <FormItem>
                <FormLabel>Escrow agent</FormLabel>
                <FormControl><Input placeholder="Company / person" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="releaseConditions" render={({ field }) => (
            <FormItem>
              <FormLabel>Release conditions</FormLabel>
              <FormControl><Textarea placeholder="When and how the amount is released" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-2">
            <Button type="submit">Save</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Feedback / Complaint --------------------
const feedbackSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().min(7).optional().or(z.literal("")),
  category: z.enum(["service", "listing", "payment", "agent", "other"]),
  message: z.string().min(10).max(3000),
  priority: z.enum(["low", "medium", "high"]),
});

type FeedbackData = z.infer<typeof feedbackSchema>;

export function FeedbackComplaintForm() {
  const { toast } = useToast();
  const form = useForm<FeedbackData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      category: "service",
      message: "",
      priority: "medium",
    },
  });

  const onSubmit = (data: FeedbackData) => {
    console.log("FeedbackComplaint", data);
    toast({ title: "Submitted", description: "Feedback/complaint recorded." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Feedback / Complaint Form" description="Customer service loop.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
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
                  </SelectContent>
                </Select>
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
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (optional)</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="category" render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="service">Service</SelectItem>
                  <SelectItem value="listing">Listing</SelectItem>
                  <SelectItem value="payment">Payment</SelectItem>
                  <SelectItem value="agent">Agent</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl><Textarea placeholder="Describe the issue or feedback" {...field} /></FormControl>
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
