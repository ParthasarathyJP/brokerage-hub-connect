import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Home, Building2, Factory, Mountain } from "lucide-react";

const propertyTypes = {
  residential: {
    label: "Residential",
    icon: Home,
    subtypes: [
      "Apartment/Flat",
      "Independent House/Villa",
      "Gated Community",
      "Builder Floor",
      "Plot",
      "Duplex",
      "Penthouse",
      "Farmhouse",
      "Studio Apartment",
      "Eco-friendly House",
      "Houseboat",
    ],
  },
  commercial: {
    label: "Commercial",
    icon: Building2,
    subtypes: [
      "Office Space",
      "Coworking Space",
      "Retail Shop",
      "Mall Space",
      "Showroom",
      "Hotel",
      "Resort",
      "Serviced Apartment",
      "Clinic",
      "Hospital",
      "Diagnostic Center",
      "Mixed-use Development",
    ],
  },
  industrial: {
    label: "Industrial",
    icon: Factory,
    subtypes: [
      "Factory",
      "Manufacturing Unit",
      "Warehouse",
      "Logistics Park",
      "Special Economic Zone (SEZ)",
      "Cold Storage Facility",
    ],
  },
  land: {
    label: "Land / Agricultural",
    icon: Mountain,
    subtypes: [
      "Agricultural Land",
      "Raw Land",
      "Plotted Development",
      "Farmhouse Land",
    ],
  },
};

const formSchema = z.object({
  listingType: z.string().min(1, "Please select listing type (Sale or Rent)"),
  propertyCategory: z.string().min(1, "Please select a property category"),
  propertySubtype: z.string().min(1, "Please select a property type"),
  title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title must be less than 100 characters"),
  description: z.string().min(20, "Description must be at least 20 characters").max(2000, "Description must be less than 2000 characters"),
  price: z.string().min(1, "Please enter a price"),
  area: z.string().min(1, "Please enter the area"),
  areaUnit: z.string().min(1, "Please select area unit"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(5, "Please enter a valid pincode"),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  furnishing: z.string().optional(),
  facing: z.string().optional(),
  ownerName: z.string().min(2, "Owner name is required"),
  ownerPhone: z.string().min(10, "Please enter a valid phone number"),
  ownerEmail: z.string().email("Please enter a valid email"),
});

type FormData = z.infer<typeof formSchema>;

const PropertyPostingForm = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      listingType: "",
      propertyCategory: "",
      propertySubtype: "",
      title: "",
      description: "",
      price: "",
      area: "",
      areaUnit: "sqft",
      address: "",
      city: "",
      state: "",
      pincode: "",
      bedrooms: "",
      bathrooms: "",
      furnishing: "",
      facing: "",
      ownerName: "",
      ownerPhone: "",
      ownerEmail: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Property submitted:", data);
    toast({
      title: "Property Listed Successfully!",
      description: "Your property has been submitted for review.",
    });
    form.reset();
    setSelectedCategory("");
  };

  const showResidentialFields = selectedCategory === "residential";

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Post Your Property</CardTitle>
        <CardDescription>
          Fill in the details below to list your property on the marketplace
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Listing Type Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Listing Type</h3>
              <FormField
                control={form.control}
                name="listingType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Are you looking to Sell or Rent?</FormLabel>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "sale", label: "For Sale", description: "Sell your property" },
                        { value: "rent", label: "For Rent", description: "Rent out your property" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => field.onChange(option.value)}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                            field.value === option.value
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <span className="font-semibold block">{option.label}</span>
                          <span className="text-sm opacity-80">{option.description}</span>
                        </button>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Property Type Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Property Type</h3>
              
              {/* Category Selection Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(propertyTypes).map(([key, value]) => {
                  const Icon = value.icon;
                  const isSelected = selectedCategory === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(key);
                        form.setValue("propertyCategory", key);
                        form.setValue("propertySubtype", "");
                      }}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                        isSelected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-8 w-8 mx-auto mb-2" />
                      <span className="font-medium">{value.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Subtype Selection */}
              {selectedCategory && (
                <FormField
                  control={form.control}
                  name="propertySubtype"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Subtype</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {propertyTypes[selectedCategory as keyof typeof propertyTypes].subtypes.map((subtype) => (
                            <SelectItem key={subtype} value={subtype}>
                              {subtype}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Property Details</h3>
              
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Spacious 3BHK Apartment in Prime Location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your property in detail including amenities, nearby facilities, etc."
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (₹)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter price" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter area" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="areaUnit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unit</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sqft">Sq. Ft.</SelectItem>
                          <SelectItem value="sqm">Sq. M.</SelectItem>
                          <SelectItem value="sqyd">Sq. Yard</SelectItem>
                          <SelectItem value="acre">Acre</SelectItem>
                          <SelectItem value="hectare">Hectare</SelectItem>
                          <SelectItem value="cent">Cent</SelectItem>
                          <SelectItem value="ground">Ground</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Residential-specific fields */}
              {showResidentialFields && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <FormField
                    control={form.control}
                    name="bedrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bedrooms</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["1", "2", "3", "4", "5", "6+"].map((num) => (
                              <SelectItem key={num} value={num}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bathrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bathrooms</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["1", "2", "3", "4", "5+"].map((num) => (
                              <SelectItem key={num} value={num}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="furnishing"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Furnishing</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="unfurnished">Unfurnished</SelectItem>
                            <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
                            <SelectItem value="fully-furnished">Fully Furnished</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="facing"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Facing</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="north">North</SelectItem>
                            <SelectItem value="south">South</SelectItem>
                            <SelectItem value="east">East</SelectItem>
                            <SelectItem value="west">West</SelectItem>
                            <SelectItem value="north-east">North-East</SelectItem>
                            <SelectItem value="north-west">North-West</SelectItem>
                            <SelectItem value="south-east">South-East</SelectItem>
                            <SelectItem value="south-west">South-West</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>

            {/* Location Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Location</h3>
              
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Full address including building name, street, landmark"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter city" {...field} />
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
                        <Input placeholder="Enter state" {...field} />
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
                        <Input placeholder="Enter pincode" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Owner Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Owner / Contact Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="ownerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ownerPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ownerEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => form.reset()}>
                Clear Form
              </Button>
              <Button type="submit" className="min-w-[150px]">
                Post Property
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PropertyPostingForm;
