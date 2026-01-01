import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const IrrigationMarketplaceListingForm = () => {
  const [formData, setFormData] = useState({
    listingType: "",
    sellerName: "",
    sellerPhone: "",
    sellerEmail: "",
    sellerAddress: "",
    equipmentType: "",
    equipmentBrand: "",
    equipmentModel: "",
    serialNumber: "",
    purchaseDate: "",
    purchasePrice: "",
    condition: "",
    usagePeriod: "",
    askingPrice: "",
    negotiable: "",
    quantity: "",
    specifications: "",
    reasonForSale: "",
    accessories: "",
    warrantyRemaining: "",
    deliveryOption: "",
    deliveryCharges: "",
    preferredLocation: "",
    availableFrom: "",
    listingDuration: "",
    additionalInfo: "",
  });

  const [features, setFeatures] = useState({
    workingCondition: false,
    originalParts: false,
    serviceHistory: false,
    manualIncluded: false,
    spareParts: false,
    installationSupport: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Marketplace Listing:", { ...formData, features });
    toast.success("Equipment listing submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Marketplace Listing Form</CardTitle>
        <CardDescription>
          List your used irrigation equipment for resale in the marketplace
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Listing Type */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Listing Type</h3>
            <div className="space-y-2">
              <Label htmlFor="listingType">What do you want to do? *</Label>
              <Select value={formData.listingType} onValueChange={(value) => handleChange("listingType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select listing type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sell">Sell Equipment</SelectItem>
                  <SelectItem value="rent">Rent Out Equipment</SelectItem>
                  <SelectItem value="exchange">Exchange</SelectItem>
                  <SelectItem value="donate">Donate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Seller Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Seller Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sellerName">Full Name *</Label>
                <Input
                  id="sellerName"
                  value={formData.sellerName}
                  onChange={(e) => handleChange("sellerName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerPhone">Phone Number *</Label>
                <Input
                  id="sellerPhone"
                  type="tel"
                  value={formData.sellerPhone}
                  onChange={(e) => handleChange("sellerPhone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerEmail">Email Address</Label>
                <Input
                  id="sellerEmail"
                  type="email"
                  value={formData.sellerEmail}
                  onChange={(e) => handleChange("sellerEmail", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sellerAddress">Location / Address *</Label>
              <Textarea
                id="sellerAddress"
                value={formData.sellerAddress}
                onChange={(e) => handleChange("sellerAddress", e.target.value)}
                required
                placeholder="Village, District, State"
              />
            </div>
          </div>

          {/* Equipment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Equipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="equipmentType">Equipment Type *</Label>
                <Select value={formData.equipmentType} onValueChange={(value) => handleChange("equipmentType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drip_system">Complete Drip System</SelectItem>
                    <SelectItem value="sprinkler_system">Sprinkler System</SelectItem>
                    <SelectItem value="pump">Water Pump</SelectItem>
                    <SelectItem value="motor">Electric Motor</SelectItem>
                    <SelectItem value="diesel_engine">Diesel Engine</SelectItem>
                    <SelectItem value="solar_pump">Solar Pump Set</SelectItem>
                    <SelectItem value="pipes">Pipes & Fittings</SelectItem>
                    <SelectItem value="filter">Filter Unit</SelectItem>
                    <SelectItem value="controller">Irrigation Controller</SelectItem>
                    <SelectItem value="sensor">IoT Sensors</SelectItem>
                    <SelectItem value="tank">Water Tank</SelectItem>
                    <SelectItem value="other">Other Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentBrand">Brand / Manufacturer *</Label>
                <Input
                  id="equipmentBrand"
                  value={formData.equipmentBrand}
                  onChange={(e) => handleChange("equipmentBrand", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipmentModel">Model Name / Number</Label>
                <Input
                  id="equipmentModel"
                  value={formData.equipmentModel}
                  onChange={(e) => handleChange("equipmentModel", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serialNumber">Serial Number</Label>
                <Input
                  id="serialNumber"
                  value={formData.serialNumber}
                  onChange={(e) => handleChange("serialNumber", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="purchaseDate">Purchase Date</Label>
                <Input
                  id="purchaseDate"
                  type="date"
                  value={formData.purchaseDate}
                  onChange={(e) => handleChange("purchaseDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="purchasePrice">Original Purchase Price (₹)</Label>
                <Input
                  id="purchasePrice"
                  type="number"
                  value={formData.purchasePrice}
                  onChange={(e) => handleChange("purchasePrice", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Available *</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                  required
                  min="1"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="usagePeriod">Usage Period</Label>
                <Select value={formData.usagePeriod} onValueChange={(value) => handleChange("usagePeriod", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How long used?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less_1_year">Less than 1 year</SelectItem>
                    <SelectItem value="1_2_years">1-2 years</SelectItem>
                    <SelectItem value="2_3_years">2-3 years</SelectItem>
                    <SelectItem value="3_5_years">3-5 years</SelectItem>
                    <SelectItem value="5_plus_years">More than 5 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Condition & Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Condition & Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="condition">Equipment Condition *</Label>
                <Select value={formData.condition} onValueChange={(value) => handleChange("condition", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent - Like New</SelectItem>
                    <SelectItem value="good">Good - Minor Wear</SelectItem>
                    <SelectItem value="fair">Fair - Some Wear</SelectItem>
                    <SelectItem value="needs_repair">Needs Minor Repair</SelectItem>
                    <SelectItem value="for_parts">For Parts Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="warrantyRemaining">Warranty Remaining</Label>
                <Select value={formData.warrantyRemaining} onValueChange={(value) => handleChange("warrantyRemaining", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select warranty status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Warranty</SelectItem>
                    <SelectItem value="less_6_months">Less than 6 months</SelectItem>
                    <SelectItem value="6_12_months">6-12 months</SelectItem>
                    <SelectItem value="1_2_years">1-2 years</SelectItem>
                    <SelectItem value="2_plus_years">More than 2 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries({
                workingCondition: "In Working Condition",
                originalParts: "Original Parts",
                serviceHistory: "Service History Available",
                manualIncluded: "Manual Included",
                spareParts: "Spare Parts Included",
                installationSupport: "Installation Support",
              }).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={features[key as keyof typeof features]}
                    onCheckedChange={(checked) =>
                      setFeatures((prev) => ({ ...prev, [key]: checked as boolean }))
                    }
                  />
                  <Label htmlFor={key} className="text-sm">{label}</Label>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="specifications">Technical Specifications</Label>
              <Textarea
                id="specifications"
                placeholder="HP, capacity, dimensions, material, etc..."
                value={formData.specifications}
                onChange={(e) => handleChange("specifications", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accessories">Accessories / Parts Included</Label>
              <Textarea
                id="accessories"
                placeholder="List any accessories or spare parts included..."
                value={formData.accessories}
                onChange={(e) => handleChange("accessories", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reasonForSale">Reason for Selling</Label>
              <Select value={formData.reasonForSale} onValueChange={(value) => handleChange("reasonForSale", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upgrade">Upgrading to New System</SelectItem>
                  <SelectItem value="surplus">Surplus Equipment</SelectItem>
                  <SelectItem value="changed_crops">Changed Crops</SelectItem>
                  <SelectItem value="sold_land">Sold Land</SelectItem>
                  <SelectItem value="financial">Financial Needs</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="askingPrice">Asking Price (₹) *</Label>
                <Input
                  id="askingPrice"
                  type="number"
                  value={formData.askingPrice}
                  onChange={(e) => handleChange("askingPrice", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="negotiable">Price Negotiable?</Label>
                <Select value={formData.negotiable} onValueChange={(value) => handleChange("negotiable", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, Negotiable</SelectItem>
                    <SelectItem value="slightly">Slightly Negotiable</SelectItem>
                    <SelectItem value="fixed">Fixed Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Delivery Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Delivery & Availability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryOption">Delivery Option *</Label>
                <Select value={formData.deliveryOption} onValueChange={(value) => handleChange("deliveryOption", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select delivery option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pickup_only">Pickup Only</SelectItem>
                    <SelectItem value="local_delivery">Local Delivery Available</SelectItem>
                    <SelectItem value="shipping">Can Ship (Buyer Pays)</SelectItem>
                    <SelectItem value="free_delivery">Free Delivery (Local)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryCharges">Delivery Charges (₹, if applicable)</Label>
                <Input
                  id="deliveryCharges"
                  type="number"
                  value={formData.deliveryCharges}
                  onChange={(e) => handleChange("deliveryCharges", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredLocation">Preferred Buyer Location</Label>
                <Input
                  id="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={(e) => handleChange("preferredLocation", e.target.value)}
                  placeholder="Any specific area preference"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="availableFrom">Available From</Label>
                <Input
                  id="availableFrom"
                  type="date"
                  value={formData.availableFrom}
                  onChange={(e) => handleChange("availableFrom", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="listingDuration">Listing Duration</Label>
                <Select value={formData.listingDuration} onValueChange={(value) => handleChange("listingDuration", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How long to list?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7_days">7 Days</SelectItem>
                    <SelectItem value="14_days">14 Days</SelectItem>
                    <SelectItem value="30_days">30 Days</SelectItem>
                    <SelectItem value="60_days">60 Days</SelectItem>
                    <SelectItem value="until_sold">Until Sold</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Any other details that might help buyers..."
                value={formData.additionalInfo}
                onChange={(e) => handleChange("additionalInfo", e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Create Listing</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default IrrigationMarketplaceListingForm;
