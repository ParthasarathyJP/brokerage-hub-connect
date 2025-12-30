import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  verificationId: z.string().min(1, "Verification ID is required"),
  verificationDate: z.string().min(1, "Verification date is required"),
  supplierName: z.string().min(1, "Supplier name is required"),
  supplierCode: z.string().optional(),
  materialCategory: z.string().min(1, "Material category is required"),
  coaNumber: z.string().optional(),
  coaDate: z.string().optional(),
  sdsNumber: z.string().optional(),
  sdsDate: z.string().optional(),
  gmpCertificate: z.boolean().default(false),
  gmpNumber: z.string().optional(),
  gmpExpiry: z.string().optional(),
  isoCertified: z.boolean().default(false),
  isoNumber: z.string().optional(),
  isoExpiry: z.string().optional(),
  fssaiLicense: z.boolean().default(false),
  fssaiNumber: z.string().optional(),
  environmentalCompliance: z.boolean().default(false),
  qualityAuditPassed: z.boolean().default(false),
  lastAuditDate: z.string().optional(),
  verificationStatus: z.string().min(1, "Status is required"),
  verifiedBy: z.string().min(1, "Verifier name is required"),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const materialCategories = [
  { value: "metals", label: "Metals" },
  { value: "minerals", label: "Minerals" },
  { value: "chemicals", label: "Chemicals" },
  { value: "agricultural", label: "Agricultural Products" },
  { value: "fibers", label: "Natural Fibers" },
  { value: "energy", label: "Energy-related" },
];

const SupplierVerificationForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      verificationId: `SVD-${Date.now().toString().slice(-6)}`,
      verificationDate: new Date().toISOString().split("T")[0],
      supplierName: "",
      supplierCode: "",
      materialCategory: "",
      coaNumber: "",
      coaDate: "",
      sdsNumber: "",
      sdsDate: "",
      gmpCertificate: false,
      gmpNumber: "",
      gmpExpiry: "",
      isoCertified: false,
      isoNumber: "",
      isoExpiry: "",
      fssaiLicense: false,
      fssaiNumber: "",
      environmentalCompliance: false,
      qualityAuditPassed: false,
      lastAuditDate: "",
      verificationStatus: "",
      verifiedBy: "",
      remarks: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Supplier Verification:", data);
    toast({
      title: "Verification Submitted",
      description: `Supplier verification ${data.verificationId} has been recorded.`,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Verification Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="verificationId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification ID</FormLabel>
                  <FormControl>
                    <Input {...field} readOnly className="bg-muted" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="verificationDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="materialCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Material Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {materialCategories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="supplierName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter supplier name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="supplierCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter supplier code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Document Verification</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="coaNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Certificate of Analysis (COA) Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter COA number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="coaDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>COA Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sdsNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Safety Data Sheet (SDS) Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter SDS number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sdsDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SDS Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Certifications & Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="gmpCertificate"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>GMP Certified</FormLabel>
                      <FormDescription>Good Manufacturing Practice</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gmpNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GMP Certificate Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter GMP number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gmpExpiry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GMP Expiry Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="isoCertified"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>ISO Certified</FormLabel>
                      <FormDescription>ISO 9001/14001/22000</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isoNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISO Certificate Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter ISO number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isoExpiry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISO Expiry Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="fssaiLicense"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>FSSAI License</FormLabel>
                      <FormDescription>Food safety compliance</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fssaiNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FSSAI License Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter FSSAI number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="environmentalCompliance"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Environmental Compliance</FormLabel>
                      <FormDescription>Meets environmental regulations</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="qualityAuditPassed"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Quality Audit Passed</FormLabel>
                      <FormDescription>Last quality audit cleared</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="lastAuditDate"
              render={({ field }) => (
                <FormItem className="max-w-xs">
                  <FormLabel>Last Audit Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verification Outcome</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="verificationStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="conditionalApproval">Conditional Approval</SelectItem>
                      <SelectItem value="pending">Pending Review</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="verifiedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verified By</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter verifier name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Remarks / Observations</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter any observations or notes" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Submit Verification</Button>
        </div>
      </form>
    </Form>
  );
};

export default SupplierVerificationForm;
