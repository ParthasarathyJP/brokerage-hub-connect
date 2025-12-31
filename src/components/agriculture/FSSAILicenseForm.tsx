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

const licenseTypes = [
  { value: "basic", label: "Basic Registration (Turnover < ₹12 Lakhs)" },
  { value: "state", label: "State License (Turnover ₹12-20 Crore)" },
  { value: "central", label: "Central License (Turnover > ₹20 Crore)" },
];

const foodCategories = [
  "Cereals and Cereal Products",
  "Pulses and Pulse Products",
  "Fruits and Vegetables",
  "Spices and Condiments",
  "Oilseeds and Fats",
  "Sugar and Confectionery",
  "Dairy Products",
  "Other Food Products",
];

const formSchema = z.object({
  licenseType: z.string().min(1, "Select license type"),
  applicationType: z.string().min(1, "Select application type"),
  
  businessName: z.string().min(2, "Business name is required"),
  businessType: z.string().min(1, "Select business type"),
  registrationNumber: z.string().min(1, "Registration number required"),
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  gstNumber: z.string().min(15, "Valid GST number required"),
  
  ownerName: z.string().min(2, "Owner name is required"),
  designation: z.string().min(2, "Designation is required"),
  aadhaarNumber: z.string().regex(/^[0-9]{12}$/, "Valid 12-digit Aadhaar required"),
  contactNumber: z.string().regex(/^[0-9]{10}$/, "Valid 10-digit mobile required"),
  email: z.string().email("Valid email required"),
  
  premiseAddress: z.string().min(10, "Complete address required"),
  district: z.string().min(2, "District is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().regex(/^[0-9]{6}$/, "Invalid pincode"),
  
  foodCategory: z.string().min(1, "Select food category"),
  productDetails: z.string().min(10, "Product details required"),
  storageCapacity: z.string().min(1, "Storage capacity required"),
  annualTurnover: z.string().min(1, "Annual turnover required"),
  
  waterSource: z.string().min(1, "Select water source"),
  waterTestReport: z.boolean(),
  wasteDisposal: z.string().min(1, "Select waste disposal method"),
  pestControl: z.boolean(),
  
  qualifiedPersonName: z.string().optional(),
  qualifiedPersonQualification: z.string().optional(),
  
  hasExistingLicense: z.boolean(),
  existingLicenseNumber: z.string().optional(),
  
  declaration: z.boolean().refine(val => val === true, "You must accept the declaration"),
});

const FSSAILicenseForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      licenseType: "",
      applicationType: "",
      businessName: "",
      businessType: "",
      registrationNumber: "",
      panNumber: "",
      gstNumber: "",
      ownerName: "",
      designation: "",
      aadhaarNumber: "",
      contactNumber: "",
      email: "",
      premiseAddress: "",
      district: "",
      state: "",
      pincode: "",
      foodCategory: "",
      productDetails: "",
      storageCapacity: "",
      annualTurnover: "",
      waterSource: "",
      waterTestReport: false,
      wasteDisposal: "",
      pestControl: false,
      qualifiedPersonName: "",
      qualifiedPersonQualification: "",
      hasExistingLicense: false,
      existingLicenseNumber: "",
      declaration: false,
    },
  });

  const watchHasLicense = form.watch("hasExistingLicense");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Application Submitted",
      description: "Your FSSAI license application has been submitted.",
    });
    form.reset();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>FSSAI License Application Form</CardTitle>
        <CardDescription>
          Apply for Food Safety and Standards Authority of India (FSSAI) license for storing consumable agricultural produce
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* License Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">License Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="licenseType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>License Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select license type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {licenseTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
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
                  name="applicationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Application Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="new">New License</SelectItem>
                          <SelectItem value="renewal">Renewal</SelectItem>
                          <SelectItem value="modification">Modification</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business/Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Legal business name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="proprietorship">Proprietorship</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="private-limited">Private Limited</SelectItem>
                          <SelectItem value="public-limited">Public Limited</SelectItem>
                          <SelectItem value="cooperative">Cooperative</SelectItem>
                          <SelectItem value="trust">Trust/Society</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="registrationNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Registration Number</FormLabel>
                      <FormControl>
                        <Input placeholder="CIN/Registration number" {...field} />
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
              </div>
            </div>

            {/* Owner/Authorized Person */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Owner/Authorized Person Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="ownerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Owner/Director name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Designation</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Proprietor, Director" {...field} />
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

            {/* Premise Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Premise Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="premiseAddress"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Premise Address (Storage Location)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Complete address of storage facility" {...field} />
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

            {/* Food Business Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Food Business Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="foodCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Food Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {foodCategories.map((category) => (
                            <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                              {category}
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
                  name="storageCapacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Storage Capacity (MT)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Total capacity" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productDetails"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Product Details</FormLabel>
                      <FormControl>
                        <Textarea placeholder="List of food products to be stored (e.g., Rice, Wheat, Pulses)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="annualTurnover"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expected Annual Turnover (₹ Lakhs)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Turnover" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Hygiene & Safety */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Hygiene & Safety Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="waterSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Water Source</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="municipal">Municipal Supply</SelectItem>
                          <SelectItem value="borewell">Borewell</SelectItem>
                          <SelectItem value="packaged">Packaged Water</SelectItem>
                          <SelectItem value="tanker">Tanker Supply</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="wasteDisposal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Waste Disposal Method</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="municipal">Municipal Collection</SelectItem>
                          <SelectItem value="private">Private Agency</SelectItem>
                          <SelectItem value="biogas">Biogas Plant</SelectItem>
                          <SelectItem value="composting">Composting</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="waterTestReport"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Water Test Report Available</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pestControl"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Pest Control Arrangement in Place</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Qualified Person */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Food Safety Supervisor (for State/Central License)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="qualifiedPersonName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Supervisor name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="qualifiedPersonQualification"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qualification (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., B.Sc Food Technology" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Existing License */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Existing License (if any)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="hasExistingLicense"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>I have an existing FSSAI license</FormLabel>
                    </FormItem>
                  )}
                />
                {watchHasLicense && (
                  <FormField
                    control={form.control}
                    name="existingLicenseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Existing License Number</FormLabel>
                        <FormControl>
                          <Input placeholder="14-digit license number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                      I declare that the information provided is true and complete. I shall abide by all provisions of the Food Safety and Standards Act, 2006 and rules/regulations made thereunder.
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

export default FSSAILicenseForm;
