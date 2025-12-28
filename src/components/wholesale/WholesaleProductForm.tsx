import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Package, Truck, Scale, Calendar } from "lucide-react";

const productCategories = {
  fmcg: {
    label: "FMCG (Fast-Moving Consumer Goods)",
    subtypes: ["Packaged Foods", "Beverages", "Toiletries", "Cleaning Supplies", "Personal Care", "Snacks & Confectionery"],
    units: ["Cartons", "Cases", "Pallets", "Dozen", "Gross"]
  },
  consumer_durables: {
    label: "Consumer Durables",
    subtypes: ["Electronics", "Home Appliances", "Furniture", "Kitchen Equipment", "IT Hardware"],
    units: ["Units", "Sets", "Pairs", "Boxes"]
  },
  industrial: {
    label: "Industrial Goods",
    subtypes: ["Raw Materials", "Machinery Parts", "Tools", "Safety Equipment", "Lubricants"],
    units: ["Kg", "Tons", "Liters", "Units", "Meters"]
  },
  agricultural: {
    label: "Agricultural Products",
    subtypes: ["Grains", "Pulses", "Fruits", "Vegetables", "Spices", "Seeds"],
    units: ["Kg", "Quintals", "Tons", "Crates", "Sacks"]
  },
  textiles: {
    label: "Textiles & Apparel",
    subtypes: ["Fabrics", "Garments", "Footwear", "Accessories", "Home Textiles"],
    units: ["Bundles", "Rolls", "Meters", "Cartons", "Dozen"]
  },
  pharmaceuticals: {
    label: "Pharmaceuticals & Healthcare",
    subtypes: ["Medicines", "Medical Devices", "Consumables", "Supplements", "Lab Equipment"],
    units: ["Strips", "Boxes", "Bottles", "Units", "Cases"]
  },
  construction: {
    label: "Construction Materials",
    subtypes: ["Cement", "Steel", "Tiles", "Paints", "Plumbing", "Electrical"],
    units: ["Bags", "Tons", "Sq.ft", "Liters", "Kg"]
  },
  stationery: {
    label: "Stationery & Office Supplies",
    subtypes: ["Paper Products", "Writing Instruments", "Printers & Cartridges", "Files & Folders", "Office Equipment"],
    units: ["Reams", "Packs", "Cartons", "Dozen", "Units"]
  }
};

const formSchema = z.object({
  category: z.string().min(1, "Category is required"),
  subtype: z.string().min(1, "Product type is required"),
  productName: z.string().min(2, "Product name is required").max(100),
  brand: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters").max(1000),
  sku: z.string().optional(),
  packagingUnit: z.string().min(1, "Packaging unit is required"),
  minOrderQuantity: z.string().min(1, "Minimum order quantity is required"),
  pricePerUnit: z.string().min(1, "Price per unit is required"),
  availableStock: z.string().min(1, "Available stock is required"),
  manufacturingDate: z.string().optional(),
  expiryDate: z.string().optional(),
  batchNumber: z.string().optional(),
  gstRate: z.string().optional(),
  hsnCode: z.string().optional(),
  warehouseLocation: z.string().min(1, "Warehouse location is required"),
  deliveryTime: z.string().optional(),
  supplierName: z.string().min(1, "Supplier name is required"),
  supplierContact: z.string().min(10, "Valid contact number required"),
});

type FormData = z.infer<typeof formSchema>;

const WholesaleProductForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      subtype: "",
      productName: "",
      brand: "",
      description: "",
      sku: "",
      packagingUnit: "",
      minOrderQuantity: "",
      pricePerUnit: "",
      availableStock: "",
      manufacturingDate: "",
      expiryDate: "",
      batchNumber: "",
      gstRate: "",
      hsnCode: "",
      warehouseLocation: "",
      deliveryTime: "",
      supplierName: "",
      supplierContact: "",
    },
  });

  const selectedCategory = form.watch("category");
  const categoryData = selectedCategory ? productCategories[selectedCategory as keyof typeof productCategories] : null;

  const onSubmit = (data: FormData) => {
    console.log("Product submitted:", data);
    toast({
      title: "Product Listed Successfully",
      description: "Your wholesale product has been added to the catalog.",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Product Category */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Package className="h-5 w-5 text-primary" />
              Product Category
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(productCategories).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value.label}
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
              name="subtype"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Type *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} disabled={!selectedCategory}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categoryData?.subtypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Product Details */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Product Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter product name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input placeholder="Brand name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your product..." rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="sku"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SKU / Product Code</FormLabel>
                    <FormControl>
                      <Input placeholder="SKU-001" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hsnCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>HSN Code</FormLabel>
                    <FormControl>
                      <Input placeholder="HSN code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gstRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GST Rate (%)</FormLabel>
                    <FormControl>
                      <Input placeholder="18" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Pricing & Stock */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Scale className="h-5 w-5 text-primary" />
              Pricing & Stock
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="packagingUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Packaging Unit *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} disabled={!selectedCategory}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categoryData?.units.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit}
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
              name="pricePerUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price per Unit (₹) *</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minOrderQuantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Min. Order Qty *</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availableStock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available Stock *</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Batch & Expiry (for applicable categories) */}
        {(selectedCategory === "fmcg" || selectedCategory === "pharmaceuticals" || selectedCategory === "agricultural") && (
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-primary" />
                Batch & Expiry Details
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="batchNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Batch Number</FormLabel>
                    <FormControl>
                      <Input placeholder="BATCH-001" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="manufacturingDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Manufacturing Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        )}

        {/* Logistics */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Truck className="h-5 w-5 text-primary" />
              Logistics & Supplier
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="warehouseLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Warehouse Location *</FormLabel>
                    <FormControl>
                      <Input placeholder="City, State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="deliveryTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Time</FormLabel>
                    <FormControl>
                      <Input placeholder="3-5 business days" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="supplierName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supplier / Company Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="supplierContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 98765 43210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset Form
          </Button>
          <Button type="submit" className="gradient-primary text-primary-foreground">
            List Product
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default WholesaleProductForm;
