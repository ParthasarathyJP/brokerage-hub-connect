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

const commodityGrades = ["Grade A", "Grade B", "Grade C", "FAQ (Fair Average Quality)", "Standard"];

const formSchema = z.object({
  warehouseId: z.string().min(1, "Warehouse ID is required"),
  warehouseName: z.string().min(2, "Warehouse name is required"),
  wdraRegistrationNo: z.string().min(1, "WDRA registration number is required"),
  
  depositorName: z.string().min(2, "Depositor name is required"),
  depositorId: z.string().min(1, "Depositor ID is required"),
  depositorAddress: z.string().min(10, "Complete address required"),
  depositorContact: z.string().regex(/^[0-9]{10}$/, "Valid 10-digit mobile number required"),
  depositorPan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  
  commodityName: z.string().min(2, "Commodity name is required"),
  commodityType: z.string().min(1, "Commodity type is required"),
  commodityGrade: z.string().min(1, "Grade is required"),
  quantity: z.string().min(1, "Quantity is required"),
  unitOfMeasure: z.string().min(1, "Unit is required"),
  lotNumber: z.string().min(1, "Lot number is required"),
  
  depositDate: z.string().min(1, "Deposit date is required"),
  expectedWithdrawalDate: z.string().optional(),
  storageCharges: z.string().min(1, "Storage charges required"),
  insuranceValue: z.string().min(1, "Insurance value required"),
  
  qualityCertificateNo: z.string().min(1, "Quality certificate number required"),
  testingAgency: z.string().min(2, "Testing agency name required"),
  moistureContent: z.string().optional(),
  foreignMatter: z.string().optional(),
  
  negotiable: z.boolean(),
  pledgedToBank: z.boolean(),
  bankName: z.string().optional(),
  loanAmount: z.string().optional(),
  
  declaration: z.boolean().refine(val => val === true, "You must accept the declaration"),
});

const NegotiableWarehouseReceiptForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      warehouseId: "",
      warehouseName: "",
      wdraRegistrationNo: "",
      depositorName: "",
      depositorId: "",
      depositorAddress: "",
      depositorContact: "",
      depositorPan: "",
      commodityName: "",
      commodityType: "",
      commodityGrade: "",
      quantity: "",
      unitOfMeasure: "",
      lotNumber: "",
      depositDate: "",
      expectedWithdrawalDate: "",
      storageCharges: "",
      insuranceValue: "",
      qualityCertificateNo: "",
      testingAgency: "",
      moistureContent: "",
      foreignMatter: "",
      negotiable: true,
      pledgedToBank: false,
      bankName: "",
      loanAmount: "",
      declaration: false,
    },
  });

  const watchPledged = form.watch("pledgedToBank");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "NWR Issued",
      description: "Negotiable Warehouse Receipt has been generated successfully.",
    });
    form.reset();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Negotiable Warehouse Receipt (NWR) Form</CardTitle>
        <CardDescription>
          Issue electronic receipts for stored goods, facilitating trade and finance under WDRA regulations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Warehouse Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Warehouse Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="warehouseId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Warehouse ID</FormLabel>
                      <FormControl>
                        <Input placeholder="WH-XXXX" {...field} />
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
                        <Input placeholder="Name of warehouse" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="wdraRegistrationNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WDRA Registration No.</FormLabel>
                      <FormControl>
                        <Input placeholder="WDRA number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Depositor Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Depositor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="depositorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Depositor Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="depositorId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Depositor ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Unique depositor ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="depositorAddress"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Complete address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="depositorContact"
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
                  name="depositorPan"
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
                  name="commodityType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Commodity Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cereals">Cereals</SelectItem>
                          <SelectItem value="pulses">Pulses</SelectItem>
                          <SelectItem value="oilseeds">Oilseeds</SelectItem>
                          <SelectItem value="spices">Spices</SelectItem>
                          <SelectItem value="others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="commodityGrade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {commodityGrades.map((grade) => (
                            <SelectItem key={grade} value={grade.toLowerCase().replace(/\s+/g, "-")}>
                              {grade}
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
                      <FormLabel>Unit of Measure</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mt">Metric Tons (MT)</SelectItem>
                          <SelectItem value="quintals">Quintals</SelectItem>
                          <SelectItem value="kg">Kilograms</SelectItem>
                          <SelectItem value="bags">Bags</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lotNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lot Number</FormLabel>
                      <FormControl>
                        <Input placeholder="LOT-XXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Storage Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Storage Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="depositDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deposit Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expectedWithdrawalDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expected Withdrawal Date (Optional)</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="storageCharges"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Storage Charges (₹/MT/Month)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Charges" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="insuranceValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Insurance Value (₹)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Insured value" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Quality Parameters */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Quality Parameters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="qualityCertificateNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quality Certificate No.</FormLabel>
                      <FormControl>
                        <Input placeholder="Certificate number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="testingAgency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Testing Agency</FormLabel>
                      <FormControl>
                        <Input placeholder="Accredited testing agency" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="moistureContent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Moisture Content (%)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.1" placeholder="e.g., 12.5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="foreignMatter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Foreign Matter (%)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.1" placeholder="e.g., 0.5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Pledge Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Receipt Type & Pledge Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="negotiable"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Negotiable Receipt</FormLabel>
                        <FormDescription>Receipt can be transferred/traded</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pledgedToBank"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Pledged to Bank</FormLabel>
                        <FormDescription>Commodity pledged for loan</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                {watchPledged && (
                  <>
                    <FormField
                      control={form.control}
                      name="bankName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bank Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Pledgee bank name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="loanAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loan Amount (₹)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Loan amount" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
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
                      I confirm that the commodity details are accurate and the goods are free from any encumbrance except as declared above.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Issue Warehouse Receipt</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default NegotiableWarehouseReceiptForm;
