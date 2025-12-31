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

const loanPurposes = [
  "Working Capital",
  "Agricultural Operations",
  "Business Expansion",
  "Debt Consolidation",
  "Equipment Purchase",
  "Marketing & Trading",
];

const formSchema = z.object({
  applicantName: z.string().min(2, "Applicant name is required"),
  applicantType: z.string().min(1, "Select applicant type"),
  fatherSpouseName: z.string().min(2, "Father/Spouse name required"),
  dateOfBirth: z.string().min(1, "Date of birth required"),
  aadhaarNumber: z.string().regex(/^[0-9]{12}$/, "Valid 12-digit Aadhaar required"),
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  
  address: z.string().min(10, "Complete address required"),
  district: z.string().min(2, "District required"),
  state: z.string().min(2, "State required"),
  pincode: z.string().regex(/^[0-9]{6}$/, "Invalid pincode"),
  contactNumber: z.string().regex(/^[0-9]{10}$/, "Valid 10-digit mobile required"),
  email: z.string().email("Valid email required"),
  
  warehouseReceiptNo: z.string().min(1, "Warehouse receipt number required"),
  warehouseName: z.string().min(2, "Warehouse name required"),
  warehouseWdraNo: z.string().min(1, "WDRA registration number required"),
  depositDate: z.string().min(1, "Deposit date required"),
  
  commodityName: z.string().min(2, "Commodity name required"),
  commodityGrade: z.string().min(1, "Grade required"),
  quantity: z.string().min(1, "Quantity required"),
  unitOfMeasure: z.string().min(1, "Unit required"),
  currentMarketPrice: z.string().min(1, "Market price required"),
  totalCommodityValue: z.string().min(1, "Total value required"),
  
  loanAmount: z.string().min(1, "Loan amount required"),
  loanPurpose: z.string().min(1, "Select loan purpose"),
  loanTenure: z.string().min(1, "Loan tenure required"),
  repaymentMode: z.string().min(1, "Select repayment mode"),
  
  preferredBank: z.string().min(2, "Preferred bank required"),
  existingBankAccount: z.string().min(1, "Select option"),
  accountNumber: z.string().optional(),
  ifscCode: z.string().optional(),
  
  landHolding: z.string().optional(),
  annualIncome: z.string().min(1, "Annual income required"),
  existingLoans: z.boolean(),
  existingLoanDetails: z.string().optional(),
  
  insuranceCoverage: z.boolean(),
  insuranceCompany: z.string().optional(),
  insurancePolicyNo: z.string().optional(),
  
  collateralOffered: z.string().optional(),
  guarantorName: z.string().optional(),
  guarantorContact: z.string().optional(),
  
  declaration: z.boolean().refine(val => val === true, "You must accept the declaration"),
  consentToVerify: z.boolean().refine(val => val === true, "You must provide consent"),
});

const WarehouseReceiptFinancingForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicantName: "",
      applicantType: "",
      fatherSpouseName: "",
      dateOfBirth: "",
      aadhaarNumber: "",
      panNumber: "",
      address: "",
      district: "",
      state: "",
      pincode: "",
      contactNumber: "",
      email: "",
      warehouseReceiptNo: "",
      warehouseName: "",
      warehouseWdraNo: "",
      depositDate: "",
      commodityName: "",
      commodityGrade: "",
      quantity: "",
      unitOfMeasure: "",
      currentMarketPrice: "",
      totalCommodityValue: "",
      loanAmount: "",
      loanPurpose: "",
      loanTenure: "",
      repaymentMode: "",
      preferredBank: "",
      existingBankAccount: "",
      accountNumber: "",
      ifscCode: "",
      landHolding: "",
      annualIncome: "",
      existingLoans: false,
      existingLoanDetails: "",
      insuranceCoverage: false,
      insuranceCompany: "",
      insurancePolicyNo: "",
      collateralOffered: "",
      guarantorName: "",
      guarantorContact: "",
      declaration: false,
      consentToVerify: false,
    },
  });

  const watchExistingLoans = form.watch("existingLoans");
  const watchInsurance = form.watch("insuranceCoverage");
  const watchExistingAccount = form.watch("existingBankAccount");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Financing Request Submitted",
      description: "Your warehouse receipt financing request has been submitted to the bank.",
    });
    form.reset();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Warehouse Receipt Financing Request</CardTitle>
        <CardDescription>
          Apply for loans against stored inventory using your Negotiable Warehouse Receipt (NWR) - Integrated with partner banks
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
                      <FormLabel>Full Name (as per Aadhaar)</FormLabel>
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
                          <SelectItem value="farmer">Farmer</SelectItem>
                          <SelectItem value="trader">Trader/Merchant</SelectItem>
                          <SelectItem value="aggregator">Aggregator</SelectItem>
                          <SelectItem value="fpo">FPO/FPC</SelectItem>
                          <SelectItem value="processor">Processor</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fatherSpouseName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Father's/Spouse Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Father/Spouse name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
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
                      <FormLabel>Permanent Address</FormLabel>
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
                      <FormLabel>Mobile Number</FormLabel>
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

            {/* Warehouse Receipt Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Warehouse Receipt Details (Collateral)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="warehouseReceiptNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NWR/Warehouse Receipt Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Receipt number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="warehouseName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Warehouse Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Warehouse name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="warehouseWdraNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WDRA Registration Number</FormLabel>
                      <FormControl>
                        <Input placeholder="WDRA number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="depositDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Deposit</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Commodity Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Commodity Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="commodityName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Commodity Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Wheat, Rice" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="commodityGrade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade/Quality</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="grade-a">Grade A</SelectItem>
                          <SelectItem value="grade-b">Grade B</SelectItem>
                          <SelectItem value="faq">FAQ</SelectItem>
                          <SelectItem value="standard">Standard</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Amount" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="unitOfMeasure"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unit</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mt">Metric Tons</SelectItem>
                          <SelectItem value="quintals">Quintals</SelectItem>
                          <SelectItem value="kg">Kilograms</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currentMarketPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Market Price (₹/Quintal)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Price per quintal" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="totalCommodityValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Commodity Value (₹)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Total value" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Loan Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Loan Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="loanAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Loan Amount Required (₹)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Loan amount" {...field} />
                      </FormControl>
                      <FormDescription>Up to 70-75% of commodity value</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="loanPurpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purpose of Loan</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select purpose" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {loanPurposes.map((purpose) => (
                            <SelectItem key={purpose} value={purpose.toLowerCase().replace(/\s+/g, "-")}>
                              {purpose}
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
                  name="loanTenure"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Loan Tenure (Months)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select tenure" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="3">3 Months</SelectItem>
                          <SelectItem value="6">6 Months</SelectItem>
                          <SelectItem value="9">9 Months</SelectItem>
                          <SelectItem value="12">12 Months</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="repaymentMode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Repayment Mode</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select mode" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bullet">Bullet Payment (at maturity)</SelectItem>
                          <SelectItem value="monthly">Monthly Interest + Principal at End</SelectItem>
                          <SelectItem value="emi">Equated Monthly Installments</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
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
                  name="preferredBank"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Bank</FormLabel>
                      <FormControl>
                        <Input placeholder="Bank name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="existingBankAccount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Existing Account with Preferred Bank?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {watchExistingAccount === "yes" && (
                  <>
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
                  </>
                )}
              </div>
            </div>

            {/* Financial Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Financial Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="landHolding"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Land Holding (Acres) - if farmer</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.01" placeholder="Total land" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="annualIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Annual Income (₹)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Total annual income" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="existingLoans"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>I have existing loans</FormLabel>
                    </FormItem>
                  )}
                />
                {watchExistingLoans && (
                  <FormField
                    control={form.control}
                    name="existingLoanDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Existing Loan Details</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Bank name, loan type, outstanding amount" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>

            {/* Insurance */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Commodity Insurance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="insuranceCoverage"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Commodity is insured</FormLabel>
                    </FormItem>
                  )}
                />
                {watchInsurance && (
                  <>
                    <FormField
                      control={form.control}
                      name="insuranceCompany"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Insurance Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="insurancePolicyNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Policy Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Policy number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </div>
            </div>

            {/* Additional Security */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Additional Security (Optional)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="collateralOffered"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Collateral</FormLabel>
                      <FormControl>
                        <Input placeholder="If any" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="guarantorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Guarantor Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Guarantor name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="guarantorContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Guarantor Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit mobile" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Declarations */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Declarations & Consent</h3>
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
                        I declare that the information provided is true and accurate. The warehouse receipt pledged is genuine and free from any prior encumbrance. I agree to all terms and conditions of the financing facility.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="consentToVerify"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Consent for Verification</FormLabel>
                      <FormDescription>
                        I authorize the bank to verify my KYC documents, credit history (CIBIL), and warehouse receipt details with the respective authorities.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">Submit Financing Request</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WarehouseReceiptFinancingForm;
