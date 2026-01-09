import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropBuyerRequirementForm = () => {
  const [formData, setFormData] = useState({
    buyerName: "",
    companyName: "",
    phone: "",
    email: "",
    cropType: "",
    variety: "",
    quantity: "",
    quantityUnit: "quintals",
    qualityGrade: "",
    deliveryTimeline: "",
    preferredLocation: "",
    locationType: "",
    paymentTerms: "",
    advancePercentage: "",
    priceRange: "",
    specialRequirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buyer Requirement:", formData);
    toast.success("Buyer requirement submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Buyer Requirement Form</CardTitle>
        <CardDescription>
          Submit your crop purchase requirements to find suitable sellers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Buyer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Buyer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="buyerName">Buyer Name *</Label>
                <Input
                  id="buyerName"
                  value={formData.buyerName}
                  onChange={(e) => handleChange("buyerName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company/Organization Name</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Contact Number *</Label>
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
            </div>
          </div>

          {/* Crop Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Crop Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type *</Label>
                <Select value={formData.cropType} onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="millets">Millets</SelectItem>
                    <SelectItem value="barley">Barley</SelectItem>
                    <SelectItem value="sorghum">Sorghum</SelectItem>
                    <SelectItem value="oats">Oats</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="variety">Variety Needed *</Label>
                <Input
                  id="variety"
                  placeholder="e.g., Basmati, Sharbati"
                  value={formData.variety}
                  onChange={(e) => handleChange("variety", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Required *</Label>
                <div className="flex gap-2">
                  <Input
                    id="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={formData.quantityUnit} onValueChange={(value) => handleChange("quantityUnit", value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quintals">Quintals</SelectItem>
                      <SelectItem value="tons">Tons</SelectItem>
                      <SelectItem value="kg">Kilograms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="qualityGrade">Quality Grade Preferred</Label>
                <Select value={formData.qualityGrade} onValueChange={(value) => handleChange("qualityGrade", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quality grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade-a">Grade A (Premium)</SelectItem>
                    <SelectItem value="grade-b">Grade B (Standard)</SelectItem>
                    <SelectItem value="grade-c">Grade C (Economy)</SelectItem>
                    <SelectItem value="faq">FAQ (Fair Average Quality)</SelectItem>
                    <SelectItem value="any">Any Grade</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Delivery Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryTimeline">Delivery Timeline *</Label>
                <Input
                  id="deliveryTimeline"
                  type="date"
                  value={formData.deliveryTimeline}
                  onChange={(e) => handleChange("deliveryTimeline", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="locationType">Preferred Location Type *</Label>
                <Select value={formData.locationType} onValueChange={(value) => handleChange("locationType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warehouse">Warehouse</SelectItem>
                    <SelectItem value="port">Port</SelectItem>
                    <SelectItem value="mandi">Mandi</SelectItem>
                    <SelectItem value="factory">Factory/Mill</SelectItem>
                    <SelectItem value="any">Any Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="preferredLocation">Preferred Location Address</Label>
                <Input
                  id="preferredLocation"
                  placeholder="City, State or specific address"
                  value={formData.preferredLocation}
                  onChange={(e) => handleChange("preferredLocation", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Payment Terms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="paymentTerms">Payment Mode *</Label>
                <Select value={formData.paymentTerms} onValueChange={(value) => handleChange("paymentTerms", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advance">Full Advance</SelectItem>
                    <SelectItem value="partial-advance">Partial Advance</SelectItem>
                    <SelectItem value="on-delivery">On Delivery</SelectItem>
                    <SelectItem value="credit-7">Credit (7 Days)</SelectItem>
                    <SelectItem value="credit-15">Credit (15 Days)</SelectItem>
                    <SelectItem value="credit-30">Credit (30 Days)</SelectItem>
                    <SelectItem value="escrow">Escrow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="advancePercentage">Advance Percentage</Label>
                <Input
                  id="advancePercentage"
                  type="number"
                  placeholder="e.g., 25"
                  value={formData.advancePercentage}
                  onChange={(e) => handleChange("advancePercentage", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priceRange">Price Range (₹/Quintal)</Label>
                <Input
                  id="priceRange"
                  placeholder="e.g., 2000-2500"
                  value={formData.priceRange}
                  onChange={(e) => handleChange("priceRange", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequirements">Special Requirements</Label>
            <Textarea
              id="specialRequirements"
              placeholder="Any special quality requirements, certifications needed, packaging preferences..."
              value={formData.specialRequirements}
              onChange={(e) => handleChange("specialRequirements", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">Submit Requirement</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropBuyerRequirementForm;
