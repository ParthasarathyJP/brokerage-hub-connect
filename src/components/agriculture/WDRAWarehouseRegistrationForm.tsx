import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const warehouseTypes = [
  "General Warehouse",
  "Cold Storage",
  "Specialized Warehouse",
  "Multi-commodity Warehouse",
];

const formSchema = z.object({
  applicantName: z.string().min(2, "Applicant name must be at least 2 characters"),
  applicantType: z.string().min(1, "Please select applicant type"),
  organizationName: z.string().min(2, "Organization name is required"),
  registrationNumber: z.string().min(1, "Registration number is required"),
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  gstNumber: z.string().min(15, "Valid GST number required"),
  
  warehouseName: z.string().min(2, "Warehouse name is required"),
  warehouseType: z.string().min(1, "Please select warehouse type"),
  warehouseAddress: z.string().min(10, "Complete address required"),
  district: z.string().min(2, "District is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().regex(/^[0-9]{6}$/, "Invalid pincode"),
  
  totalCapacity: z.string().min(1, "Total capacity is required"),
  coveredArea: z.string().min(1, "Covered area is required"),
  openArea: z.string().optional(),
  commoditiesStored: z.string().min(2, "Specify commodities"),
  
  fireEquipment: z.boolean(),
  securityArrangement: z.boolean(),
  weightingEquipment: z.boolean(),
  gradeEquipment: z.boolean(),
  
  bankName: z.string().min(2, "Bank name required"),
  branchName: z.string().min(2, "Branch name required"),
  accountNumber: z.string().min(8, "Valid account number required"),
  ifscCode: z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code"),
  
  declaration: z.boolean().refine(val => val === true, "You must accept the declaration"),
});

const WDRAWarehouseRegistrationForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicantName: "",
      applicantType: "",
      organizationName: "",
      registrationNumber: "",
      panNumber: "",
      gstNumber: "",
      warehouseName: "",
      warehouseType: "",
      warehouseAddress: "",
      district: "",
      state: "",
      pincode: "",
      totalCapacity: "",
      coveredArea: "",
      openArea: "",
      commoditiesStored: "",
      fireEquipment: false,
      securityArrangement: false,
      weightingEquipment: false,
      gradeEquipment: false,
      bankName: "",
      branchName: "",
      accountNumber: "",
      ifscCode: "",
      declaration: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Registration Submitted",
      description: "Your WDRA warehouse registration has been submitted for review.",
    });
    form.reset();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>WDRA Warehouse Registration Form</CardTitle>
        <CardDescription>
          Register your warehouse/cold storage under the Warehousing Development and Regulatory Authority (WDRA)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Applicant Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Applicant Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="applicantName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Applicant Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="applicantType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Applicant Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="individual">Individual</SelectItem>
                          <SelectItem value="partnership">Partnership Firm</SelectItem>
                          <SelectItem value="company">Private/Public Company</SelectItem>
                          <SelectItem value="cooperative">Cooperative Society</SelectItem>
                          <SelectItem value="government">Government Entity</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="organizationName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Organization/Company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="registrationNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Company/Firm registration number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="panNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PAN Number</FormLabel>
                      <FormControl>
                        <Input placeholder="ABCDE1234F" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gstNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GST Number</FormLabel>
                      <FormControl>
                        <Input placeholder="GST registration number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Warehouse Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Warehouse Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="warehouseName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Warehouse Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name of warehouse" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="warehouseType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Warehouse Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {warehouseTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                              {type}
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
                  name="warehouseAddress"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Warehouse Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Complete address with landmarks" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="district"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>District</FormLabel>
                      <FormControl>
                        <Input placeholder="District" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input placeholder="State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pincode</FormLabel>
                      <FormControl>
                        <Input placeholder="6-digit pincode" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Capacity Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Capacity & Storage Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="totalCapacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Storage Capacity (MT)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Capacity in metric tons" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="coveredArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Covered Area (sq. ft.)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Covered storage area" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="openArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Open Area (sq. ft.) - Optional</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Open storage area" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="commoditiesStored"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Commodities to be Stored</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Rice, Wheat, Pulses" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Infrastructure */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Infrastructure & Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fireEquipment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Fire Fighting Equipment Available</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="securityArrangement"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Security Arrangement Available</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weightingEquipment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Weighing Equipment Available</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gradeEquipment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Grading/Testing Equipment Available</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Bank Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Bank Account Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="bankName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bank Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name of bank" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="branchName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Branch Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Branch name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="accountNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Bank account number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ifscCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IFSC Code</FormLabel>
                      <FormControl>
                        <Input placeholder="IFSC code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Declaration */}
            <FormField
              control={form.control}
              name="declaration"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Declaration</FormLabel>
                    <FormDescription>
                      I hereby declare that the information provided is true and correct. I agree to comply with all WDRA regulations and guidelines.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Submit Registration</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WDRAWarehouseRegistrationForm;
