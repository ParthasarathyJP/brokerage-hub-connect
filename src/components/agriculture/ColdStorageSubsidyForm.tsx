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

const subsidySchemes = [
  "MIDH - Cold Storage",
  "PMKSY - Cold Chain",
  "RKVY - Post Harvest",
  "NHM - PHM",
  "State Horticulture Mission",
];

const formSchema = z.object({
  applicantName: z.string().min(2, "Applicant name is required"),
  applicantType: z.string().min(1, "Select applicant type"),
  organizationName: z.string().min(2, "Organization name required"),
  registrationNumber: z.string().min(1, "Registration number required"),
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  gstNumber: z.string().min(15, "Valid GST number required"),
  aadhaarNumber: z.string().regex(/^[0-9]{12}$/, "Valid 12-digit Aadhaar required"),
  
  address: z.string().min(10, "Complete address required"),
  district: z.string().min(2, "District is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().regex(/^[0-9]{6}$/, "Invalid pincode"),
  contactNumber: z.string().regex(/^[0-9]{10}$/, "Valid 10-digit mobile required"),
  email: z.string().email("Valid email required"),
  
  subsidyScheme: z.string().min(1, "Select subsidy scheme"),
  projectType: z.string().min(1, "Select project type"),
  proposedCapacity: z.string().min(1, "Proposed capacity required"),
  estimatedCost: z.string().min(1, "Estimated cost required"),
  subsidyRequested: z.string().min(1, "Subsidy amount required"),
  applicantContribution: z.string().min(1, "Applicant contribution required"),
  bankLoan: z.string().optional(),
  
  projectLocation: z.string().min(10, "Project location required"),
  landOwnership: z.string().min(1, "Select land ownership"),
  landArea: z.string().min(1, "Land area required"),
  
  commodityFocus: z.string().min(2, "Commodity focus required"),
  expectedEmployment: z.string().min(1, "Expected employment required"),
  beneficiaryFarmers: z.string().min(1, "Number of beneficiary farmers required"),
  
  bankName: z.string().min(2, "Bank name required"),
  branchName: z.string().min(2, "Branch name required"),
  accountNumber: z.string().min(8, "Valid account number required"),
  ifscCode: z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code"),
  
  dpReport: z.boolean(),
  landDocuments: z.boolean(),
  quotations: z.boolean(),
  bankCommitment: z.boolean(),
  
  declaration: z.boolean().refine(val => val === true, "You must accept the declaration"),
});

const ColdStorageSubsidyForm = () => {
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
      aadhaarNumber: "",
      address: "",
      district: "",
      state: "",
      pincode: "",
      contactNumber: "",
      email: "",
      subsidyScheme: "",
      projectType: "",
      proposedCapacity: "",
      estimatedCost: "",
      subsidyRequested: "",
      applicantContribution: "",
      bankLoan: "",
      projectLocation: "",
      landOwnership: "",
      landArea: "",
      commodityFocus: "",
      expectedEmployment: "",
      beneficiaryFarmers: "",
      bankName: "",
      branchName: "",
      accountNumber: "",
      ifscCode: "",
      dpReport: false,
      landDocuments: false,
      quotations: false,
      bankCommitment: false,
      declaration: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Application Submitted",
      description: "Your cold storage subsidy application has been submitted to NHB.",
    });
    form.reset();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Cold Storage Subsidy Application Form</CardTitle>
        <CardDescription>
          Apply for financial assistance under NHB schemes for cold storage setup
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
                      <FormLabel>Applicant Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="individual">Individual Farmer</SelectItem>
                          <SelectItem value="fpo">FPO/FPC</SelectItem>
                          <SelectItem value="cooperative">Cooperative Society</SelectItem>
                          <SelectItem value="shg">Self Help Group</SelectItem>
                          <SelectItem value="company">Private Company</SelectItem>
                          <SelectItem value="partnership">Partnership Firm</SelectItem>
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
                        <Input placeholder="Company/FPO/Cooperative name" {...field} />
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
                        <Input placeholder="Organization registration" {...field} />
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
                        <Input placeholder="GST registration" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="aadhaarNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aadhaar Number</FormLabel>
                      <FormControl>
                        <Input placeholder="12-digit Aadhaar" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Correspondence Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Complete address" {...field} />
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
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit mobile" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Project Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="subsidyScheme"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subsidy Scheme</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select scheme" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {subsidySchemes.map((scheme) => (
                            <SelectItem key={scheme} value={scheme.toLowerCase().replace(/\s+/g, "-")}>
                              {scheme}
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
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="new">New Cold Storage</SelectItem>
                          <SelectItem value="expansion">Expansion of Existing</SelectItem>
                          <SelectItem value="modernization">Modernization</SelectItem>
                          <SelectItem value="ca-storage">Controlled Atmosphere Storage</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="proposedCapacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Proposed Capacity (MT)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Storage capacity" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="estimatedCost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Project Cost (₹ Lakhs)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Total project cost" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subsidyRequested"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subsidy Requested (₹ Lakhs)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Subsidy amount" {...field} />
                      </FormControl>
                      <FormDescription>Maximum 35-50% of project cost as per scheme</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="applicantContribution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Applicant's Contribution (₹ Lakhs)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Own contribution" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bankLoan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bank Loan (₹ Lakhs) - Optional</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Loan amount" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Land Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Land & Location Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="projectLocation"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Project Location</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Detailed location of proposed cold storage" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="landOwnership"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Land Ownership</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select ownership" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="owned">Owned</SelectItem>
                          <SelectItem value="leased">Leased (min 15 years)</SelectItem>
                          <SelectItem value="government-allotted">Government Allotted</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="landArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Land Area (sq. meters)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Total land area" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Impact Assessment */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Impact Assessment</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="commodityFocus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Commodity Focus</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Potato, Apple, Onion" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expectedEmployment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expected Employment</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Direct jobs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="beneficiaryFarmers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Beneficiary Farmers</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Farmers to benefit" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Bank Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Bank Account Details (for subsidy disbursement)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="bankName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bank Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Bank name" {...field} />
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
                        <Input placeholder="Branch" {...field} />
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
                        <Input placeholder="Account number" {...field} />
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

            {/* Documents Checklist */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Documents Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="dpReport"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Detailed Project Report (DPR) Attached</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="landDocuments"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Land Documents Attached</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quotations"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Equipment Quotations Attached</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bankCommitment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Bank Loan Commitment Letter (if applicable)</FormLabel>
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
                      I hereby declare that all information provided is true and correct. I have not availed subsidy for the same purpose from any other government scheme. I agree to abide by all terms and conditions of the subsidy scheme.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Submit Application</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ColdStorageSubsidyForm;
