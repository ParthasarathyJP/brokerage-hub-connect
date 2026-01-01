import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const WaterResourceBrokerageForm = () => {
  const [formData, setFormData] = useState({
    brokerName: "",
    contactPerson: "",
    phone: "",
    email: "",
    address: "",
    sourceType: "",
    sourceLocation: "",
    licenseNumber: "",
    licenseAuthority: "",
    licenseExpiry: "",
    waterCapacity: "",
    capacityUnit: "liters",
    pricingPerUnit: "",
    pricingUnit: "per_1000_liters",
    minimumOrder: "",
    deliveryMethod: "",
    qualityCertification: "",
    additionalInfo: "",
  });

  const [seasonalAvailability, setSeasonalAvailability] = useState({
    summer: false,
    monsoon: false,
    winter: false,
    yearRound: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Water Resource Brokerage:", { ...formData, seasonalAvailability });
    toast.success("Water resource listing submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Water Resource Brokerage Form</CardTitle>
        <CardDescription>
          List your water resources for agricultural irrigation services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Broker Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Broker / Provider Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brokerName">Broker / Company Name *</Label>
                <Input
                  id="brokerName"
                  value={formData.brokerName}
                  onChange={(e) => handleChange("brokerName", e.target.value)}
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
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Water Source Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Water Source Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sourceType">Source Type *</Label>
                <Select value={formData.sourceType} onValueChange={(value) => handleChange("sourceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select source type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canal">Canal</SelectItem>
                    <SelectItem value="borewell">Borewell</SelectItem>
                    <SelectItem value="tank">Tank/Pond</SelectItem>
                    <SelectItem value="river">River</SelectItem>
                    <SelectItem value="reservoir">Reservoir</SelectItem>
                    <SelectItem value="treated">Treated Water</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sourceLocation">Source Location *</Label>
                <Input
                  id="sourceLocation"
                  placeholder="Village/District/State"
                  value={formData.sourceLocation}
                  onChange={(e) => handleChange("sourceLocation", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Licensing Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Water Rights & Licensing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="licenseNumber">License Number</Label>
                <Input
                  id="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={(e) => handleChange("licenseNumber", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseAuthority">Issuing Authority</Label>
                <Input
                  id="licenseAuthority"
                  placeholder="e.g., Water Resources Dept"
                  value={formData.licenseAuthority}
                  onChange={(e) => handleChange("licenseAuthority", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseExpiry">License Expiry Date</Label>
                <Input
                  id="licenseExpiry"
                  type="date"
                  value={formData.licenseExpiry}
                  onChange={(e) => handleChange("licenseExpiry", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Availability Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Seasonal Availability</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries({
                summer: "Summer (Mar-Jun)",
                monsoon: "Monsoon (Jul-Oct)",
                winter: "Winter (Nov-Feb)",
                yearRound: "Year Round",
              }).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={seasonalAvailability[key as keyof typeof seasonalAvailability]}
                    onCheckedChange={(checked) =>
                      setSeasonalAvailability((prev) => ({ ...prev, [key]: checked as boolean }))
                    }
                  />
                  <Label htmlFor={key} className="text-sm">{label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Capacity & Pricing Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Capacity & Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="waterCapacity">Available Capacity *</Label>
                <div className="flex gap-2">
                  <Input
                    id="waterCapacity"
                    type="number"
                    value={formData.waterCapacity}
                    onChange={(e) => handleChange("waterCapacity", e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={formData.capacityUnit} onValueChange={(value) => handleChange("capacityUnit", value)}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="liters">Liters/day</SelectItem>
                      <SelectItem value="cubic_meters">Cubic Meters/day</SelectItem>
                      <SelectItem value="gallons">Gallons/day</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricingPerUnit">Pricing (₹) *</Label>
                <div className="flex gap-2">
                  <Input
                    id="pricingPerUnit"
                    type="number"
                    value={formData.pricingPerUnit}
                    onChange={(e) => handleChange("pricingPerUnit", e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={formData.pricingUnit} onValueChange={(value) => handleChange("pricingUnit", value)}>
                    <SelectTrigger className="w-44">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="per_1000_liters">Per 1000 Liters</SelectItem>
                      <SelectItem value="per_cubic_meter">Per Cubic Meter</SelectItem>
                      <SelectItem value="per_hour">Per Hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="minimumOrder">Minimum Order Quantity</Label>
                <Input
                  id="minimumOrder"
                  value={formData.minimumOrder}
                  onChange={(e) => handleChange("minimumOrder", e.target.value)}
                  placeholder="e.g., 5000 liters"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryMethod">Delivery Method</Label>
                <Select value={formData.deliveryMethod} onValueChange={(value) => handleChange("deliveryMethod", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select delivery method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tanker">Tanker Delivery</SelectItem>
                    <SelectItem value="pipeline">Pipeline Supply</SelectItem>
                    <SelectItem value="canal">Canal Distribution</SelectItem>
                    <SelectItem value="pickup">Self Pickup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Quality & Certification Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Quality & Certification</h3>
            <div className="space-y-2">
              <Label htmlFor="qualityCertification">Quality Certifications</Label>
              <Textarea
                id="qualityCertification"
                placeholder="List any water quality certifications or test reports..."
                value={formData.qualityCertification}
                onChange={(e) => handleChange("qualityCertification", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Any other relevant details..."
                value={formData.additionalInfo}
                onChange={(e) => handleChange("additionalInfo", e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Listing</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WaterResourceBrokerageForm;
