import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const IrrigationVendorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    website: "",
    address: "",
    gstNumber: "",
    panNumber: "",
    yearsInBusiness: "",
    productDescription: "",
    warrantyDetails: "",
    maintenanceServices: "",
    pricingInfo: "",
    serviceCoverage: "",
  });

  const [products, setProducts] = useState({
    dripKits: false,
    sprinklers: false,
    pumps: false,
    pipes: false,
    filters: false,
    valves: false,
    controllers: false,
    sensors: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Vendor Registration:", { ...formData, products });
    toast.success("Vendor registration submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleProductChange = (product: string, checked: boolean) => {
    setProducts((prev) => ({ ...prev, [product]: checked }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Irrigation Equipment Vendor Registration</CardTitle>
        <CardDescription>
          Register your company to supply irrigation equipment and services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Company Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleChange("contactPerson", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  placeholder="https://"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearsInBusiness">Years in Business</Label>
                <Input
                  id="yearsInBusiness"
                  type="number"
                  value={formData.yearsInBusiness}
                  onChange={(e) => handleChange("yearsInBusiness", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gstNumber">GST Number *</Label>
                <Input
                  id="gstNumber"
                  value={formData.gstNumber}
                  onChange={(e) => handleChange("gstNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="panNumber">PAN Number</Label>
                <Input
                  id="panNumber"
                  value={formData.panNumber}
                  onChange={(e) => handleChange("panNumber", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Business Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Product Catalog Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Product Catalog</h3>
            <p className="text-sm text-muted-foreground">Select the products you offer:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries({
                dripKits: "Drip Kits",
                sprinklers: "Sprinklers",
                pumps: "Pumps",
                pipes: "Pipes & Fittings",
                filters: "Filters",
                valves: "Valves",
                controllers: "Controllers",
                sensors: "IoT Sensors",
              }).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={products[key as keyof typeof products]}
                    onCheckedChange={(checked) => handleProductChange(key, checked as boolean)}
                  />
                  <Label htmlFor={key} className="text-sm">{label}</Label>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="productDescription">Product Description & Specifications</Label>
              <Textarea
                id="productDescription"
                placeholder="Describe your products, brands, and technical specifications..."
                value={formData.productDescription}
                onChange={(e) => handleChange("productDescription", e.target.value)}
                className="min-h-24"
              />
            </div>
          </div>

          {/* Pricing & Warranty Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Pricing & Warranty</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pricingInfo">Pricing Information</Label>
                <Textarea
                  id="pricingInfo"
                  placeholder="Provide pricing ranges or catalog details..."
                  value={formData.pricingInfo}
                  onChange={(e) => handleChange("pricingInfo", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="warrantyDetails">Warranty Details</Label>
                <Textarea
                  id="warrantyDetails"
                  placeholder="Describe warranty terms for your products..."
                  value={formData.warrantyDetails}
                  onChange={(e) => handleChange("warrantyDetails", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Service & Maintenance Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Service & Maintenance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="maintenanceServices">Maintenance Services Offered</Label>
                <Textarea
                  id="maintenanceServices"
                  placeholder="Installation, AMC, repairs, etc..."
                  value={formData.maintenanceServices}
                  onChange={(e) => handleChange("maintenanceServices", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serviceCoverage">Service Coverage Areas</Label>
                <Textarea
                  id="serviceCoverage"
                  placeholder="Districts/States you can service..."
                  value={formData.serviceCoverage}
                  onChange={(e) => handleChange("serviceCoverage", e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Registration</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default IrrigationVendorRegistrationForm;
