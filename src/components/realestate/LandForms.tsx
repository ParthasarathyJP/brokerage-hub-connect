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

// -------------------- Land Sale Agreement --------------------
const landSaleSchema = z.object({
  buyerName: z.string().min(2),
  sellerName: z.string().min(2),
  landLocation: z.string().min(5),
  surveyOrKhasra: z.string().min(1),
  area: z.string().min(1),
  salePrice: z.string().min(1),
  closingDate: z.string().min(1),
});

type LandSaleData = z.infer<typeof landSaleSchema>;

export function LandSaleAgreementForm() {
  const { toast } = useToast();
  const form = useForm<LandSaleData>({
    resolver: zodResolver(landSaleSchema),
    defaultValues: {
      buyerName: "",
      sellerName: "",
      landLocation: "",
      surveyOrKhasra: "",
      area: "",
      salePrice: "",
      closingDate: "",
    },
  });

  const onSubmit = (data: LandSaleData) => {
    console.log("LandSale", data);
    toast({ title: "Agreement captured", description: "Land sale details saved." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Land Sale Agreement Form" description="Transfer of land ownership.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="buyerName" render={({ field }) => (
              <FormItem>
                <FormLabel>Buyer</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="sellerName" render={({ field }) => (
              <FormItem>
                <FormLabel>Seller</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="landLocation" render={({ field }) => (
            <FormItem>
              <FormLabel>Land location</FormLabel>
              <FormControl><Input placeholder="Village, taluka, district" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="surveyOrKhasra" render={({ field }) => (
              <FormItem>
                <FormLabel>Survey/Khasra no.</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="area" render={({ field }) => (
              <FormItem>
                <FormLabel>Area</FormLabel>
                <FormControl><Input placeholder="e.g., 2 acres" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="salePrice" render={({ field }) => (
              <FormItem>
                <FormLabel>Sale price</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="closingDate" render={({ field }) => (
            <FormItem>
              <FormLabel>Closing date</FormLabel>
              <FormControl><Input type="date" {...field} /></FormControl>
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

// -------------------- Lease for Farming --------------------
const farmingLeaseSchema = z.object({
  lessorName: z.string().min(2),
  lesseeName: z.string().min(2),
  landLocation: z.string().min(5),
  cropType: z.string().min(2),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  rentAmount: z.string().min(1),
  irrigationAvailable: z.enum(["yes", "no"]),
});

type FarmingLeaseData = z.infer<typeof farmingLeaseSchema>;

export function LeaseForFarmingForm() {
  const { toast } = useToast();
  const form = useForm<FarmingLeaseData>({
    resolver: zodResolver(farmingLeaseSchema),
    defaultValues: {
      lessorName: "",
      lesseeName: "",
      landLocation: "",
      cropType: "",
      startDate: "",
      endDate: "",
      rentAmount: "",
      irrigationAvailable: "no",
    },
  });

  const onSubmit = (data: FarmingLeaseData) => {
    console.log("FarmingLease", data);
    toast({ title: "Lease captured", description: "Farming lease terms saved." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Lease for Farming Form" description="Seasonal or long-term agricultural land lease.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="lessorName" render={({ field }) => (
              <FormItem>
                <FormLabel>Lessor</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="lesseeName" render={({ field }) => (
              <FormItem>
                <FormLabel>Lessee</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="landLocation" render={({ field }) => (
            <FormItem>
              <FormLabel>Land location</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="cropType" render={({ field }) => (
              <FormItem>
                <FormLabel>Crop type</FormLabel>
                <FormControl><Input placeholder="Wheat, rice..." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="rentAmount" render={({ field }) => (
              <FormItem>
                <FormLabel>Rent amount</FormLabel>
                <FormControl><Input placeholder="Per season / per year" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="irrigationAvailable" render={({ field }) => (
              <FormItem>
                <FormLabel>Irrigation available</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
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

          <div className="flex gap-2">
            <Button type="submit">Save</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Auction Registration --------------------
const auctionSchema = z.object({
  bidderName: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal("")),
  auctionId: z.string().min(1),
  idProof: z.enum(["aadhaar", "passport", "driving-license", "other"]),
  idNumber: z.string().min(4),
});

type AuctionData = z.infer<typeof auctionSchema>;

export function AuctionRegistrationForm() {
  const { toast } = useToast();
  const form = useForm<AuctionData>({
    resolver: zodResolver(auctionSchema),
    defaultValues: {
      bidderName: "",
      phone: "",
      email: "",
      auctionId: "",
      idProof: "aadhaar",
      idNumber: "",
    },
  });

  const onSubmit = (data: AuctionData) => {
    console.log("AuctionRegistration", data);
    toast({ title: "Registered", description: "Auction registration captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Auction Registration Form" description="Bidding participation onboarding.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="bidderName" render={({ field }) => (
              <FormItem>
                <FormLabel>Bidder name</FormLabel>
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
            <FormField control={form.control} name="auctionId" render={({ field }) => (
              <FormItem>
                <FormLabel>Auction ID</FormLabel>
                <FormControl><Input placeholder="Auction reference" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="idProof" render={({ field }) => (
              <FormItem>
                <FormLabel>ID proof</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="aadhaar">Aadhaar</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="driving-license">Driving license</SelectItem>
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

          <div className="flex gap-2">
            <Button type="submit">Register</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Land Development Rights --------------------
const devRightsSchema = z.object({
  landOwnerName: z.string().min(2),
  developerName: z.string().min(2),
  landLocation: z.string().min(5),
  proposedUse: z.string().min(3),
  consideration: z.string().min(1),
  term: z.string().min(2),
  notes: z.string().max(3000).optional().or(z.literal("")),
});

type DevRightsData = z.infer<typeof devRightsSchema>;

export function LandDevelopmentRightsForm() {
  const { toast } = useToast();
  const form = useForm<DevRightsData>({
    resolver: zodResolver(devRightsSchema),
    defaultValues: {
      landOwnerName: "",
      developerName: "",
      landLocation: "",
      proposedUse: "",
      consideration: "",
      term: "",
      notes: "",
    },
  });

  const onSubmit = (data: DevRightsData) => {
    console.log("LandDevelopmentRights", data);
    toast({ title: "Captured", description: "Development rights/JV details saved." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Land Development Rights Form" description="JV/partnership for development.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="landOwnerName" render={({ field }) => (
              <FormItem>
                <FormLabel>Land owner</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="developerName" render={({ field }) => (
              <FormItem>
                <FormLabel>Developer / JV partner</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="landLocation" render={({ field }) => (
            <FormItem>
              <FormLabel>Land location</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="proposedUse" render={({ field }) => (
              <FormItem>
                <FormLabel>Proposed use</FormLabel>
                <FormControl><Input placeholder="Residential, mixed-use..." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="consideration" render={({ field }) => (
              <FormItem>
                <FormLabel>Consideration</FormLabel>
                <FormControl><Input placeholder="Revenue share / fixed amount" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="term" render={({ field }) => (
              <FormItem>
                <FormLabel>Term</FormLabel>
                <FormControl><Input placeholder="e.g., 3 years" {...field} /></FormControl>
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
            <Button type="submit">Save</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}

// -------------------- Exchange/Swap --------------------
const exchangeSchema = z.object({
  partyA: z.string().min(2),
  partyB: z.string().min(2),
  assetA: z.string().min(5),
  assetB: z.string().min(5),
  valuationA: z.string().min(1),
  valuationB: z.string().min(1),
  settlementTerms: z.string().max(2000).optional().or(z.literal("")),
});

type ExchangeData = z.infer<typeof exchangeSchema>;

export function ExchangeSwapAgreementForm() {
  const { toast } = useToast();
  const form = useForm<ExchangeData>({
    resolver: zodResolver(exchangeSchema),
    defaultValues: {
      partyA: "",
      partyB: "",
      assetA: "",
      assetB: "",
      valuationA: "",
      valuationB: "",
      settlementTerms: "",
    },
  });

  const onSubmit = (data: ExchangeData) => {
    console.log("ExchangeSwap", data);
    toast({ title: "Agreement captured", description: "Exchange/swap terms saved." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Exchange/Swap Agreement Form" description="Land-for-land/property deal terms.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="partyA" render={({ field }) => (
              <FormItem>
                <FormLabel>Party A</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="partyB" render={({ field }) => (
              <FormItem>
                <FormLabel>Party B</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="assetA" render={({ field }) => (
              <FormItem>
                <FormLabel>Asset offered by Party A</FormLabel>
                <FormControl><Textarea {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="assetB" render={({ field }) => (
              <FormItem>
                <FormLabel>Asset offered by Party B</FormLabel>
                <FormControl><Textarea {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="valuationA" render={({ field }) => (
              <FormItem>
                <FormLabel>Valuation (A)</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="valuationB" render={({ field }) => (
              <FormItem>
                <FormLabel>Valuation (B)</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="settlementTerms" render={({ field }) => (
            <FormItem>
              <FormLabel>Settlement terms (optional)</FormLabel>
              <FormControl><Textarea placeholder="Cash settlement, timelines, conditions..." {...field} /></FormControl>
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
