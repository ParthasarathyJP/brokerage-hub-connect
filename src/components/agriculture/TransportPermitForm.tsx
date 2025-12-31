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

const vehicleTypes = [
  "Light Commercial Vehicle (LCV)",
  "Medium Commercial Vehicle",
  "Heavy Commercial Vehicle",
  "Multi-Axle Vehicle",
  "Refrigerated Van",
  "Tanker",
];

const formSchema = z.object({
  applicantName: z.string().min(2, "Applicant name is required"),
  applicantType: z.string().min(1, "Select applicant type"),
  companyName: z.string().min(2, "Company name required"),
  contactNumber: z.string().regex(/^[0-9]{10}$/, "Valid 10-digit mobile required"),
  email: z.string().email("Valid email required"),
  address: z.string().min(10, "Complete address required"),
  
  warehouseId: z.string().min(1, "Warehouse ID required"),
  warehouseName: z.string().min(2, "Warehouse name required"),
  warehouseAddress: z.string().min(10, "Warehouse address required"),
  warehouseContact: z.string().regex(/^[0-9]{10}$/, "Valid contact required"),
  
  commodityName: z.string().min(2, "Commodity name required"),
  commodityType: z.string().min(1, "Select commodity type"),
  quantity: z.string().min(1, "Quantity required"),
  unitOfMeasure: z.string().min(1, "Unit required"),
  packagingType: z.string().min(1, "Packaging type required"),
  numberOfPackages: z.string().min(1, "Number of packages required"),
  
  warehouseReceiptNo: z.string().optional(),
  invoiceNumber: z.string().min(1, "Invoice number required"),
  invoiceValue: z.string().min(1, "Invoice value required"),
  
  originAddress: z.string().min(10, "Origin address required"),
  originDistrict: z.string().min(2, "Origin district required"),
  originState: z.string().min(2, "Origin state required"),
  
  destinationAddress: z.string().min(10, "Destination address required"),
  destinationDistrict: z.string().min(2, "Destination district required"),
  destinationState: z.string().min(2, "Destination state required"),
  
  vehicleType: z.string().min(1, "Select vehicle type"),
  vehicleNumber: z.string().min(4, "Vehicle number required"),
  driverName: z.string().min(2, "Driver name required"),
  driverLicense: z.string().min(10, "Driver license number required"),
  driverContact: z.string().regex(/^[0-9]{10}$/, "Valid contact required"),
  
  transportStartDate: z.string().min(1, "Start date required"),
  transportStartTime: z.string().min(1, "Start time required"),
  estimatedArrival: z.string().min(1, "Estimated arrival required"),
  routeDescription: z.string().optional(),
  
  gstEwaybill: z.string().optional(),
  permitRequired: z.boolean(),
  
  declaration: z.boolean().refine(val => val === true, "You must accept the declaration"),
});

const TransportPermitForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicantName: "",
      applicantType: "",
      companyName: "",
      contactNumber: "",
      email: "",
      address: "",
      warehouseId: "",
      warehouseName: "",
      warehouseAddress: "",
      warehouseContact: "",
      commodityName: "",
      commodityType: "",
      quantity: "",
      unitOfMeasure: "",
      packagingType: "",
      numberOfPackages: "",
      warehouseReceiptNo: "",
      invoiceNumber: "",
      invoiceValue: "",
      originAddress: "",
      originDistrict: "",
      originState: "",
      destinationAddress: "",
      destinationDistrict: "",
      destinationState: "",
      vehicleType: "",
      vehicleNumber: "",
      driverName: "",
      driverLicense: "",
      driverContact: "",
      transportStartDate: "",
      transportStartTime: "",
      estimatedArrival: "",
      routeDescription: "",
      gstEwaybill: "",
      permitRequired: false,
      declaration: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Permit Generated",
      description: "Transport permit has been generated successfully.",
    });
    form.reset();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Transport Permit Form</CardTitle>
        <CardDescription>
          Authorize movement of goods from storage to market - State Transport Authority
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
                          <SelectItem value="farmer">Farmer</SelectItem>
                          <SelectItem value="trader">Trader</SelectItem>
                          <SelectItem value="processor">Processor</SelectItem>
                          <SelectItem value="exporter">Exporter</SelectItem>
                          <SelectItem value="warehouse">Warehouse Operator</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company/Firm Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Business name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Business address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Warehouse Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Source Warehouse Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <Input placeholder="Warehouse name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="warehouseAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Warehouse Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Full address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="warehouseContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Warehouse Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="Contact number" {...field} />
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
                          <SelectItem value="fruits">Fruits</SelectItem>
                          <SelectItem value="vegetables">Vegetables</SelectItem>
                          <SelectItem value="spices">Spices</SelectItem>
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
                  name="packagingType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Packaging Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="jute-bags">Jute Bags</SelectItem>
                          <SelectItem value="hdpe-bags">HDPE Bags</SelectItem>
                          <SelectItem value="crates">Crates</SelectItem>
                          <SelectItem value="cartons">Cartons</SelectItem>
                          <SelectItem value="bulk">Bulk/Loose</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numberOfPackages"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Packages</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Count" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Documentation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Documentation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="warehouseReceiptNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Warehouse Receipt No. (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="NWR number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="invoiceNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Invoice Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Invoice/Bill number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="invoiceValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Invoice Value (₹)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Total value" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Origin Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Origin (Dispatch Point)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="originAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Origin address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="originDistrict"
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
                  name="originState"
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
              </div>
            </div>

            {/* Destination Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Destination (Delivery Point)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="destinationAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Destination address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="destinationDistrict"
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
                  name="destinationState"
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
              </div>
            </div>

            {/* Vehicle & Driver Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Vehicle & Driver Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="vehicleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {vehicleTypes.map((type) => (
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
                  name="vehicleNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Registration Number</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., MH12AB1234" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="driverName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Driver Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Driver's full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="driverLicense"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Driver License Number</FormLabel>
                      <FormControl>
                        <Input placeholder="DL number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="driverContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Driver Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit mobile" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Transport Schedule */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Transport Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="transportStartDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dispatch Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="transportStartTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dispatch Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="estimatedArrival"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Arrival</FormLabel>
                      <FormControl>
                        <Input type="datetime-local" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="routeDescription"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2 lg:col-span-3">
                      <FormLabel>Route Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Major highways/checkpoints on route" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* E-Way Bill */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">GST E-Way Bill</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="gstEwaybill"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Way Bill Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="E-Way Bill number if applicable" {...field} />
                      </FormControl>
                      <FormDescription>Required for goods value exceeding ₹50,000</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permitRequired"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Inter-State Permit Required</FormLabel>
                        <FormDescription>Check if crossing state borders</FormDescription>
                      </div>
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
                      I declare that the goods being transported are legally procured and all documentation is genuine. I will comply with all transport regulations and checkpoints.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Generate Transport Permit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TransportPermitForm;
