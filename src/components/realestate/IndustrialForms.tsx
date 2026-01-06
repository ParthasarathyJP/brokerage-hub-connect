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

// -------------------- Warehouse Lease --------------------
const warehouseLeaseSchema = z.object({
  lesseeName: z.string().min(2),
  lessorName: z.string().min(2),
  warehouseAddress: z.string().min(5),
  areaSqft: z.string().min(1),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  monthlyRent: z.string().min(1),
  securityDeposit: z.string().min(1),
  permittedUse: z.string().min(3),
});

type WarehouseLeaseData = z.infer<typeof warehouseLeaseSchema>;

export function WarehouseLeaseForm() {
  const { toast } = useToast();
  const form = useForm<WarehouseLeaseData>({
    resolver: zodResolver(warehouseLeaseSchema),
    defaultValues: {
      lesseeName: "",
      lessorName: "",
      warehouseAddress: "",
      areaSqft: "",
      startDate: "",
      endDate: "",
      monthlyRent: "",
      securityDeposit: "",
      permittedUse: "Storage / logistics",
    },
  });

  const onSubmit = (data: WarehouseLeaseData) => {
    console.log("WarehouseLease", data);
    toast({ title: "Warehouse lease captured", description: "Industrial storage agreement saved." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Warehouse Lease Form" description="Storage/logistics lease details.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="lesseeName" render={({ field }) => (
              <FormItem>
                <FormLabel>Lessee</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="lessorName" render={({ field }) => (
              <FormItem>
                <FormLabel>Lessor</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="warehouseAddress" render={({ field }) => (
            <FormItem>
              <FormLabel>Warehouse address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-4">
            <FormField control={form.control} name="areaSqft" render={({ field }) => (
              <FormItem>
                <FormLabel>Area (sq ft)</FormLabel>
                <FormControl><Input {...field} /></FormControl>
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
            <FormField control={form.control} name="monthlyRent" render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly rent</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="securityDeposit" render={({ field }) => (
              <FormItem>
                <FormLabel>Security deposit</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="permittedUse" render={({ field }) => (
              <FormItem>
                <FormLabel>Permitted use</FormLabel>
                <FormControl><Input {...field} /></FormControl>
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

// -------------------- Industrial Property Purchase --------------------
const industrialPurchaseSchema = z.object({
  buyerName: z.string().min(2),
  sellerName: z.string().min(2),
  propertyAddress: z.string().min(5),
  purchasePrice: z.string().min(1),
  deposit: z.string().min(1),
  closingDate: z.string().min(1),
  assetDescription: z.string().min(10).max(3000),
});

type IndustrialPurchaseData = z.infer<typeof industrialPurchaseSchema>;

export function IndustrialPropertyPurchaseForm() {
  const { toast } = useToast();
  const form = useForm<IndustrialPurchaseData>({
    resolver: zodResolver(industrialPurchaseSchema),
    defaultValues: {
      buyerName: "",
      sellerName: "",
      propertyAddress: "",
      purchasePrice: "",
      deposit: "",
      closingDate: "",
      assetDescription: "",
    },
  });

  const onSubmit = (data: IndustrialPurchaseData) => {
    console.log("IndustrialPurchase", data);
    toast({ title: "Purchase details captured", description: "Ownership transfer details saved." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Industrial Property Purchase Form" description="Ownership transfer for industrial property.">
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

          <FormField control={form.control} name="propertyAddress" render={({ field }) => (
            <FormItem>
              <FormLabel>Property address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-3">
            <FormField control={form.control} name="purchasePrice" render={({ field }) => (
              <FormItem>
                <FormLabel>Purchase price</FormLabel>
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
            <FormField control={form.control} name="closingDate" render={({ field }) => (
              <FormItem>
                <FormLabel>Closing date</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="assetDescription" render={({ field }) => (
            <FormItem>
              <FormLabel>Asset description</FormLabel>
              <FormControl><Textarea placeholder="Land, building, machinery included..." {...field} /></FormControl>
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

// -------------------- Safety Compliance --------------------
const safetySchema = z.object({
  facilityName: z.string().min(2),
  facilityAddress: z.string().min(5),
  complianceArea: z.enum(["fire", "zoning", "environment", "occupational-safety"]),
  lastInspectionDate: z.string().min(1),
  issuesFound: z.string().min(3).max(3000),
  correctiveActions: z.string().min(3).max(3000),
  responsiblePerson: z.string().min(2),
});

type SafetyData = z.infer<typeof safetySchema>;

export function SafetyComplianceForm() {
  const { toast } = useToast();
  const form = useForm<SafetyData>({
    resolver: zodResolver(safetySchema),
    defaultValues: {
      facilityName: "",
      facilityAddress: "",
      complianceArea: "fire",
      lastInspectionDate: "",
      issuesFound: "",
      correctiveActions: "",
      responsiblePerson: "",
    },
  });

  const onSubmit = (data: SafetyData) => {
    console.log("SafetyCompliance", data);
    toast({ title: "Compliance log saved", description: "Safety compliance details captured." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Safety Compliance Form" description="Regulatory adherence (fire, zoning, etc.).">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="facilityName" render={({ field }) => (
              <FormItem>
                <FormLabel>Facility name</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="responsiblePerson" render={({ field }) => (
              <FormItem>
                <FormLabel>Responsible person</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="facilityAddress" render={({ field }) => (
            <FormItem>
              <FormLabel>Facility address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="complianceArea" render={({ field }) => (
              <FormItem>
                <FormLabel>Compliance area</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="fire">Fire</SelectItem>
                    <SelectItem value="zoning">Zoning</SelectItem>
                    <SelectItem value="environment">Environment</SelectItem>
                    <SelectItem value="occupational-safety">Occupational safety</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="lastInspectionDate" render={({ field }) => (
              <FormItem>
                <FormLabel>Last inspection date</FormLabel>
                <FormControl><Input type="date" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="issuesFound" render={({ field }) => (
            <FormItem>
              <FormLabel>Issues found</FormLabel>
              <FormControl><Textarea {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="correctiveActions" render={({ field }) => (
            <FormItem>
              <FormLabel>Corrective actions</FormLabel>
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

// -------------------- Joint Venture Agreement --------------------
const jvSchema = z.object({
  partyA: z.string().min(2),
  partyB: z.string().min(2),
  projectSite: z.string().min(5),
  purpose: z.string().min(5),
  contributions: z.string().min(10).max(3000),
  revenueShare: z.string().min(3),
  term: z.string().min(2),
});

type JVData = z.infer<typeof jvSchema>;

export function JointVentureAgreementForm() {
  const { toast } = useToast();
  const form = useForm<JVData>({
    resolver: zodResolver(jvSchema),
    defaultValues: {
      partyA: "",
      partyB: "",
      projectSite: "",
      purpose: "Build-to-suit / shared facility",
      contributions: "",
      revenueShare: "",
      term: "",
    },
  });

  const onSubmit = (data: JVData) => {
    console.log("JointVenture", data);
    toast({ title: "JV agreement captured", description: "Joint venture terms saved." });
    form.reset();
  };

  return (
    <RealEstateFormShell title="Joint Venture Agreement Form" description="Build-to-suit or shared facility joint venture terms.">
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

          <FormField control={form.control} name="projectSite" render={({ field }) => (
            <FormItem>
              <FormLabel>Project site</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="purpose" render={({ field }) => (
            <FormItem>
              <FormLabel>Purpose</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="contributions" render={({ field }) => (
            <FormItem>
              <FormLabel>Contributions</FormLabel>
              <FormControl><Textarea placeholder="Land, capital, approvals, construction..." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="grid gap-4 md:grid-cols-2">
            <FormField control={form.control} name="revenueShare" render={({ field }) => (
              <FormItem>
                <FormLabel>Revenue / equity share</FormLabel>
                <FormControl><Input placeholder="e.g., 60/40" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="term" render={({ field }) => (
              <FormItem>
                <FormLabel>Term</FormLabel>
                <FormControl><Input placeholder="e.g., 5 years" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="flex gap-2">
            <Button type="submit">Save JV</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>Reset</Button>
          </div>
        </form>
      </Form>
    </RealEstateFormShell>
  );
}
