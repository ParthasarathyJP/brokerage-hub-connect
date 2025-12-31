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

const formSchema = z.object({
  unitName: z.string().min(2, "Unit name is required"),
  ownerName: z.string().min(2, "Owner name is required"),
  ownershipType: z.string().min(1, "Select ownership type"),
  registrationNumber: z.string().min(1, "Registration number required"),
  
  address: z.string().min(10, "Complete address required"),
  district: z.string().min(2, "District is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().regex(/^[0-9]{6}$/, "Invalid pincode"),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
  
  coldStorageType: z.string().min(1, "Select cold storage type"),
  storageCategory: z.string().min(1, "Select storage category"),
  totalCapacity: z.string().min(1, "Total capacity required"),
  usableCapacity: z.string().min(1, "Usable capacity required"),
  numberOfChambers: z.string().min(1, "Number of chambers required"),
  
  temperatureRangeMin: z.string().min(1, "Minimum temperature required"),
  temperatureRangeMax: z.string().min(1, "Maximum temperature required"),
  humidityControl: z.boolean(),
  controlledAtmosphere: z.boolean(),
  
  compressorType: z.string().min(1, "Compressor type required"),
  compressorCapacity: z.string().min(1, "Compressor capacity required"),
  refrigerant: z.string().min(1, "Refrigerant type required"),
  condenserType: z.string().min(1, "Condenser type required"),
  
  powerConnection: z.string().min(1, "Power connection required"),
  backupPower: z.boolean(),
  generatorCapacity: z.string().optional(),
  
  buildingType: z.string().min(1, "Building type required"),
  insulationType: z.string().min(1, "Insulation type required"),
  floorArea: z.string().min(1, "Floor area required"),
  buildingHeight: z.string().min(1, "Building height required"),
  
  loadingDocks: z.string().min(1, "Number of loading docks required"),
  anteChamber: z.boolean(),
  weighBridge: z.boolean(),
  sortingGrading: z.boolean(),
  packHouse: z.boolean(),
  
  yearOfEstablishment: z.string().min(4, "Year required"),
  lastRenovation: z.string().optional(),
  investmentCost: z.string().min(1, "Investment cost required"),
  annualRevenue: z.string().optional(),
  employeeCount: z.string().min(1, "Employee count required"),
  
  commoditiesStored: z.string().min(2, "Specify commodities"),
  peakSeasonMonths: z.string().min(1, "Peak season months required"),
  averageOccupancy: z.string().min(1, "Average occupancy required"),
  
  declaration: z.boolean().refine(val => val === true, "You must accept the declaration"),
});

const ColdStorageDataSheetForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unitName: "",
      ownerName: "",
      ownershipType: "",
      registrationNumber: "",
      address: "",
      district: "",
      state: "",
      pincode: "",
      latitude: "",
      longitude: "",
      coldStorageType: "",
      storageCategory: "",
      totalCapacity: "",
      usableCapacity: "",
      numberOfChambers: "",
      temperatureRangeMin: "",
      temperatureRangeMax: "",
      humidityControl: false,
      controlledAtmosphere: false,
      compressorType: "",
      compressorCapacity: "",
      refrigerant: "",
      condenserType: "",
      powerConnection: "",
      backupPower: false,
      generatorCapacity: "",
      buildingType: "",
      insulationType: "",
      floorArea: "",
      buildingHeight: "",
      loadingDocks: "",
      anteChamber: false,
      weighBridge: false,
      sortingGrading: false,
      packHouse: false,
      yearOfEstablishment: "",
      lastRenovation: "",
      investmentCost: "",
      annualRevenue: "",
      employeeCount: "",
      commoditiesStored: "",
      peakSeasonMonths: "",
      averageOccupancy: "",
      declaration: false,
    },
  });

  const watchBackupPower = form.watch("backupPower");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Data Sheet Submitted",
      description: "Your cold storage data sheet has been submitted to NHB.",
    });
    form.reset();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Basic Data Sheet for Cold Storage</CardTitle>
        <CardDescription>
          Capture infrastructure, capacity, and operational details for NHB subsidy eligibility
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="unitName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cold Storage Unit Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Unit name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ownerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Owner/Promoter Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Owner name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ownershipType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ownership Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="proprietorship">Proprietorship</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="private-company">Private Company</SelectItem>
                          <SelectItem value="cooperative">Cooperative</SelectItem>
                          <SelectItem value="fpo">FPO/FPC</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
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
                      <FormLabel>Registration Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Company/Firm registration" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Location Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Complete Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Full address with landmarks" {...field} />
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
                  name="latitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Latitude (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 28.6139" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Longitude (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 77.2090" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Storage Specifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Storage Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="coldStorageType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cold Storage Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="single-commodity">Single Commodity</SelectItem>
                          <SelectItem value="multi-commodity">Multi Commodity</SelectItem>
                          <SelectItem value="ca-storage">Controlled Atmosphere</SelectItem>
                          <SelectItem value="frozen-storage">Frozen Storage</SelectItem>
                          <SelectItem value="pre-cooling">Pre-cooling Unit</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="storageCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Storage Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="fruits">Fruits</SelectItem>
                          <SelectItem value="vegetables">Vegetables</SelectItem>
                          <SelectItem value="flowers">Flowers</SelectItem>
                          <SelectItem value="dairy">Dairy Products</SelectItem>
                          <SelectItem value="meat-fish">Meat & Fish</SelectItem>
                          <SelectItem value="seeds">Seeds</SelectItem>
                          <SelectItem value="mixed">Mixed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="totalCapacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Capacity (MT)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Total MT" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="usableCapacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Usable Capacity (MT)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Usable MT" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numberOfChambers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Chambers</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Chambers" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Temperature Control */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Temperature & Atmosphere Control</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <FormField
                  control={form.control}
                  name="temperatureRangeMin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Min Temperature (°C)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="-25" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="temperatureRangeMax"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Max Temperature (°C)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="15" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="humidityControl"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Humidity Control</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="controlledAtmosphere"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Controlled Atmosphere (CA)</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Refrigeration Equipment */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Refrigeration Equipment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="compressorType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Compressor Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="reciprocating">Reciprocating</SelectItem>
                          <SelectItem value="screw">Screw</SelectItem>
                          <SelectItem value="scroll">Scroll</SelectItem>
                          <SelectItem value="centrifugal">Centrifugal</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="compressorCapacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Compressor Capacity (TR)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Tons of refrigeration" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="refrigerant"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Refrigerant Used</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select refrigerant" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="r22">R-22</SelectItem>
                          <SelectItem value="r134a">R-134a</SelectItem>
                          <SelectItem value="r404a">R-404A</SelectItem>
                          <SelectItem value="r717">R-717 (Ammonia)</SelectItem>
                          <SelectItem value="r290">R-290 (Propane)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="condenserType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Condenser Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="air-cooled">Air Cooled</SelectItem>
                          <SelectItem value="water-cooled">Water Cooled</SelectItem>
                          <SelectItem value="evaporative">Evaporative</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Power Supply */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Power Supply</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="powerConnection"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Power Connection (KVA)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Sanctioned load" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="backupPower"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Backup Power Available</FormLabel>
                    </FormItem>
                  )}
                />
                {watchBackupPower && (
                  <FormField
                    control={form.control}
                    name="generatorCapacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Generator Capacity (KVA)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Generator capacity" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>

            {/* Building Infrastructure */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Building Infrastructure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="buildingType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Building Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="rcc">RCC Structure</SelectItem>
                          <SelectItem value="peb">Pre-Engineered Building</SelectItem>
                          <SelectItem value="puf-panels">PUF Panel Structure</SelectItem>
                          <SelectItem value="mixed">Mixed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="insulationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Insulation Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select insulation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="puf">PUF (Polyurethane Foam)</SelectItem>
                          <SelectItem value="eps">EPS (Thermocol)</SelectItem>
                          <SelectItem value="xps">XPS</SelectItem>
                          <SelectItem value="rockwool">Rock Wool</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="floorArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Floor Area (sq. ft.)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Total floor area" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="buildingHeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Building Height (meters)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.1" placeholder="Height" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Additional Facilities */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Additional Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="loadingDocks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Loading Docks</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Docks" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="anteChamber"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Ante Chamber Available</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weighBridge"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Weigh Bridge Available</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sortingGrading"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Sorting/Grading Facility</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="packHouse"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-6">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>Pack House Facility</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Financial & Operational */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Financial & Operational Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="yearOfEstablishment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year of Establishment</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="YYYY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastRenovation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Renovation Year (Optional)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="YYYY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="investmentCost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Investment (₹ Lakhs)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Investment cost" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="annualRevenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Annual Revenue (₹ Lakhs) - Optional</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Revenue" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="employeeCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Employees</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Employees" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Commodity & Usage */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Commodity & Usage Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="commoditiesStored"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Commodities Stored</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Potato, Apple, Onion" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="peakSeasonMonths"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Peak Season Months</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Oct-Mar" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="averageOccupancy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Average Occupancy (%)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 75" {...field} />
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
                      I certify that the information provided is true and accurate. I understand this data will be used for NHB subsidy eligibility assessment.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Submit Data Sheet</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ColdStorageDataSheetForm;
