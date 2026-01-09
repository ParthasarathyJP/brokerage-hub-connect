import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CropListingForm = () => {
  const [formData, setFormData] = useState({
    cropType: "",
    variety: "",
    quantity: "",
    quantityUnit: "quintals",
    harvestDate: "",
    shelfLife: "",
    qualityGrade: "",
    pricePerUnit: "",
    priceUnit: "quintal",
    minimumOrder: "",
    availableFrom: "",
    farmLocation: "",
    storageType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Crop Listing:", formData);
    toast.success("Crop listing submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Crop Listing Form</CardTitle>
        <CardDescription>
          List your crops for sale on the marketplace
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Crop Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Crop Details</h3>
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
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="variety">Variety *</Label>
                <Input
                  id="variety"
                  placeholder="e.g., Basmati, Sharbati, Non-Basmati"
                  value={formData.variety}
                  onChange={(e) => handleChange("variety", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Quantity & Availability */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Quantity & Availability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Available *</Label>
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
                <Label htmlFor="minimumOrder">Minimum Order Quantity</Label>
                <Input
                  id="minimumOrder"
                  placeholder="e.g., 10 quintals"
                  value={formData.minimumOrder}
                  onChange={(e) => handleChange("minimumOrder", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="harvestDate">Harvest Date *</Label>
                <Input
                  id="harvestDate"
                  type="date"
                  value={formData.harvestDate}
                  onChange={(e) => handleChange("harvestDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shelfLife">Expected Shelf Life</Label>
                <Input
                  id="shelfLife"
                  placeholder="e.g., 6 months"
                  value={formData.shelfLife}
                  onChange={(e) => handleChange("shelfLife", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Quality & Pricing */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Quality & Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qualityGrade">Quality Grade *</Label>
                <Select value={formData.qualityGrade} onValueChange={(value) => handleChange("qualityGrade", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quality grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade-a">Grade A (Premium)</SelectItem>
                    <SelectItem value="grade-b">Grade B (Standard)</SelectItem>
                    <SelectItem value="grade-c">Grade C (Economy)</SelectItem>
                    <SelectItem value="faq">FAQ (Fair Average Quality)</SelectItem>
                    <SelectItem value="fci-standard">FCI Standard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricePerUnit">Price Expectation *</Label>
                <div className="flex gap-2">
                  <Input
                    id="pricePerUnit"
                    type="number"
                    placeholder="₹"
                    value={formData.pricePerUnit}
                    onChange={(e) => handleChange("pricePerUnit", e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={formData.priceUnit} onValueChange={(value) => handleChange("priceUnit", value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Per Kg</SelectItem>
                      <SelectItem value="quintal">Per Quintal</SelectItem>
                      <SelectItem value="ton">Per Ton</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Storage & Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Storage & Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farmLocation">Farm/Storage Location *</Label>
                <Input
                  id="farmLocation"
                  placeholder="Village, District, State"
                  value={formData.farmLocation}
                  onChange={(e) => handleChange("farmLocation", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storageType">Current Storage Type</Label>
                <Select value={formData.storageType} onValueChange={(value) => handleChange("storageType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select storage type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farm">Farm Storage</SelectItem>
                    <SelectItem value="warehouse">Warehouse</SelectItem>
                    <SelectItem value="cold-storage">Cold Storage</SelectItem>
                    <SelectItem value="mandi">Mandi</SelectItem>
                  </SelectContent>
                </Select>
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
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Additional Description</Label>
            <Textarea
              id="description"
              placeholder="Any additional details about the crop..."
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">Submit Listing</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropListingForm;
